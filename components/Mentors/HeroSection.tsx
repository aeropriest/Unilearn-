'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="relative flex flex-col px-4 mb-20 sm:px-6 lg:px-1 lg:pt-[100px] lg:w-full lg:h-[1397px] mx-auto
                        lg:max-xl:w-auto lg:max-xl:h-auto lg:max-xl:px-4 lg:max-xl:pt-10">
      <p
        className="text-[16px] sm:text-[24px] md:text-[32px] lg:text-[36px] 
             leading-[22px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] 
             self-stretch font-rocksalt font-normal text-transparent bg-clip-text 
             bg-gradient-to-r from-[#F25D90] to-[#F25D90CC] 
             px-4 sm:px-6 lg:pl-[150px] lg:max-xl:pl-10 lg:max-xl:text-[28px] mt-[20px] lg:mt-[0px] md:mt-[0px]  mb-[20px] lg:mb-[0px] md:mb-[0px]"
      >
        {t('mentorsHeroSection.heroSection')}
      </p>


      <div className="lg:mb-[20px] sm:mt-[10px] w-full max-w-[1920px] relative z-10 text-start mx-auto lg:px-[20px] sm:px-6 md:pl-[150px] lg:pl-[150px]
                      lg:max-xl:max-w-full lg:max-xl:px-4 lg:max-xl:pl-10 lg:max-xl:mb-6">
        <p
          className={`text-[32px] sm:text-[48px] md:text-[72px] lg:text-[100px] ${isEnglish ? 'xl:text-[150px]' : 'xl:text-[100px]' } leading-[1.1] md:leading-[1.15] xl:leading-[180px] font-normal font-questrial text-transparent bg-clip-text bg-gradient-to-r from-[#004699] to-[#004699CC]
                     lg:max-xl:text-[72px] lg:max-xl:leading-[1.1] ml-[16px] lg:ml-[0px] md:ml-[0px]`}
          style={{
            textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)',
            WebkitTextStrokeWidth: '1.5px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('mentorsHeroSection.heroSection_Title1')}
        </p>

        <p
          className={`
                    whitespace-nowrap 
                    text-[40px] ml-4    /* base: mobile */
                    sm:text-[40px] /* small devices */
                    md:text-[70px] /* tablets */
                    lg:text-[100px] /* laptops */
                    xl:text-[140px] /* desktops */
                    ${isEnglish ? "2xl:text-[180px]" : "2xl:text-[120px]"} /* big screens */
                    leading-[1.1] 
                    font-normal font-questrial 
                    text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#004699] to-[#004699CC] 
                    pt-2 pb-4 
                    ml-[8px] sm:ml-0 text-start
                  `}
          style={{
            textShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)",
            WebkitTextStrokeWidth: "1.5px",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {t("mentorsHeroSection.heroSection_Title2")}
        </p>

        <p
          className={`ml-[16px] lg:ml-[0px] md:ml-[0px] mb-10 md:mb-40 lg:mb-0 xl:mb-0 text-[40px] sm:text-[72px] md:text-[100px] lg:text-[250px] ${isEnglish ? 'xl:text-[400px] lg:leading-[300px]' : 'xl:text-[100px] lg:leading-[100px]' }  font-normal font-questrial text-transparent bg-clip-text bg-gradient-to-r from-[#F25D90] to-[#F25D90CC] lg:pl-[10px]
                     lg:max-xl:text-[180px] lg:max-xl:leading-[1.05] lg:max-xl:pl-0`}
          style={{
            textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)',
            WebkitTextStrokeWidth: '1.5px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('mentorsHeroSection.heroSection_Title3')}
        </p>
      </div>    
      <div
        style={{
          background: `radial-gradient(37.7% 37.4% at 66.35% 65.95%, rgba(249, 213, 61, 0.80) 0%, rgba(249, 213, 61, 0.00) 100%)`,
        }}
        className="relative -mt-[27%] z-20 flex justify-end
             lg:max-xl:mt-0 lg:max-xl:justify-center"
      >
        {/* Right gradient overlay */}
        <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <Image
          src="/images/Mentorship.png"
          alt="Mentorship Group"
          width={1275}
          height={894}
          className="w-full max-w-[1275px] object-contain
               lg:max-xl:max-w-[900px]"
        />
      </div>

      <div className="w-full max-w-[1920px] relative z-10 mx-auto text-center text-brand-blue px-4
                lg:max-xl:max-w-full
                md:max-lg:max-w-full">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-x-[10px]
               md:max-lg:flex-col md:max-lg:gap-x-0 md:max-lg:gap-y-4 md:max-lg:px-4"
        >
          <p
            className={`text-xs sm:text-sm md:text-base lg:text-end ${isEnglish ? 'lg:text-[20px]' : 'lg:text-[18px]'} font-[700] whitespace-nowrap font-comfortaa h-[44px] w-[351px]
                 lg:max-xl:whitespace-normal lg:max-xl:w-auto lg:max-xl:h-auto lg:max-xl:text-center
                 md:max-lg:whitespace-normal md:max-lg:w-auto md:max-lg:h-auto md:max-lg:text-center mt-[20px] lg:mt-[0px] md:mt-[0px]`}
          >
            {t('mentorsHeroSection.heroSection_Sub_Title1')}
            <br />
            {t('mentorsHeroSection.heroSection_Sub_Title2')}
          </p>

          <div className="flex flex-col sm:flex-row gap-[10px]
                    md:max-lg:w-full md:max-lg:justify-center md:max-lg:gap-3">
            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                  "_blank"
                )
              }
              className="
    w-[300px] h-[48px] text-sm
    sm:w-[271px] sm:h-[67px] sm:text-base
    md:max-lg:w-[220px] md:max-lg:h-[56px]
    flex justify-center items-center
    font-bold text-white
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
    cursor-pointer
  "
            >
              <p
                className={`text-[16px] sm:text-[18px] lg:text-[24px] 
      text-white font-comfortaa font-bold leading-normal
      ${!isEnglish ? "sm:text-[16px] lg:text-[20px]" : ""}`}
              >
                {t("mentorsHeroSection.heroSection_Button1")}
              </p>
            </Button>

            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=instructor#/`,
                  "_blank"
                )
              }
              className="
    w-[300px] h-[48px] text-sm
    sm:w-[287px] sm:h-[67px] sm:text-base
    md:max-lg:w-[220px] md:max-lg:h-[56px]
    font-bold text-white rounded-full cursor-pointer
    bg-gradient-to-r from-[rgba(242,93,144,0.8)] to-[rgba(249,213,61,0.8)]
    sm:hover:from-[rgba(249,213,61,0.8)] sm:hover:to-[rgba(242,93,144,0.8)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
  "
            >
              <p
                className={`text-[16px] sm:text-[18px] lg:text-[24px] 
      text-white font-comfortaa font-bold leading-normal
      ${!isEnglish ? 'sm:text-[14px] lg:text-[18px]' : ''}`}
              >
                {t('mentorsHeroSection.heroSection_Button2')}
              </p>
            </Button>
          </div>

          <span
            className={`text-[12px] sm:text-sm lg:text-start lg:w-[375px] md:text-base ${isEnglish ? 'lg:text-[20px]' : 'lg:text-[18px]'}   font-[700] whitespace-nowrap font-comfortaa h-[44px] w-[351px]
                 lg:max-xl:whitespace-normal lg:max-xl:w-auto lg:max-xl:h-auto lg:max-xl:text-center
                 md:max-lg:whitespace-normal md:max-lg:w-auto md:max-lg:h-auto md:max-lg:text-center mt-[20px] lg:mt-[0px] md:mt-[0px]`}
          >
            {t('mentorsHeroSection.heroSection_Sub_Title3')}
            <br />
            {t('mentorsHeroSection.heroSection_Sub_Title4')}
          </span>
        </div>
      </div>

    </section>
  );
}
