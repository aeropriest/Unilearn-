'use client'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from "react-i18next";
import clsx from 'clsx';
export default function HeroProjectSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const isJapanies = i18n.language === 'ja';

  const buttonClass = clsx(
    'z-20 inline-block cursor-pointer',
    'lg:h-[64px] px-6 sm:px-12 py-3 sm:py-4',
    'text-base sm:text-2xl text-white font-bold font-comfortaa',
    'rounded-full shadow-md',
    'transition-transform duration-300 ease-in-out',
    'hover:scale-105 hover:shadow-lg',
    'w-[300px]',
    isEnglish ? 'lg:w-[324px]' : 'lg:w-[410px]'
  );
  return (
    <section className="relative w-full bg-white overflow-hidden pt-16 sm:pt-24">
      {/* TEXT CONTAINER */}
      <div className="max-w-7xl mx-auto flex flex-col items-center sm:items-start gap-4 sm:gap-6 px-4 sm:px-8 relative">
        <p
          className="self-stretch text-center sm:text-left lg:text-[40px] md:text-[20px] sm:text-[20px] font-rocksalt font-normal leading-normal bg-gradient-to-r from-[#F25D90] to-[#F25D90CC] text-transparent bg-clip-text"
          style={{
            textShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t('pbl.hero_Title')}
        </p>

        <span
          className={`block text-[rgba(0,70,153,1)] text-[12vw] sm:text-[9vw] md:text-[8vw] ${isJapanies ? 'lg:text-[120px]' : 'lg:text-[222px]' }
               leading-[10vw] sm:leading-[9vw] md:leading-[8vw] lg:leading-[222px]
               font-normal font-questrial text-center
               [text-shadow:_0px_20px_40px_rgb(0_0_0_/_0.05)]`}
        >
          {t('pbl.hero_SubTitle_One')}
          <br />
        </span>

        <span
          className={`block text-[rgba(0,70,153,1)] text-[7vw] sm:text-[6.5vw] md:text-[6vw]  ${isJapanies ? 'lg:text-[120px]' : 'lg:text-[144px]' }
               leading-[7vw] sm:leading-[6.5vw] md:leading-[6vw] lg:leading-[144px]
               font-normal font-questrial text-center
               [text-shadow:_0px_20px_40px_rgb(0_0_0_/_0.05)]`}
        >
          {t('pbl.hero_SubTitle_Two')}
        </span>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 sm:gap-6 mt-4 z-30">
          <button
            onClick={() =>
              window.open(
                `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`,
                "_blank"
              )
            }
            className={`
        ${buttonClass}
        bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
        sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
        shadow-md sm:hover:shadow-lg
        transition-transform duration-300
        sm:hover:scale-105
      `}
          >
            <span className="font-comfortaa font-bold leading-normal inline-block">
              {t("pbl.hero_Button")}
            </span>
          </button>

          <p className="w-full sm:w-96 text-[rgba(0,70,153,1)] text-center sm:text-left text-base sm:text-lg md:text-xl font-bold font-comfortaa">
            {t('pbl.hero_Dis_One')} <br className="hidden sm:block" />
            {t('pbl.hero_Dis_Two')}
          </p>
        </div>
      </div>


      {/* IMAGE: moved outside padded container */}
      <div className="relative w-screen sm:-mt-[10%] mt-8 z-20 p-1 hidden lg:block">
        <Image
          src="/images/projectheroimage.png"
          alt="Student working on project"
          width={1920}
          height={956}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-transparent via-white to-white pointer-events-none" />
      </div>
    </section>
  )
}
