"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CurrencyCode =
  | "USD" | "CNY" | "HKD" | "TWD" | "PKR" | "INR" | "JPY" | "KRW"
  | "SGD" | "PHP" | "THB" | "VND" | "MYR" | "EUR" | "GBP" | "NZD" | "AUD";

const currencies_Tags: Record<CurrencyCode, string> = {
  USD: "$",
  CNY: "¥",
  HKD: "HK$",
  TWD: "NT$",
  PKR: "₨",
  INR: "₹",
  JPY: "¥",
  KRW: "₩",
  SGD: "S$",
  PHP: "₱",
  THB: "฿",
  VND: "₫",
  MYR: "RM",
  EUR: "€",
  GBP: "£",
  NZD: "NZ$",
  AUD: "A$",
};

type CurrencyCtx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  symbol: string;
};

const CurrencyContext = createContext<CurrencyCtx | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  // hydrate from localStorage once on mount
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("currency")) as CurrencyCode | null;
    if (stored && currencies_Tags[stored]) setCurrency(stored);
  }, []);

  // persist when changed
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("currency", currency);
  }, [currency]);

  const value = useMemo(
    () => ({ currency, setCurrency, symbol: currencies_Tags[currency] }),
    [currency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
