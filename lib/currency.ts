// lib/currency.ts
import { unstable_cache } from "next/cache";

export const CURRENCIES = [
  "USD", "CNY", "HKD", "TWD", "PKR", "INR", "JPY", "KRW", "SGD",
  "PHP", "THB", "VND", "MYR", "EUR", "GBP", "NZD", "AUD",
] as const;

export const USD_AMOUNTS = [10, 20, 8, 16] as const;

type Rates = Record<string, number>;

const ER_API = "https://api.exchangeratesapi.io/v1/latest"; // docs endpoint
const HOST_API = "https://api.exchangerate.host/latest";     // fallback (no key)

const HARDCODED_FALLBACK_RATES: Rates = {
  USD: 1,
  CNY: 7.25,
  HKD: 7.83,
  TWD: 31.5,
  PKR: 278.5,
  INR: 83.2,
  JPY: 149.5,
  KRW: 1340,
  SGD: 1.35,
  PHP: 56.5,
  THB: 34.8,
  VND: 24500,
  MYR: 4.48,
  EUR: 0.92,
  GBP: 0.79,
  NZD: 1.67,
  AUD: 1.54,
};

/** tiny helper: fetch JSON with timeout + retries */
async function fetchJson(url: string, opts: { timeoutMs?: number; init?: RequestInit; retries?: number } = {}) {
  const { timeoutMs = 10_000, init, retries = 1 } = opts;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...init, signal: ctrl.signal, cache: "no-store" });
      const text = await res.text();
      let json: any;
      try { json = JSON.parse(text); } catch { throw new Error(`Non-JSON response (${res.status})`); }
      if (!res.ok) throw new Error(json?.error?.info || res.statusText || `HTTP ${res.status}`);
      return json;
    } catch (e) {
      if (attempt === retries) throw e;
    } finally {
      clearTimeout(t);
    }
  }
  throw new Error("unreachable");
}

/** Primary: exchangeratesapi.io — returns base EUR typically */
async function fetchRatesFromExchangeratesApi(symbols: readonly string[]): Promise<Rates> {
  const key = process.env.EXCHANGE_RATES_API_KEY;
  if (!key) throw new Error("Missing EXCHANGE_RATES_API_KEY");

  // Ask for USD + all targets; free plans often ignore base=USD, so don't send base.
  const requested = Array.from(new Set(["USD", ...symbols]));
  const url = `${ER_API}?access_key=${encodeURIComponent(key)}&symbols=${requested.join(",")}`;

  // console.log("[FX][server] ER_API →", url.replace(key, "***"));
  const json = await fetchJson(url, { timeoutMs: 12_000, retries: 1 });

  if (json?.success === false) throw new Error(json?.error?.info || "Provider error");
  const base: string = json?.base || "EUR";
  const rates: Rates = json?.rates || {};
  if (!rates.USD) throw new Error("Provider did not include USD in rates");

  // Convert provider Base→USD. If base == EUR, each rate is CUR/EUR; we need CUR/USD.
  // CUR/USD = (CUR/EUR) / (USD/EUR)
  const usdPerBase = rates.USD; // e.g., USD/EUR
  const out: Rates = { USD: 1 };
  for (const cur of symbols) {
    if (cur === "USD") { out.USD = 1; continue; }
    const curPerBase = rates[cur];
    if (typeof curPerBase !== "number") continue;
    out[cur] = curPerBase / usdPerBase;
  }
  return out;
}

/** Fallback: exchangerate.host — free, no key, base EUR */
async function fetchRatesFromHost(symbols: readonly string[]): Promise<Rates> {
  const requested = Array.from(new Set(["USD", ...symbols]));
  const url = `${HOST_API}?symbols=${requested.join(",")}`; // base defaults to EUR
  // console.log("[FX][server] HOST_API →", url);
  const json = await fetchJson(url, { timeoutMs: 8_000, retries: 0 });

  const rates: Rates = json?.rates || {};
  if (!rates.USD) throw new Error("Fallback missing USD rate");
  const out: Rates = { USD: 1 };
  for (const cur of symbols) {
    if (cur === "USD") continue;
    const curPerEUR = rates[cur];
    if (typeof curPerEUR !== "number") continue;
    out[cur] = curPerEUR / rates.USD;
  }
  return out;
}

async function fetchUsdRates(symbols: readonly string[]): Promise<Rates> {
  try {
    return await fetchRatesFromExchangeratesApi(symbols);
  } catch (e) {
    console.warn("[FX][server] Primary provider failed, falling back:", e);
    try {
      return await fetchRatesFromHost(symbols);
    } catch (e2) {
      console.warn("[FX][server] Fallback provider also failed, using hardcoded rates:", e2);
      const out: Rates = { USD: 1 };
      for (const cur of symbols) {
        if (cur === "USD") continue;
        const rate = HARDCODED_FALLBACK_RATES[cur];
        if (typeof rate === "number") {
          out[cur] = rate;
        }
      }
      return out;
    }
  }
}

export const getUsdRatesCached = unstable_cache(
  async () => {
    const rates = await fetchUsdRates(CURRENCIES);
    return { USD: 1, ...rates } as Rates;
  },
  ["usd-rates-v2"], // bump key since logic changed
  { revalidate: 60 * 60 * 12 }
);

export async function getMarketingPrices(): Promise<Record<string, number[]>> {
  const rates = await getUsdRatesCached();
  const out: Record<string, number[]> = {};
  for (const cur of CURRENCIES) {
    const rate = rates[cur];
    if (typeof rate !== "number") continue;
    out[cur] = USD_AMOUNTS.map((usd) => Number((usd * rate).toFixed(2)));
  }
  return out;
}

// lib/currency.ts (add at bottom)
export function formatMoney(amount: number, currency: string, locale?: string) {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}
