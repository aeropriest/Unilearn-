'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden from-white-100 white-100 to-blue-50 py-16 px-4 max-h-[922px] lg:mt-[80px]">
      <div className="container mx-auto max-w-screen-xl flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(249, 213, 61, 0.00) 100%)" }} 
            src="/images/abc.png"
            alt="Hero Top Image"
            width={1000}
            height={614}
            className="md:absolute md:top-16 md:z-10 lg:mr-[80px]"
          />
          <div className="absolute bottom-0 left-0 z-20 pointer-events-none w-full lg:w-full h-[144px] flex-shrink-0 border-none"
            style={{
              background:
                'linear-gradient(178deg, rgba(252, 253, 255, 0.00) 5.13%, rgba(252, 253, 255, 0.40) 25.38%, rgba(252, 253, 255, 0.80) 45.63%, #FCFDFF 68.57%)',
            }}
          />
          
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 px-10">
          <h3
            className="text-[32px] sm:text-[36px] lg:text-[40px] font-rocksalt tracking-wide text-transparent bg-gradient-to-r from-[#F25D90] to-[rgba(242,93,144,0.8)] bg-clip-text"
          >
            {t('join_us.join_us')}
          </h3>
          <h1
            className="text-brand-blue font-questrial font-normal text-[48px] sm:text-[80px] md:text-[130px] lg:text-[210px] lg:leading-[180px] lg:leading-[150px] w-full max-w-[863px] text-center lg:text-left"
          >
            {t('join_us.facilitate')} <br />
            <span className="block text-[52px] sm:text-[90px] md:text-[140px] lg:text-[210px]">
              {t('join_us.learning')}
            </span>
          </h1>

          <div className="z-30 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-4 lg:px-[30%]">
            <p className="text-[#0F4C81] font-comfortaa font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-center sm:text-left flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="whitespace-nowrap font-bold">
                {t('join_us.join_us_Dis_One')}
              </span>

              <span className="flex items-center gap-2">
                <span className="w-10 h-px bg-[#0F4C81]"></span>
                <span className="whitespace-nowrap font-bold">
                  {t('join_us.join_us_Dis_Two')}
                </span>
              </span>
            </p>

            <Button
              className="
    w-[243px] h-[67px]
    px-6 py-4
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    text-white text-[18px] font-comfortaa font-normal
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
            >
              <p className="text-white font-comfortaa text-[24px] font-bold leading-normal">
                {t("join_us.learn_More")}
              </p>
            </Button>
          </div>
        </div>

 
      </div>
    </section>
  );
}
