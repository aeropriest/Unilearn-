// app/(marketing)/page.tsx
import { getMarketingPrices, USD_AMOUNTS, formatMoney } from "@/lib/currency";

export const revalidate = 43200; // optional: cache the rendered page too

export default async function MarketingPage() {
  const prices = await getMarketingPrices(); // { PKR: [..], EUR: [..], ... }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Plans (multi-currency)</h1>

      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2">Currency</th>
              {USD_AMOUNTS.map((u) => (
                <th key={u} className="text-right p-2">{`USD ${u}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(prices).map(([cur, arr]) => (
              <tr key={cur} className="border-t border-gray-800/20">
                <td className="p-2 font-medium">{cur}</td>
                {arr.map((amt, i) => (
                  <td key={i} className="p-2 text-right">{formatMoney(amt, cur)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
