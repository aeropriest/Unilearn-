'use client';

import Link from "next/link";
import Image from 'next/image';
import React from 'react';
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";

const LearningHighlights = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-2">
        {/* Left: Image and Badge */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 mb-10">
          <div className="relative z-10 mr-0 lg:mr-5">
            <div
              className="
        w-full 
        h-[300px] 
        sm:w-[300px] sm:h-[300px] 
        md:w-[350px] md:h-[350px] 
        lg:w-[517px] lg:h-[544px] 
        self-stretch 
        rounded-full 
        flex items-center justify-center 
        bg-[linear-gradient(194deg,rgba(255,255,255,0.30)_21.62%,rgba(242,93,144,0.24)_79.17%)]
      "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/images/student.png"
                  alt="Student learning"
                  width={544}
                  height={641}
                  className="object-contain w-full h-full max-w-[544px] max-h-[641px] mt-20"
                />
              </div>

              <Image
                src="/images/SmileDeco.svg"
                alt="Student learning"
                width={122}
                height={134}
                className="
          absolute right-5 -top-14 z-10
          w-[80px] h-[88px]              /* mobile default */
          sm:w-[90.4px] sm:h-[90.83px]   /* tablet */
          md:w-[122.4px] md:h-[134.83px] /* desktop+ */
          shrink-0 aspect-[122.4/134.83]
        "
              />
            </div>
          </div>

          <div className="absolute bottom-[-90px] left-1/2 lg:left-1/3 transform -translate-x-1/2 z-10 rounded-[30px]">
            <div
              className="
        flex flex-col justify-center items-center text-center shrink-0 
        w-[220px] h-[80px]            /* smaller on mobile */
        sm:w-[320px] sm:h-[110px] 
        md:w-[344.8px] md:h-[119.08px]
        py-2 sm:py-3
        rounded-[30px] 
        border border-[rgba(242,93,144,0.6)] 
        bg-[rgba(255,255,255,0.09)] 
        backdrop-blur-[36.55px]
      "
            >
              <p
                className="
          text-[#F25B8E] font-quicksand font-semibold text-center
          text-[18px] leading-[24px]    /* smaller on mobile */
          sm:text-[28px] sm:leading-[32px]
          md:text-[32px] md:leading-[34px]
        "
              >
                {t('highlights.years')}
              </p>

              <p
                className="
          font-comfortaa text-center font-bold
          text-[10px] leading-[14px]    /* smaller on mobile */
          sm:text-[14px] sm:leading-[18px]
          md:text-[16px] md:leading-[20px]
          text-[#F25D90]
        "
                style={{
                  WebkitTextStrokeWidth: '0.1px',
                  WebkitTextStrokeColor: '#F25D90',
                }}
              >
                {t('highlights.expertise_International_Education')}
              </p>
            </div>
          </div>
        </div>


        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 mt-[50px] pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          <p
            className="
    self-stretch
    text-[14px] sm:text-[16px]   /* 2px smaller on mobile */
    font-comfortaa font-bold leading-normal text-brand-pink mb-4
  "
          >
            {t('highlights.highlights')}
          </p>
          <h2
            className="text-[16px] sm:text-[22px] lg:text-[28px] font-rocksalt font-normal text-brand-blue mb-2"
            style={{
              WebkitTextStrokeWidth: '0.5px',
              WebkitTextStrokeColor: '#004699',
            }}
          >
            {t('highlights.forget_Passive_Want')}
          </h2>

          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#282828] font-didact font-normal leading-normal mb-2 max-w-xl">
            {t('highlights.highlightsDis')}
          </p>



          <div className="lg:space-y-0 md:space-y-2 sm:space-y-6">
            <div>
              <div className="flex items-center gap-0 mb-0">
                <h3 className="text-[72px] font-extrabold leading-[80px] font-plusjakartasans bg-gradient-to-tr from-[rgba(61,176,203,0.03)] to-[rgba(61,176,203,0.48)] bg-clip-text text-transparent">
                  {t('highlights.one')}
                </h3>

                <p
                  className="flex flex-col justify-end flex-1 self-stretch 
             text-[26px] sm:text-[32px] lg:text-[36px] 
             leading-[30px] sm:leading-[36px] lg:leading-[40px] 
             font-questrial font-normal text-[#004699] -mt-2 -ml-6 mb-1"
                  style={{
                    WebkitTextStrokeWidth: '0.5px',
                    WebkitTextStrokeColor: '#004699',
                  }}
                >
                  {t('highlights.one_Title')}
                </p>


              </div>
              <p className="self-stretch text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#282828] font-didact leading-normal">
                {t('highlights.one_Dis')}
              </p>

            </div>

            <div className=''>
              <div className="flex items-center gap-0 mb-0">
                <h3 className="text-[72px] font-extrabold leading-[80px] font-plusjakartasans bg-gradient-to-tr from-[rgba(61,176,203,0.03)] to-[rgba(61,176,203,0.48)] bg-clip-text text-transparent">
                  {t('highlights.two')}
                </h3>

                <p
                  className="flex flex-col justify-end flex-1 self-stretch 
             text-[26px] sm:text-[32px] lg:text-[36px] 
             leading-[30px] sm:leading-[36px] lg:leading-[40px] 
             font-questrial font-normal text-[#004699] -mt-2 -ml-8 mb-1"
                  style={{
                    WebkitTextStrokeWidth: '0.5px',
                    WebkitTextStrokeColor: '#004699',
                  }}
                >
                  {t('highlights.two_Title')}
                </p>



              </div>
              <p className="self-stretch text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#282828] font-didact leading-normal">
                {t('highlights.two_Dis')}
              </p>
            </div>

            <div className=''>
              <div className="flex items-center gap-0 mb-0">
                <h3 className="text-[72px] font-extrabold leading-[80px] font-plusjakartasans bg-gradient-to-tr from-[rgba(61,176,203,0.03)] to-[rgba(61,176,203,0.48)] bg-clip-text text-transparent">
                  {t('highlights.three')}
                </h3>

                <p
                  className="flex flex-col justify-end flex-1 self-stretch 
             text-[26px] sm:text-[32px] lg:text-[36px] 
             leading-[30px] sm:leading-[36px] lg:leading-[40px] 
             font-questrial font-normal text-[#004699] -mt-2 -ml-8 mb-2"
                  style={{
                    WebkitTextStrokeWidth: '0.5px',
                    WebkitTextStrokeColor: '#004699',
                  }}
                >
                  {t('highlights.three_Title')}
                </p>



              </div>
              <p className="self-stretch text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#282828] font-didact leading-normal">
                {t('highlights.three_Dis')}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 px-[0px] sm:px-0 flex justify-center">
            <Button
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_in`,
                  "_blank"
                )
              }
              asChild
              className="
      flex justify-center items-center
      w-full h-[48px]                          
      sm:w-[380px] lg:w-[480px] xl:w-[643px]   
      sm:h-[67px]                              
      px-[30px] sm:px-[48px] py-[20px]
      rounded-[96px]
      bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
      sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF] 
      text-white text-[16px] sm:text-[18px]
      font-comfortaa font-bold
      shadow-md sm:hover:shadow-lg
      transition-transform sm:hover:scale-105 cursor-pointer
    "
            >
              <p className="text-white font-comfortaa text-[16px] sm:text-[24px] font-bold leading-none">
                {t("highlights.get_Started")}
              </p>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default LearningHighlights;
