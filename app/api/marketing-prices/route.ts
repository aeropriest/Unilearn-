// app/api/marketing-prices/route.ts
import { NextResponse } from "next/server";
import { getMarketingPrices } from "@/lib/currency";

export const dynamic = 'force-dynamic';
export const revalidate = 43200;

export async function GET() {
  const data = await getMarketingPrices();
  return NextResponse.json({ data });
}
