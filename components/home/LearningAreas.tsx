'use client';

import { Button } from "@/components/ui/button"


import GraphicDesign from "@/components/icons/GraphicDesign";
import Rocket from "@/components/icons/Rocket";

import Internet from "@/components/icons/Internet";

import Communication from "@/components/icons/Communication";

import MentalHealth from "@/components/icons/MentalHealth";

import Productivity from "@/components/icons/Productivity";
import { useTranslation } from "react-i18next";

export default function LearningAreas() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const learningAreas = [
    {
      title: `${t('learningAreas.communication') }`,
      description: `${t('learningAreas.communicationDis')}`,
      rotate: "rotate(-20deg)",
      illustration: <Communication className="w-24 h-24" />, // Placeholder for the pink character
    },
    {
      title: `${t('learningAreas.productivity')}`,
      description: `${t('learningAreas.productivityDis')}`,
      rotate: "rotate(-20deg)",
      illustration: <Productivity className="w- 24 h - 24" />, // Placeholder for the blue octopus
    },
    {
      title: `${t('learningAreas.pathway')}`,
      description: `${t('learningAreas.pathwayDis')}`,
      rotate: "rotate(-10deg)",
      illustration: <Rocket className="w-24 h-24" />, // Placeholder for the rocket/shield
    },
    {
      title: `${t('learningAreas.creativity')}`,
      description: `${t('learningAreas.creativityDis')}`,
      rotate: "rotate(-20deg)",
      illustration: <GraphicDesign className="w- 24 h - 24" />, // Placeholder for the computer/design
    },
    {
      title: `${t('learningAreas.technology')}`,
      description: `${t('learningAreas.technologyDis')}`,
      rotate: "rotate(-14deg)",
      illustration: <Internet className="w-24 h-24" />, // Placeholder for the globe with devices
    },
    {
      title: `${t('learningAreas.wellbeing')}`,
      description: `${t('learningAreas.wellbeingDis')}`,
      rotate: "rotate(-15deg)",
      illustration: <MentalHealth className="w- 24 h - 24" />, // Placeholder for the meditation character
    },
  ]
  return (
    <section className="relative overflow-hidden from-white lg:mt-[100px] pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
      <div className="container mx-auto  px-4 py-12 max-w-[1200px]">
        {/* Header */}
        <div className="justify-center items-center text-center mb-4">
          <p className="self-stretch text-center text-[16px] font-comfortaa font-bold text-[#F25D90] leading-normal mb-3">
            {t('learningAreas.learningAreas')}
          </p>
          <h1
            className="text-center text-[16px] sm:text-[22px] lg:text-[28px] font-rocksalt font-normal leading-normal text-[#004699] mb-3"
            style={{
              WebkitTextStrokeWidth: '0.5px',
              WebkitTextStrokeColor: '#004699',
            }}
          >
            {t('learningAreas.learningAreasTitle')}
          </h1>

          <p className="text-center text-[14px] sm:text-[16px] lg:text-[18px] lg:max-w-[613px] text-[#282828] font-didact font-normal leading-normal max-w-xl mx-auto">
            {t('learningAreas.learningAreasDis')}
          </p>

        </div>

        {/* Learning Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[24px] mb-12">
  {learningAreas.map((area, index) => (
    <div
      key={index}
      className="
        relative
        w-[300px] h-[240px]    /* smaller size on mobile */
        sm:w-[384px] sm:h-[306px] /* restore from sm+ */
        max-w-md mx-auto flex flex-col justify-end items-center
      "
    >
      <div className="absolute top-3 z-10 flex justify-center w-full rotate-[13deg]">
        <div
          style={{ transform: area.rotate }}
          className={`
    w-20 h-28              /* mobile <640px */
    sm:w-24 sm:h-32        /* small ≥640px */
    md:w-30 md:h-44        /* medium ≥768px */
    ${isEnglish ? 'lg:w-36 lg:h-52 xl:w-40 xl:h-36' : 'lg:w-26 lg:h-42 xl:w-38 xl:h-54'}
    flex justify-center items-center
    bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(128,185,255,0.3)_0%,rgba(128,185,255,0)_100%)]
    rounded-full`}
        >
          {area.illustration}
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(276deg, rgba(255, 255, 255, 0.30) 0.11%, rgba(249, 213, 61, 0.30) 99.89%)",
        }}
        className="
          w-[300px] sm:w-[384px] 
          mt-12 px-4 rounded-tl-[96px] rounded-tr-xl rounded-bl-xl rounded-br-xl
          flex flex-col items-center gap-2.5 h-auto
        "
      >
        <h2
          className={`self-stretch text-center mt-[16px] sm:mt-[20px] font-questrial text-[22px] sm:text-[28px] ${isEnglish ? 'lg:text-[28px]' : 'lg:text-[18px] mt-6'} font-normal leading-[22px] sm:leading-[24px] text-transparent bg-clip-text`}
          style={{
            WebkitTextStrokeWidth: "0.5px",
            WebkitTextStrokeColor: "#004699",
            color: "#004699",
          }}
        >
          {area.title}
        </h2>
        <p
          className={`
            self-stretch text-right md:text-center lg:text-right 
            text-[12px] sm:text-[16px] md:text-[16px] ${isEnglish ? 'lg:text-[20px]' : 'lg:text-[14px]'}
            leading-[20px] sm:leading-[24px]
            text-[#282828] font-didact font-normal
            mt-[8px] sm:mt-[10px]
            w-[240px] sm:w-[320px] md:w-[334px] h-auto mb-[16px] sm:mb-[20px]
          `}
        >
          {area.description}
        </p>
      </div>
    </div>
  ))}
</div>


        {/* Bottom Section */}
        <div className="text-center">
          <p
            className={`flex-1 self-stretch text-center text-[14px] text-[#282828] font-didact font-normal leading-normal lg:max-w-[778px] lg:max-h-[18px] mx-auto ${isEnglish ? 'mb-6' : 'mb-16'} `}
          >
            {t('learningAreas.subTitle')}
          </p>


          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`,
                  "_blank"
                )
              }
              className="
    flex justify-center items-center
    w-[300px] h-[48px]                /* Mobile size */
    sm:w-[380px] sm:h-[67px]          /* Tablet & up */
    px-[30px] sm:px-[48px] py-[20px]
    rounded-[96px]
    text-white text-[16px] sm:text-[18px]
    font-comfortaa font-normal
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]   /* hover only sm+ */
    shadow-md sm:hover:shadow-lg
    transition-transform sm:hover:scale-105
  "
            >
              <p className="text-white font-comfortaa text-[16px] sm:text-[24px] font-bold leading-none">
                {t('learningAreas.browseProjects')}
              </p>
            </Button>

            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                  "_blank"
                )
              }
              className="
    flex justify-center items-center gap-[10px]
    w-[300px] h-[48px]                  /* Mobile size */
    sm:w-[380px] sm:h-[67px]            /* Tablet & up */
    min-w-[160px]
    px-[30px] sm:px-[48px] py-[20px]
    rounded-[96px]
    text-white text-[16px] sm:text-base
    font-comfortaa font-medium
    bg-gradient-to-r from-[rgba(242,93,144,0.8)] to-[rgba(249,213,61,0.8)]
    sm:hover:from-[rgba(249,213,61,0.8)] sm:hover:to-[rgba(242,93,144,0.8)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
  "
            >
              <p className="text-white font-comfortaa text-[16px] sm:text-[24px] font-bold leading-none">
                {t('learningAreas.meetMentors')}
              </p>
            </Button>


          </div>

        </div>
      </div>
    </section>
  );
}
