// lib/cron/seedOnly.ts
type SeedPayload = {
  name: string;
  email: string;
  gender: "male" | "female";
  learnerType: string;
  baseUrl: string;
};

const PROJECT_URL = process.env.NEXT_PUBLIC_PROJECT_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

function now() {
  return new Date().toISOString();
}

export async function seedContact({
  name,
  email,
  gender,
  learnerType,
  baseUrl,
}: SeedPayload) {
  if (!PROJECT_URL || !API_KEY) {
    const msg = "Missing env vars: NEXT_PUBLIC_PROJECT_URL / NEXT_PUBLIC_API_KEY";
    console.error(`[seedOnly][${now()}] ${msg}`);
    return { ok: false, status: 500, error: msg };
  }


  try {
    const delUrl = `${PROJECT_URL}/rest/v1/contacts?email=eq.${encodeURIComponent(email)}`;
    // console.log(`[seedOnly] DELETE check -> ${delUrl}`);

    const delRes = await fetch(delUrl, {
      method: "DELETE",
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        Prefer: "return=representation", // return deleted rows so we can count
      },
      cache: "no-store",
    });

    const delTxt = await delRes.text();
    if (!delRes.ok) {
      console.error(`[seedOnly] delete check failed status=${delRes.status} body=`, delTxt);
      return { ok: false, status: delRes.status, error: delTxt || "Delete check failed" };
    }

    let deletedRows: any[] = [];
    try { deletedRows = delTxt ? JSON.parse(delTxt) : []; } catch { }
    if (Array.isArray(deletedRows) && deletedRows.length > 0) {
      // console.log(`[seedOnly] existing contact(s) deleted: ${deletedRows.length}`);
      return { ok: true, action: "deleted", deleted: deletedRows.length };
    }
  } catch (e: any) {
    console.error("[seedOnly] delete-if-exists threw:", e?.message || e);
    return { ok: false, status: 500, error: String(e?.message || e) };
  }



  const link = `${baseUrl}/report?result=${encodeURIComponent(learnerType)}&gender=${gender}`;
  const url = `${PROJECT_URL}/rest/v1/contacts`;

  const payload = {
    name,
    gender,
    email,
    type: "Learner",
    link,
  };

  // console.log(`[seedOnly][${now()}] POST -> ${url}`);
  // console.log(`[seedOnly] payload ->`, payload);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload), // single object (same as your client code)
    cache: "no-store",
  });

  const text = await res.text();
  // console.log(`[seedOnly] response status=${res.status}`);
  if (!res.ok) {
    console.error(`[seedOnly] ERROR body=`, text);
    return { ok: false, status: res.status, error: text || "Insert failed" };
  }

  // Supabase returns JSON row(s)
  let data: any = null;
  try { data = JSON.parse(text); } catch { data = { text }; }
  // console.log(`[seedOnly] SUCCESS`);
  return { ok: true, data };
}