'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import i18n from '@/lib/i18n';
import { usePathname } from "next/navigation";
export default function DropdownLanguageCurrency({
  setSelected,
  setSelectedCurrency,
  selected,
  selectedCurrency,
  setOpen,
}: {
  setSelected: (lang: string) => void;
  setSelectedCurrency: (cur: string) => void;
  selected: string;
  selectedCurrency: string;
  setOpen: (v: boolean) => void;
}) {
  const { t } = useTranslation();
  const pathname = usePathname();
  const languages = [
    { label: 'English', code: 'en' },
    { label: '日本語', code: 'ja' },
    { label: '简体中文', code: 'zhCN' },
    { label: '繁体中文', code: 'tccn' },
  ];

  const currencies = ["USD",
                      "CNY",
                      "HKD",
                      "TWD",
                      "PKR",
                      "INR",
                      "JPY",
                      "KRW",
                      "SGD",
                      "PHP",
                      "THB",
                      "VND",
                      "MYR",
                      "EUR",
                      "GBP",
                      "NZD",
                      "AUD"
                    ];

  const [langOpen, setLangOpen] = useState(false);
  const [curOpen, setCurOpen] = useState(false);

  // ✅ Restore currency from localStorage or default to 'USD'
  useEffect(() => {
    const storedCurrency = localStorage.getItem('currency');
    const defaultCurrency = storedCurrency || 'USD';
    setSelectedCurrency(defaultCurrency);
    if (!storedCurrency) {
      localStorage.setItem('currency', 'USD');
    }
  }, [setSelectedCurrency]);

  const handleLanguageSelect = async (lang: string) => {
    await i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setSelected(lang);
    setLangOpen(false);
  };

  const handleCurrencySelect = (cur: string) => {
    localStorage.setItem('currency', cur);
    setSelectedCurrency(cur);
    setCurOpen(false);
    if (pathname === "/pricing") {
      window.location.reload();
    }
  };

  return (
    <div onMouseLeave={() => setOpen(!open)} className="absolute top-full left-0 right-0 z-[999] py-8 animate-slide-down w-full">
      <div className="container mx-auto px-4 flex justify-center">
        <div
          style={{
            borderRadius: '12px',
            border: '1px solid transparent',
            padding: '2px',
            background:
              'linear-gradient(215deg, rgba(61,176,203,0.6) 0.9%, rgba(128,185,255,0.6) 100%)',
          }}
          className="w-[350px]"
        >
          <Card
            style={{ background: 'rgb(234, 245, 250)', borderRadius: '12px' }}
            className="w-full"
          >
            <CardContent className="p-6 space-y-6 min-w-[180px]">
              {/* Language Dropdown */}
              <div className="relative">
                <label className="text-sm text-[#004699] font-comfortaa mb-2 block">
                  {t('Language')}
                </label>
                <button
                  onClick={() => {
                    setLangOpen(!langOpen);
                    setCurOpen(false);
                  }}
                  className="w-full flex items-center justify-between bg-white border rounded-[12px] px-4 py-2 text-sm font-comfortaa text-gray-800"
                >
                  {languages.find((l) => l.code === selected)?.label || t('Select')}
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <ul className="absolute w-full mt-1 bg-white border rounded-[12px] z-50 shadow">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm font-comfortaa ${selected === lang.code ? 'text-[#3DB0CB] font-bold' : 'text-gray-800'
                          }`}
                      >
                        {lang.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Currency Dropdown */}
              <div className="relative">
                <label className="text-sm text-[#004699] font-comfortaa mb-2 block">
                  {t('Currency')}
                </label>
                <button
                  onClick={() => {
                    setCurOpen(!curOpen);
                    setLangOpen(false);
                  }}
                  className="w-full flex items-center justify-between bg-white border rounded-[12px] px-4 py-2 text-sm font-comfortaa text-gray-800"
                >
                  <span>{selectedCurrency || t('Select')}</span>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {curOpen && (
                  <ul className="absolute w-full mt-1 bg-white border rounded-[12px] z-50 shadow">
                    {currencies.map((cur) => (
                      <li
                        key={cur}
                        onClick={() => handleCurrencySelect(cur)}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm font-comfortaa ${selectedCurrency === cur ? 'text-[#3DB0CB] font-bold' : 'text-gray-800'
                          }`}
                      >
                        {cur}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
