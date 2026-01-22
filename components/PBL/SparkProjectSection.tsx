'use client';

import React from 'react';
import { useTranslation } from "react-i18next";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function SparkProjectSection(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-[720px] flex flex-col xl:flex-row flex-wrap max-w-screen-3xl mx-auto mb-[100px]">
      {/* LEFT SECTION (25%) */}
      <div className="w-full xl:w-1/4 h-auto xl:h-[720px] relative flex flex-col gap-4 px-[30px] xl:px-0">
        {/* Box 1 */}
        <div
          className="w-full xl:w-[265.714px] h-[220px] xl:absolute xl:top-0 xl:left-0 
        flex flex-col p-[30px] items-start gap-[10px] 
        rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)] 
        backdrop-blur-[2.5px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/young-woman-having-a-meeting.png')" }}
        >
          <div className="w-full xl:w-[205.7143px] h-[160px] flex items-center justify-center">
            <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left transition-transform duration-300 hover:scale-105 cursor-pointer">
              {/* Title */}
              <p
                className="text-[#004699] text-[16px] sm:text-[20px] font-normal font-questrial"
                style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}
              >
                {t('start_Spark.card1_Title')}
              </p>

              {/* Description */}
              <p className="w-full md:w-[705.714px] xl:w-[205.71px] text-[#282828] text-[16px] font-normal font-didact">
                {t('start_Spark.card1_Dis')}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-1">
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(161,131,226,1)] flex items-center justify-center">
                  <p className="text-[#A183E2] text-[12px] font-bold font-comfortaa">{t('start_Spark.card1_Button1')}</p>
                </div>
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(255,165,129,1)] flex items-center justify-center">
                  <p className="text-[#FFA581] text-[12px] font-bold font-comfortaa">{t('start_Spark.card1_Button2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="w-full xl:w-[265.714px] h-[220px] xl:absolute xl:top-1/2 xl:right-0 xl:-translate-y-1/2 
        rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)] 
        backdrop-blur-[2.5px] bg-cover bg-center flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundImage: "url('/images/young-woman-having-a-meeting2.png')" }}
        >
          <div className="w-full xl:w-[205.7143px] h-[160px] flex items-center justify-center">
            <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left">
              <p
                className="w-full sm:w-[203px] text-[#004699] text-[16px] sm:text-[24px] font-normal font-questrial"
                style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}
              >
                {t('start_Spark.card2_Title')}
              </p>

              <p className="w-full sm:w-[13rem] md:w-[705.714px] xl:w-[205.71px] text-[#282828] text-base font-normal font-didact text-[18px]">
                {t('start_Spark.card2_Dis')}
              </p>

              <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-1">
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(255,134,89,1)] flex items-center justify-center">
                  <p className="text-[rgba(255,134,89,1)] text-xs font-bold font-comfortaa">{t('start_Spark.card2_Button1')}</p>
                </div>
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(36,186,118,1)] flex items-center justify-center">
                  <p className="text-[rgba(36,186,118,1)] text-xs font-bold font-comfortaa">{t('start_Spark.card2_Button2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div
          className="w-full xl:w-[265.714px] h-[220px] xl:absolute xl:bottom-0 xl:left-0 
        rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)] 
        backdrop-blur-[2.5px] bg-cover bg-center flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
          style={{ backgroundImage: "url('/images/young-woman-having-a-meeting3.png')" }}
        >
          <div className="w-full xl:w-[205.7143px] h-[160px] flex items-center justify-center">
            <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left">
              <p
                className="text-[#004699] text-[16px] sm:text-[24px] font-normal font-questrial"
                style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}
              >
                {t('start_Spark.card3_Title')}
              </p>

              <p className="w-full sm:w-[13rem] md:w-[705.714px] xl:w-[205.71px] text-[#282828] text-base font-normal font-didact">
                {t('start_Spark.card3_Dis')}
              </p>

              <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-1">
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(154,239,171,1)] flex items-center justify-center">
                  <p className="text-[rgba(154,239,171,1)] text-xs font-bold font-comfortaa">{t('start_Spark.card3_Button1')}</p>
                </div>
                <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(128,217,255,1)] flex items-center justify-center">
                  <p className="text-[rgba(128,217,255,1)] text-xs font-bold font-comfortaa">{t('start_Spark.card3_Button2')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (50% + 25%) */}
      <div className="w-full xl:w-3/4 flex flex-col xl:flex-row px-[30px] xl:px-0">
        {/* Center 50% */}
        <div className="w-full xl:w-2/3 min-h-[240px] xl:h-[720px] relative flex flex-col items-center justify-center gap-4 px-4 py-6 xl:px-0 xl:py-0">
          {/* Card 1 - Top Right at xl */}
          <div
            className="w-full max-w-[541px] h-auto xl:h-[220px] 
    flex flex-col p-[20px] sm:p-[30px] items-start gap-[10px]
    rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)]
    backdrop-blur-[2.5px] bg-cover bg-center
    xl:absolute xl:top-0 xl:right-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundImage: "url('/images/young-woman-having-a-meeting4.png')" }}
          >
            <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left">
              <p className="text-[#004699] text-[16px] sm:text-[32px] font-normal font-questrial" style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}>
                {t('start_Spark.card4_Title')}
              </p>
              <p className="w-full text-[#282828] text-[16px] sm:text-[20px] font-normal font-didact">
                {t('start_Spark.card4_Dis')}
              </p>
              <div className="w-full flex justify-center xl:justify-end">
                <div className="flex flex-wrap gap-2 mt-1">
                  <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(61,176,203,1)]">
                    <p className="text-[rgba(61,176,203,1)] text-[12px] font-bold font-comfortaa">{t('start_Spark.card4_Button1')}</p>
                  </div>
                  <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(254,42,168,1)]">
                    <p className="text-[rgba(254,42,168,1)] text-[12px] font-bold font-comfortaa">{t('start_Spark.card4_Button2')}</p>
                  </div>
                  <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(140,30,192,1)]">
                    <p className="text-[rgba(140,30,192,1)] text-[12px] font-bold font-comfortaa">{t('start_Spark.card4_Button3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pink ball — only at xl */}
          <div
            className="hidden xl:flex w-full max-w-[369px] xl:h-[645.75px]
  flex-col p-[30px] items-start gap-[10px] bg-cover bg-center
  xl:absolute xl:top-1/4 xl:left-1/5 xl:-translate-x-1/2 xl:-translate-y-1/2
  animate-bounce"
            style={{ backgroundImage: "url('/images/PinkBall.png')" }}
          />
          {/* Bottom text block */}
          <div
            className="w-full max-w-[570px] h-auto xl:h-[220px]
            flex flex-col pt-0 pb-[20px] pl-0 sm:pt-0 sm:pb-[30px] sm:pl-0
            items-start gap-[10px]
            xl:absolute xl:bottom-0 xl:left-0"
          >
            <div className="w-full flex flex-col items-center text-center gap-0 xl:items-start xl:text-left mt-[62px]">
              <p className="text-[#F25D90] font-comfortaa text-[16px] font-bold">
                {t('start_Spark.start_Spark')}
              </p>

              <p
                className="text-[16px] sm:text-[22px] xl:text-[28px] 
             text-[#004699] max-w-full font-normal font-rocksalt mb-6 mt-6 xl:mt-0 xl:mb-0"
                style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
              >
                {t('start_Spark.start_Spark_Title')}
              </p>

              <p className="text-[16px] sm:text-[18px] xl:text-[16px] text-[#282828] text-center font-didact font-normal leading-normal">
                {t('start_Spark.start_Spark_Dis')}
              </p>

              <button
                onClick={() => window.open(`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`, "_blank")}
                className="flex mt-[15px] justify-center items-center px-[38px] py-[12px] self-stretch rounded-full bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB] sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF] shadow-md sm:hover:shadow-lg transition-transform duration-300 sm:hover:scale-105 cursor-pointer"
              >
                <p className="text-white text-[18px] font-bold font-comfortaa">
                  {t("start_Spark.start_Spark_Button")}
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Right 25% */}
        <div className="w-full xl:w-1/3 h-auto xl:h-[720px] relative flex flex-col gap-4 xl:block px-[30px] xl:px-0">
          {/* Card 1: top-right */}
          <div
            className="w-full xl:w-[265.714px] h-[220px] xl:absolute xl:top-0 xl:right-0 
        flex flex-col p-[30px] items-start gap-[10px]
        rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)]
        backdrop-blur-[2.5px] bg-cover bg-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundImage: "url('/images/young-woman-having-a-meeting5.png')" }}
          >
            <div className="w-full xl:w-[205.7143px] h-[160px] flex items-center justify-center">
              <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left">
                <p
                  className="text-[#004699] text-[16px] sm:text-[20px] font-normal font-questrial"
                  style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}
                >
                  {t('start_Spark.card5_Title')}
                </p>
                <p className="w-full md:w-[705.714px] xl:w-[205.71px] text-[#282828] text-[16px] font-normal font-didact">
                  {t('start_Spark.card5_Dis')}
                </p>
                <div className="flex flex-wrap justify-center xl:justify-start gap-2 mt-1">
                  <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(249,213,61,1)] flex items-center justify-center">
                    <p className="text-[rgba(249,213,61,1)] text-[12px] font-bold font-comfortaa">{t('start_Spark.card5_Button1')}</p>
                  </div>
                  <div className="p-2 bg-white rounded-full outline outline-2 outline-offset-[-2px] outline-[rgba(25,128,254,1)] flex items-center justify-center">
                    <p className="text-[rgba(25,128,254,1)] text-[12px] font-bold font-comfortaa">{t('start_Spark.card5_Button2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: bottom-left */}
          <div
            className="
    w-full h-auto sm:h-[240px] xl:w-[265.714px] xl:h-[220px] 
    flex flex-col p-4 sm:p-[30px] items-center sm:items-start gap-3 sm:gap-[10px]
    rounded-[12px] bg-white/60 shadow-[5px_5px_20px_rgba(199,199,199,0.60)]
    backdrop-blur-[2.5px] bg-cover bg-center 
    transition-transform duration-300 hover:scale-105 cursor-pointer
    xl:absolute xl:bottom-0 xl:left-0
  "
            style={{ backgroundImage: "url('/images/young-woman-having-a-meeting6.png')" }}
          >
            <div className="w-full xl:w-[205.7143px] h-auto sm:h-[160px] flex items-center justify-center sm:justify-start">
              <div className="w-full flex flex-col justify-between items-center text-center gap-2 xl:items-start xl:text-left">
                <p
                  className="text-[#004699] text-[18px] sm:text-[24px] font-normal font-questrial"
                  style={{ WebkitTextStrokeWidth: '0.3px', WebkitTextStrokeColor: '#004699' }}
                >
                  {t('start_Spark.card6_Title')}
                </p>
                <p className="w-full text-[#282828] text-[14px] sm:text-[16px] font-normal font-didact">
                  {t('start_Spark.card6_Dis')}
                </p>
                <div className="flex flex-wrap lg:flex-nowrap justify-center xl:justify-start gap-2 mt-2">
                  <div className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full outline outline-2 outline-[rgba(242,93,144,0.8)] flex items-center justify-center">
                    <p className="text-[10px] sm:text-[12px] lg:text-[11px] font-bold font-comfortaa text-[rgba(242,93,144,0.8)]">
                      {t('start_Spark.card6_Button1')}
                    </p>
                  </div>
                  <div className="px-2 py-1 sm:px-3 sm:py-1 bg-white rounded-full outline outline-2 outline-[rgba(128,185,255,0.8)] flex items-center justify-center">
                    <p className="text-[10px] sm:text-[12px] lg:text-[11px] font-bold font-comfortaa text-[rgba(128,185,255,0.8)]">
                      {t('start_Spark.card6_Button2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

// Reusable card component
function ProjectCard({ title, description, tags }: ProjectCardProps): JSX.Element {
  return (
    <div className="bg-white rounded-2xl shadow-lg px-4 py-4 w-[260px] md:w-[300px] text-left">
      <h3 className="text-lg font-bold text-brand-blue font-questrial mb-2">{title}</h3>
      <p className="text-sm text-gray-700 font-questrial mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-xs rounded-full border text-gray-700 bg-white border-gray-300 font-comfortaa">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
