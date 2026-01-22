"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WhyGoPaidSection from './pricing/WhyGoPaidSection';
import WhyGoPaidSection2 from './pricing/WhyGoPaidSection2';
import PricingFaq from './pricing/pricingFaq';
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
const USD_ANCHORS = [10, 20, 8, 16] as const;

type PricesTable = Record<string, number[]>; // { PKR: [conv10,conv20,conv8,conv16], ... }
export default function PricingPageComponent() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const learnerPlans = [
    {
      name: `${t('billing.learner_Plans_Name_Free')}`,
      price: 0,
      gradient: 'linear-gradient(161deg, rgba(128,185,255,0.08) 51.4%, rgba(128,185,255,0.30) 77.62%, rgba(61,176,203,0.30) 99.25%)',
      detail: `${t('billing.learner_Plans_detail_Free')}`,
      features: [`${t('billing.learner_Plans_features01_Free')}`, `${t('billing.learner_Plans_features02_Free')}`],
      button: `${t('billing.learner_Plans_button_Free')}`,
      highlight: false,
      color: '#004699',
      buttonBg: 'bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]',
      trial: "",
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=monthly&plan_type=free`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=annual&plan_type=free`,
      hover: "sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]", // hover gradient classes
    },
    {
      name: `${t('billing.learner_Plans_Name_Plus')}`,
      price: 10,
      gradient: 'linear-gradient(161deg, rgba(61,176,203,0.24) 51.4%, rgba(128,185,255,0.24) 77.62%, rgba(128, 185,255,0.08) 99.25%)',
      detail: `${t('billing.learner_Plans_detail_Plus')}`,
      features: [`${t('billing.learner_Plans_features01_Plus')}`, `${t('billing.learner_Plans_features03_Plus')}`, `${t('billing.learner_Plans_features04_Plus')}`],
      button: `${t('billing.learner_Plans_button_Plus')}`,
      highlight: true,
      color: '#3DB0CB',
      buttonBg: 'bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]',
      trial: `${t('billing.learner_Plans_trial_Plus')}`,
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=monthly&plan_type=plus`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=annual&plan_type=plus`,
      hover: "sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]", // hover gradient classes
    },
    {
      name: `${t('billing.learner_Plans_Name_Pro')}`,
      price: 20,
      gradient: 'linear-gradient(161deg, rgba(255,181,207,0.30) 40.35%, rgba(255,246,145,0.30) 86.79%, rgba(255,246,145, 0.06) 99.25%)',
      detail: `${t('billing.learner_Plans_detail_Pro')}`,
      features: [`${t('billing.learner_Plans_features01_Pro')}`, `${t('billing.learner_Plans_features03_Pro')}`, `${t('billing.learner_Plans_features04_Pro')}`, `${t('billing.learner_Plans_features06_Pro')}`, `${t('billing.learner_Plans_features07_Pro')}`],
      button: `${t('billing.learner_Plans_button_Pro')}`,
      highlight: false,
      color: '#F25D90',
      buttonBg: 'linear-gradient(183deg, rgba(255,181,207,0.60) 2.53%, rgba(242,93,144,0.60) 97.47%)',
      trial: `${t('billing.learner_Plans_trial_Pro')}`,
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=monthly&plan_type=pro`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=learner&billing_period=annual&plan_type=pro`,
      hover: "sm:hover:from-[rgba(242, 93, 144, 0.60)] sm:hover:to-[rgba(255, 181, 207, 0.60)]", // hover gradient classes
    },
  ];
  const mentorPlans = [
    {
      name: `${t('billing.mentor_Plans_Name_Free')}`,
      price: 0,
      gradient: 'linear-gradient(161deg, rgba(128,185,255,0.08) 51.4%, rgba(128,185,255,0.30) 77.62%, rgba(61,176,203,0.30) 99.25%)',
      detail: `${t('billing.mentor_Plans_detail_Free')}`,
      features: [`${t('billing.mentor_Plans_features01_Free')}`, `${t('billing.mentor_Plans_features02_Free')}`],
      button: `${t('billing.mentor_Plans_button_Free')}`,
      highlight: false,
      color: '#004699',
      buttonBg: 'bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]',
      trial: "",
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=monthly&plan_type=free`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=annual&plan_type=free`,
      hover: "sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]", // hover gradient classes
    },
    {
      name: `${t('billing.mentor_Plans_Name_Plus')}`,
      price: 10,
      gradient: 'linear-gradient(161deg, rgba(61,176,203,0.24) 51.4%, rgba(128,185,255,0.24) 77.62%, rgba(128, 185,255,0.08) 99.25%)',
      detail: `${t('billing.mentor_Plans_detail_Plus')}`,
      features: [`${t('billing.mentor_Plans_features01_Plus')}`, `${t('billing.mentor_Plans_features03_Plus')}`, `${t('billing.mentor_Plans_features04_Plus')}`],
      button: `${t('billing.mentor_Plans_button_Plus')}`,
      highlight: true,
      color: '#3DB0CB',
      buttonBg: 'bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]',
      trial: `${t('billing.mentor_Plans_trial_Plus')}`,
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=monthly&plan_type=plus`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=annual&plan_type=plus`,
      hover: "sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]", // hover gradient classes
    },
    {
      name: `${t('billing.mentor_Plans_Name_Pro')}`,
      price: 20,
      gradient: 'linear-gradient(161deg, rgba(255,181,207,0.30) 40.35%, rgba(255,246,145,0.30) 86.79%, rgba(255,246,145, 0.06) 99.25%)',
      detail: `${t('billing.mentor_Plans_detail_Pro')}`,
      features: [`${t('billing.mentor_Plans_features01_Pro')}`, `${t('billing.mentor_Plans_features03_Pro')}`, `${t('billing.mentor_Plans_features04_Pro')}`, `${t('billing.mentor_Plans_features06_Pro')}`, `${t('billing.mentor_Plans_features07_Pro')}`],
      button: `${t('billing.mentor_Plans_button_Pro')}`,
      highlight: false,
      color: '#F25D90',
      buttonBg: 'linear-gradient(183deg, rgba(255,181,207,0.60) 2.53%, rgba(242,93,144,0.60) 97.47%)',
      trial: `${t('billing.mentor_Plans_trial_Pro')}`,
      link_Monthly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=monthly&plan_type=pro`,
      link_Yearly: `${process.env.NEXT_APP_FRONTEND_BASE_URL}/select-plan?role=instructor&billing_period=annual&plan_type=pro`,
      hover: "sm:hover:from-[rgba(242, 93, 144, 0.60)] sm:hover:to-[rgba(255, 181, 207, 0.60)]", // hover gradient classes
    },
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
    "AUD"];

  const currencies_Tags: Record<string, string> = {
    USD: "$",      // US Dollar
    CNY: "¥",      // Chinese Yuan
    HKD: "HK$",    // Hong Kong Dollar
    TWD: "NT$",    // New Taiwan Dollar
    PKR: "₨",      // Pakistani Rupee
    INR: "₹",      // Indian Rupee
    JPY: "¥",      // Japanese Yen
    KRW: "₩",      // South Korean Won
    SGD: "S$",     // Singapore Dollar
    PHP: "₱",      // Philippine Peso
    THB: "฿",      // Thai Baht
    VND: "₫",      // Vietnamese Dong
    MYR: "RM",     // Malaysian Ringgit
    EUR: "€",      // Euro
    GBP: "£",      // British Pound
    NZD: "NZ$",    // New Zealand Dollar
    AUD: "A$",     // Australian Dollar,
  };

  const [isLearner, setIsLearner] = useState<boolean>(true);
  const [billingCycle, setBillingCycle] = useState<'month' | 'annual'>('month');
  const [selected, setSelected] = useState('USD');
  const [open, setOpen] = useState(false);

  // const handleSelect = (value: string) => {
  //   setSelected(value);
  //   setOpen(false);
  // };
  useEffect(() => {
    const storedCurrency = localStorage.getItem('currency');
    if (storedCurrency && currencies.includes(storedCurrency)) {
      setSelected(storedCurrency);
    } else {
      localStorage.setItem('currency', 'USD'); // Set default if not present
    }
  }, []);

  const handleSelect = (value: string) => {
    // setSelected(value);
    localStorage.setItem('currency', value); // Save to localStorage
    setOpen(false);
    if (pathname === "/pricing") {
      window.location.reload();
    }
  };

  useEffect(() => {
    const mentorParam = searchParams.get("mentor");
    setIsLearner(mentorParam !== "true"); // false if mentor=true
  }, [searchParams]);

  const activePlans = isLearner ? learnerPlans : mentorPlans;

  // const getPrice = (price: number) => {
  //   if (billingCycle === 'annual') {
  //     const discountedPrice = price * 0.8; // apply 20% discount
  //     return `$${discountedPrice}`;
  //   }
  //   return `$${price}`;
  // };

  const [fx, setFx] = useState<PricesTable | null>(null);
  const [loadingFx, setLoadingFx] = useState<boolean>(true);
  const [fxErr, setFxErr] = useState<string | null>(null);

  // fetch cached FX data from your API route
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoadingFx(true);

        const url =
          typeof window !== "undefined"
            ? `${window.location.origin}/api/marketing-prices`
            : "/api/marketing-prices";

        // console.log("[FX][client] GET", url);

        const res = await fetch(url, { method: "GET" }); // keep it simple
        // console.log("[FX][client] res:", res.status, res.statusText, "ok:", res.ok);

        const ctype = res.headers.get("content-type") || "";
        const body = ctype.includes("application/json") ? await res.json() : await res.text();

        // console.log("[FX][client] content-type:", ctype);
        // console.log("[FX][client] body:", body);

        if (!res.ok) {
          // Server returned 4xx/5xx. Surface the message.
          const msg =
            typeof body === "string"
              ? body
              : body?.error || body?.message || `HTTP ${res.status}`;
          throw new Error(msg);
        }

        const data = (body as any).data;
        if (!data || typeof data !== "object") {
          throw new Error("Malformed response: missing { data }");
        }

        if (!cancelled) {
          setFx(data);
          // console.table?.(data); // nice overview in console
        }
      } catch (err: any) {
        console.error("[FX][client] fetch failed:", err);
        if (!cancelled) setFxErr(err?.message || String(err));
      } finally {
        if (!cancelled) {
          setLoadingFx(false);
          // console.log("[FX][client] loadingFx → false");
        }
      }
    })();

    return () => {
      cancelled = true;
      // console.log("[FX][client] cleanup (cancelled = true)");
    };
  }, []);

  // Derive a per-USD multiplier from the cached table.
  // We use the 10-USD anchor (index 0) to compute a rate; works for arbitrary USD amounts.
  const getPrice = (usdAmount: number) => {
    const target = selected;
    const symbol = currencies_Tags[target] ?? "$";

    // fallback if rates not loaded
    if (!fx || !fx[target]) {
      const fallback = billingCycle === "annual" ? usdAmount * 0.8 : usdAmount;
      // Format with Intl using target currency if possible
      try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency: target }).format(fallback);
      } catch {
        return `${symbol}${fallback.toFixed(2)}`;
      }
    }

    // derive per-USD rate from the first anchor (10 USD -> fx[target][0])
    const ratePerUsd = fx[target][0] / USD_ANCHORS[0]; // e.g., PKR_per_USD
    let converted = usdAmount * ratePerUsd;

    if (billingCycle === "annual") converted *= 0.8; // 20% off annual

    return new Intl.NumberFormat(undefined, { style: "currency", currency: target }).format(converted);
  };


  return (
    <section className="w-full px-4 py-16 flex flex-col items-center bg-white mt-[0px] lg:mt-[200px]">
      <p
        className="text-[16px] sm:text-[20px] lg:text-[24px] 
             leading-[18px] sm:leading-[22px] lg:leading-[24px] 
             self-stretch text-center font-normal font-rocksalt text-[#F25D90] mb-[8px]"
        style={{
          textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)',
          WebkitBackgroundClip: 'text',
        }}
      >
        {t('billing.choose_WHAT_FITS_YOU')}
      </p>

      <h2
        className="text-[20px] sm:text-[40px] lg:text-[64px] 
             leading-[28px] sm:leading-[48px] lg:leading-[64px] 
             text-center font-normal font-questrial 
             bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] 
             bg-clip-text text-transparent mb-6 mt-3"
        style={{
          WebkitTextStrokeWidth: '1.5px',
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)',
        }}
      >
        {t('billing.price_Made_Easy')}
      </h2>


      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-y-4 lg:gap-[577px] mb-8">

        <div
          className={`flex items-center border border-[#80B9FF] rounded-full
      w-[110px] md:w-[140px] 
      px-1 py-0.5 md:px-1 md:py-1 
      cursor-pointer transition-all duration-300
      ${isLearner ? 'flex-row' : 'flex-row-reverse'}`}
          onClick={() => setIsLearner(!isLearner)}
        >
          <span
            className={`flex-1 text-center truncate
        text-[#3DB0CB] font-comfortaa 
        text-[13px] md:text-[16px] 
        font-bold leading-[14px] md:leading-[16px]`}
          >
            {isLearner ? t('billing.learner') : t('billing.mentor')}
          </span>

          <div
            className="w-[28px] h-[28px] md:w-[40px] md:h-[40px] 
       flex-shrink-0 flex justify-center items-center rounded-full 
       transition-all duration-300"
            style={{
              background:
                'linear-gradient(97deg, rgba(128,185,255,0.80) 4.6%, rgba(61,176,203,0.80) 95.4%)',
            }}
          />
        </div>



        <div className="flex justify-center items-center gap-2 border border-[#80B9FF] w-[250px] sm:w-[300px] lg:w-[450px] h-[36px] sm:h-[45px] lg:h-[50px] rounded-full p-1">
          {/* Annual Button */}
          <button
            onClick={() => setBillingCycle('annual')}
            className="w-1/2 h-[32px] sm:h-[40px] lg:h-[40px] flex justify-center items-center rounded-full text-[12px] sm:text-[15px] lg:text-[16px] leading-[14px] font-bold font-comfortaa border-none outline-none"
            style={{
              background:
                billingCycle === 'annual'
                  ? 'linear-gradient(97deg, rgba(128,185,255,0.80) 4.6%, rgba(61,176,203,0.80) 95.4%)'
                  : '#ffffff',
              color: billingCycle === 'annual' ? '#ffffff' : '#3DB0CB',
            }}
          >
            {t('billing.pay_Annually')}
          </button>

          {/* Monthly Button */}
          <button
            onClick={() => setBillingCycle('month')}
            className="w-1/2 h-[32px] sm:h-[40px] lg:h-[40px] flex justify-center items-center rounded-full text-[12px] sm:text-[15px] lg:text-[16px] leading-[14px] font-bold font-comfortaa border-none outline-none"
            style={{
              background:
                billingCycle === 'month'
                  ? 'linear-gradient(97deg, rgba(128,185,255,0.80) 4.6%, rgba(61,176,203,0.80) 95.4%)'
                  : '#ffffff',
              color: billingCycle === 'month' ? '#ffffff' : '#3DB0CB',
            }}
          >
            {t('billing.pay_Month')}
          </button>
        </div>


      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1170px] items-center justify-center lg:justify-end mb-6 sm:mb-[50px] px-4 lg:px-0">
        <span className="text-center lg:text-right text-[#3DB0CB] font-didact text-[14px] sm:text-[16px] leading-[14px] sm:leading-[16px]">
          {t('billing.save')}
        </span>

        <p className="text-center lg:text-right text-[#282828] font-didact text-[14px] sm:text-[16px] leading-[14px] sm:leading-[16px] mt-2 lg:mt-0 lg:ml-[20px]">
          {t('billing.price_In')}
        </p>

        <div className="relative inline-block mt-2 lg:mt-0 lg:ml-[20px]">
          {/* Hidden actual select for form */}
          <select
            value={selected}
            className="hidden"
            onChange={(e) => setSelected(e.target.value)}
            name="currency"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Trigger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between 
                 w-[90px] sm:w-[110px] lg:w-[120px]
                 px-3 sm:px-5 lg:px-6 
                 py-1.5 sm:py-2 
                 rounded-[12px] bg-white/80 
                 text-[#3DB0CB] 
                 text-[16px] sm:text-[18px] lg:text-[20px] 
                 leading-[18px] sm:leading-[20px] 
                 font-comfortaa font-bold cursor-pointer"
          >
            {selected}
            <svg
              className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99995 14.1302C8.67735 14.1302 8.3548 14.0071 8.10885 13.7612L0.369254 6.02156C-0.123085 5.52922 -0.123085 4.73098 0.369254 4.23884C0.861394 3.7467 1.65948 3.7467 2.15186 4.23884L8.99995 11.0873L15.8481 4.23908C16.3404 3.74694 17.1384 3.74694 17.6305 4.23908C18.1231 4.73122 18.1231 5.52946 17.6305 6.0218L9.89105 13.7615C9.64498 14.0073 9.32243 14.1302 8.99995 14.1302Z"
                fill="#282828"
              />
            </svg>
          </button>

          {/* Custom Styled Options */}
          {open && (
            <div className="absolute right-0 top-full mt-2 z-10 flex flex-col gap-[5px] p-[5px] rounded-[12px]
                      bg-gradient-to-br from-[#3DB0CB00] via-[#3DB0CB5C] to-[#3DB0CB5C]
                      shadow-md
                      w-[90px] sm:w-[110px] lg:w-[120px]">
              {currencies.map((currency) => (
                <div
                  key={currency}
                  onClick={() => handleSelect(currency)}
                  className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-[12px] bg-white/80 
                       text-[#3DB0CB] 
                       text-[16px] sm:text-[18px] lg:text-[20px] 
                       font-comfortaa font-bold text-center cursor-pointer hover:bg-white"
                >
                  {currency}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] justify-items-center lg:justify-items-stretch">
        {activePlans.map((plan, index) => (
          <div
            key={index}
            style={{ background: plan.gradient }}
            className="rounded-xl 
                 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] 
                 h-[450px] sm:h-[560px] lg:h-[592px] 
                 pt-[30px] sm:pt-[40px] lg:pt-[50px] 
                 px-[20px] sm:px-[28px] lg:px-[35px] 
                 text-start flex flex-col items-center
                 mx-auto lg:mx-0"
          >
            <div className="flex items-center justify-between self-stretch">
              <h3
                className="font-comfortaa whitespace-nowrap
               text-[18px] sm:text-[20px] lg:text-[24px] 
               font-bold leading-[20px] lg:leading-[24px]"
                style={{ color: plan.color }}
              >
                {plan.name}
              </h3>

              {plan.highlight && (
                <span
                  className="flex justify-center items-center whitespace-nowrap
                 px-[6px] sm:px-[8px] lg:px-[10px] 
                 py-[2px] sm:py-[3px] lg:py-[4px] 
                 w-[70px] sm:w-[90px] lg:w-[104px] 
                 rounded-full bg-white text-[#F25D90] 
                 text-[9px] sm:text-[11px] lg:text-[12px] 
                 leading-[9px] sm:leading-[11px] lg:leading-[12px] 
                 font-bold font-comfortaa"
                >
                  {t('billing.most_Popular')}
                </span>
              )}
            </div>

            <div className="flex flex-row items-start justify-start gap-2 self-start mt-[20px] sm:mt-[25px] lg:mt-[30px]">
              <p
                className="font-questrial text-transparent font-normal
                     text-[40px] sm:text-[48px] lg:text-[46px]
                     leading-[40px] sm:leading-[44px] lg:leading-[30px]
                     max-[1100px]:text-[22px] max-[1100px]:leading-[26px]"
                style={{
                  color: plan.color,
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: plan.color,
                }}
              >
                {getPrice(plan.price)}
              </p>
            </div>

            <div className="self-stretch flex items-center gap-2 justify-start">
              <p
                className="text-[#282828] font-comfortaa 
               text-[14px] sm:text-[16px] lg:text-[18px] 
               font-bold leading-[14px] sm:leading-[16px] lg:leading-[18px] 
               mt-2 sm:mt-2.5 lg:mt-3"
              >
                {t('billing.per_Learner')} / {billingCycle}
              </p>

              <div className="relative inline-block group mt-2 sm:mt-2.5 lg:mt-3">
                {/* Icon button */}
                <button
                  type="button"
                  className="w-5 h-5 cursor-pointer outline-none"
                  aria-label="Price info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: plan.color }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </button>

                {/* Tooltip BELOW icon */}
                <span
                  style={{ background: plan.color }}
                  className="
    absolute top-full mt-2 left-1/2 -translate-x-1/2 
    w-40 h-auto px-3 py-2 text-white
    border-[4px] border-none    /* thinner border for better look */
    rounded-2xl                  /* large border radius */
    text-xs shadow-2xl z-50 font-bold
    opacity-0 pointer-events-none
    transition-opacity duration-200
    text-center leading-snug
    -translate-y-2
    group-hover:opacity-100 group-focus-within:opacity-100
  "
                >
                  This is an approximate calculation. Data updates every 24 hours.
                </span>

              </div>
            </div>

            <p className="self-stretch text-[#282828] font-didact 
                   text-[14px] sm:text-[16px] lg:text-[18px] 
                   font-normal leading-normal mt-[8px] sm:mt-[10px]">
              {plan.detail}
            </p>

            <Button
              style={{ background: plan.buttonBg }}
              onClick={() =>
                window.open(
                  billingCycle === 'annual' ? plan.link_Yearly : plan.link_Monthly,
                  '_blank'
                )
              }
              className={`
                          mt-5 sm:mt-6 md:mt-7 lg:mt-8
                          flex justify-center items-center 
                          rounded-full
                          w-full 
                          max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px]
                          h-11 sm:h-[46px] md:h-[50px] lg:h-[50px] xl:h-[52px]
                          text-white text-center font-comfortaa font-bold
                          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]
                          leading-none px-4 truncate
                          mx-auto transition-all duration-300 hover:scale-105
                          ${plan.buttonBg}
                          ${plan.hover}
                        `}
            >
              {plan.button}
            </Button>



            <p className="text-[#282828] text-center font-didact 
                    text-[14px] sm:text-[15px] lg:text-[16px] 
                    font-normal leading-none mt-1">
              {plan.trial}
            </p>

            <ul className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[12px] 
                     text-[#282828] font-didact 
                     text-[14px] sm:text-[16px] lg:text-[18px] 
                     font-normal leading-[16px] sm:leading-[17px] lg:leading-[18px] 
                     w-full mt-[20px] sm:mt-[25px] lg:mt-[30px]">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-[8px] sm:gap-[9px] lg:gap-[10px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9195 2.6214L7.86305 11.6778C7.61895 11.9219 7.22316 11.9219 6.97906 11.6778L3.08051 7.77929L0 10.8598L5.88074 16.7406C6.28926 17.1491 6.84332 17.3786 7.42102 17.3786C7.99867 17.3786 8.55277 17.1491 8.96125 16.7406L20 5.70187L16.9195 2.6214Z"
                      fill={plan.color}
                    />
                    <g opacity="0.1">
                      <path
                        d="M18.9811 4.68311L7.32752 16.3367C7.0051 16.6591 6.59967 16.879 6.16162 16.977C6.52736 17.2362 6.96662 17.3785 7.4208 17.3785C7.99846 17.3785 8.55256 17.149 8.96104 16.7405L19.9998 5.70178L18.9811 4.68311Z"
                        fill="#3DB0CB"
                      />
                    </g>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {isLearner ? <WhyGoPaidSection /> : <WhyGoPaidSection2 />}

      <PricingFaq />

    </section>
  );
}