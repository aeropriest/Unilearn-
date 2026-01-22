'use client'
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button"
import StarSVG from '../icons/StarSVG';
import { useTranslation } from "react-i18next";

const MakeYourChoice = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="py-14 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 lg:mt-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">

        {/* LEFT */}
        <div className="w-full lg:pr-6">
          <p className="text-[#F25D90] font-comfortaa text-[16px] font-bold mb-3
               text-center sm:text-start">
            {t('makeYourChoice.makeYourChoice')}
          </p>

          <h2
            className="text-[16px] sm:text-[22px] lg:text-[28px]
             text-center sm:text-start
             text-[#004699] font-rocksalt font-normal
             leading-[22px] sm:leading-[28px] lg:leading-normal mb-6"
            style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
          >
            {t('makeYourChoice.makeYourChoice_Title')}
          </h2>

          <div className="space-y-6 px-4 sm:px-0">
            {[
              {
                number: `${t('makeYourChoice.makeYourChoice_Card1_Name')}`,
                title: `${t('makeYourChoice.makeYourChoice_Card1_Title')}`,
                description: `${t('makeYourChoice.makeYourChoice_Card1_Dis')}`
              },
              {
                number: `${t('makeYourChoice.makeYourChoice_Card2_Name')}`,
                title: `${t('makeYourChoice.makeYourChoice_Card2_Title')}`,
                description: `${t('makeYourChoice.makeYourChoice_Card2_Dis')}`
              },
              {
                number: `${t('makeYourChoice.makeYourChoice_Card3_Name')}`,
                title: `${t('makeYourChoice.makeYourChoice_Card3_Title')}`,
                description: `${t('makeYourChoice.makeYourChoice_Card3_Dis')}`
              },
            ].map(({ number, title, description }) => (
              <div key={number}>
                <div className="flex items-end mb-1">
                  <h3
                    className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1] font-plusJakarta font-extrabold bg-gradient-to-br from-[#3DB0CB0A] to-[#3DB0CB7A] bg-clip-text text-transparent"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {number}
                  </h3>
                  <p
                    className="flex-1 text-[#3DB0CB] font-questrial text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-tight ml-[-10px] sm:ml-[-18px]"
                    style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#3DB0CB' }}
                  >
                    {title}
                  </p>
                </div>
                <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal leading-relaxed font-didact text-[#282828]">
                  {description}
                </p>
              </div>
            ))}
          </div>


          <div className="mt-8 flex justify-center min-[1000px]:justify-start">
            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                  "_blank"
                )
              }
              className="
    flex justify-center items-center
    w-[300px] h-[48px]               /* Default: mobile */
    sm:w-[200px] sm:h-[72px]         /* Small screens */
    md:w-[490px] lg:w-[604px] lg:h-[67px]
    px-[48px] py-[20px]
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    text-white text-[16px] sm:text-[20px] md:text-[24px]
    font-bold font-comfortaa
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
            >
              <p className="text-white text-center font-comfortaa text-[16px] sm:text-[20px] md:text-[24px] font-bold leading-[24px]">
                {t("makeYourChoice.makeYourChoice_Button")}
              </p>
            </Button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="relative w-full flex justify-center lg:justify-start">
          {/* Show on lg+; size down on lg, full on xl */}
          <div className="relative hidden lg:block">
            <div
              style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%)" }}
              className="relative rounded-full flex items-center justify-center
                     w-[360px] aspect-square md:w-[420px] lg:w-[460px] xl:w-[556px]"
            >
              <Image
                src="/images/happy-young-multiethnic-couple-using-laptop.png"
                alt="Student learning"
                fill
                className="object-contain mt-8 md:mt-10"
                sizes="(min-width:1280px) 556px, (min-width:1024px) 460px, (min-width:768px) 420px, 360px"
              />
              <Image
                src="/images/SmileDecoBlue.svg"
                alt="Decorative smile"
                width={110}
                height={120}
                className="absolute right-10 lg:right-8 xl:right-20 top-1 z-20"
              />
            </div>

            <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 z-20">
              <div className="bg-white/80 backdrop-blur-md rounded-[20px] border px-4 py-3 shadow-md text-center w-[200px] sm:w-[213px]">
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (<StarSVG key={i} />))}
                </div>
                <p className="font-comfortaa text-sm sm:text-base text-brand-skyBlue font-medium">
                  {t('makeYourChoice.makeYourChoice_Button_Dis')}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default MakeYourChoice;
