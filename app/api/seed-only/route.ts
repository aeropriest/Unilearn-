// app/api/seed-only/route.ts
import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { seedContact } from "@/lib/cron/seedOnly";

export const revalidate = 43200; // optional; separate from function cache

function cacheFor(identity: string[]) {
  return unstable_cache(
    async (baseUrl: string) => {
      // important: baseUrl is passed in at call-time, not baked into the identity key
      const [name, email, gender, learnerType] = identity as [string, string, "male" | "female", string];
      return seedContact({ name, email, gender, learnerType, baseUrl });
    },
    // identity-based key => cache per unique identity for 12h
    ["seed-only", ...identity],
    { revalidate: 60 * 60 * 12 }
  );
}

export async function GET(req: Request) {
  
  const url = new URL(req.url);

  const name = url.searchParams.get("name") || "test";
  const email = url.searchParams.get("email") || "test@gmail.com";
  const learnerType = url.searchParams.get("learnerType") || "ESDT";
  const genderParam = (url.searchParams.get("gender") || "male").toLowerCase();
  const gender = (genderParam === "female" ? "female" : "male") as "male" | "female";

  const force = url.searchParams.get("force") === "1";
  const baseUrl = `${url.protocol}//${url.host}`;

  const identity = [name, email, gender, learnerType];
  const run = cacheFor(identity);

  let result;
  if (force && "revalidate" in run) {
    await run.revalidate!(); // clear this identity's cache
    result = await run(baseUrl); // run fresh
  } else {
    result = await run(baseUrl); // cached for 12h by identity
  }

  const status = (result as any).ok ? 200 : (result as any).status ?? 500;
  return NextResponse.json({ mode: force ? "forced" : "cached", ...result }, { status });
}
