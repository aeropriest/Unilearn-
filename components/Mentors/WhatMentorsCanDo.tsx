'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AskBetterQuestions from '../icons/AskBetterQuestions'
import KeepYouAccountable from '../icons/KeepYouAccountable'
import CelebrateYourGrowth from '../icons/CelebrateYourGrowth'
import { useTranslation } from "react-i18next";

export default function WhatMentorsCanDo() {
  const { t } = useTranslation();

  return (
    <section className="py-0 lg:py-16 px-4 text-center">

      <p className="text-[#F25D90] text-center text-[18px] lg:text-[24px] leading-[24px] font-bold font-comfortaa">
        {t('understandRole.understandRole')}
      </p>
      
      <h2
        className="text-[16px] sm:text-[28px] lg:text-[42px] 
             leading-[22px] sm:leading-[32px] lg:leading-[42px] 
             text-center mt-[15px] font-normal text-brand-blue font-rocksalt"
        style={{
          WebkitTextStrokeWidth: '0.5px',
          WebkitTextStrokeColor: '#004699',
        }}
      >
        {t('understandRole.understandRole_Title')}
      </h2>

      <Button
        onClick={() =>
          window.open(
            `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=instructor#/`,
            "_blank"
          )
        }
        className="
    bg-gradient-to-r from-[rgba(242,93,144,0.8)] to-[rgba(249,213,61,0.8)]
    sm:hover:from-[rgba(249,213,61,0.8)] sm:hover:to-[rgba(242,93,144,0.8)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
    mt-5 text-white font-comfortaa font-[700] text-[18px] sm:text-[24px]
    px-6 py-2 rounded-full mt-[50px] mb-12
    w-[300px] h-[47px] lg:w-[350px] lg:h-[67px]
    cursor-pointer
  "
      >
        {t('understandRole.understandRole_Button')}
      </Button>

      <div className="w-full max-w-7xl mx-auto mb-[10px] hidden lg:block">
        <div className="relative w-full h-auto min-h-[280px] md:min-h-[340px] lg:min-h-[380px] rounded-[40px] lg:rounded-[50px] xl:rounded-[100px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(105deg, rgba(255, 255, 255, 0.15) 12.75%, rgba(249, 213, 61, 0.15) 87.25%)',
              borderRadius: '0px 200px 200px 0px',
            }}
            className="
        w-full h-auto
        p-4 md:p-6 lg:p-8
        /* stay relative on tablets; absolute only at xl */
        xl:absolute xl:right-0 xl:top-0 xl:w-3/5
        md:h-[320px] lg:h-[360px] xl:h-[366px]
      "
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Image side */}
              <div className="flex justify-center items-center w-full h-[220px] md:h-[280px] lg:w-1/2 lg:h-full">
                <div
                  style={{
                    background:
                      'radial-gradient(46.7% 46.64% at 40% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(249, 213, 61, 0.00) 100%)',
                  }}
                  className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]"
                >
                  <Image
                    src="/images/millennial-woman-in-spectacles.png"
                    alt="Mentor"
                    fill
                    className="object-contain md:-mt-4 lg:-mt-6 lg:ml-6"
                    priority
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-center items-start text-left w-full md:px-4 lg:px-0 lg:w-1/2">
                <p className="xl:rotate-[-22deg] max-w-[320px] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] font-normal font-didact text-[#282828] mt-2 md:mt-4">
                  {t('understandRole.understandRole_Card1_Dis')}
                </p>

                <div className="xl:rotate-[-22deg] bg-white shadow-md md:h-[56px] lg:h-[66px] md:w-[300px] lg:w-[354px] px-4 py-2 rounded-full inline-flex items-center text-[#80B9FF] mt-4 md:mr-6 font-medium text-sm whitespace-nowrap">
                  <AskBetterQuestions />
                  <p className="text-[#80B9FF] font-comfortaa text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[24px] md:ml-2">
                    {t('understandRole.understandRole_Card1_Title')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full max-w-7xl mx-auto mb-[10px] hidden lg:block">
        <div className="relative w-full h-auto min-h-[280px] md:min-h-[340px] lg:min-h-[380px] rounded-[40px] lg:rounded-[50px] xl:rounded-[100px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(257deg, rgba(255, 255, 255, 0.15) 9.41%, rgba(249, 213, 61, 0.15) 90.59%)',
              borderRadius: '200px 0px 0px 200px',
            }}
            className="
        w-full h-auto
        p-4 md:p-6 lg:p-8
        /* stay relative on tablets, absolute only at xl */
        xl:absolute xl:left-0 xl:top-0 xl:w-3/5
        md:h-[320px] lg:h-[360px] xl:h-[366px]
      "
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Text section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right md:pl-4 lg:pl-6">
                <div className="bg-white shadow-md px-3 py-1.5 mb-3 md:h-[56px] lg:h-[66px] md:w-[280px] lg:w-[354px] rounded-full inline-flex items-center justify-center text-[#80B9FF] mt-4 font-medium text-xs sm:text-sm xl:-rotate-[20deg]">
                  <KeepYouAccountable />
                  <p className="text-[#3DB0CB] font-comfortaa text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[22px] ml-2">
                    {t('understandRole.understandRole_Card2_Title')}
                  </p>
                </div>

                <p className="w-[240px] md:w-[280px] mt-3 xl:-rotate-[22deg] text-[#282828] text-right font-didact text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[20px]">
                  {t('understandRole.understandRole_Card2_Dis')}
                </p>
              </div>

              {/* Image section */}
              <div
                style={{
                  background:
                    'radial-gradient(46.7% 46.64% at 60% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(249, 213, 61, 0.00) 100%)',
                }}
                className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0"
              >
                <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px]">
                  <Image
                    src="/images/millennial-woman.png"
                    alt="Mentor"
                    fill
                    className="object-contain md:-mt-4 lg:-mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full max-w-7xl mx-auto mb-[10px] hidden lg:block">
        <div className="relative w-full h-auto min-h-[280px] md:min-h-[340px] lg:min-h-[380px] rounded-[40px] lg:rounded-[50px] xl:rounded-[100px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(105deg, rgba(255, 255, 255, 0.15) 12.75%, rgba(249, 213, 61, 0.15) 87.25%)',
              borderRadius: '0px 200px 200px 0px',
            }}
            className="
        w-full h-auto
        p-4 md:p-6 lg:p-8
        /* Stay relative on iPad sizes to prevent layout issues */
        xl:absolute xl:right-0 xl:top-0 xl:w-3/5
        md:h-[320px] lg:h-[360px] xl:h-[366px]
      "
          >
            <div className="flex flex-col lg:flex-row w-full h-full">
              {/* Image side */}
              <div className="flex justify-center items-center w-full h-[220px] md:h-[280px] lg:w-1/2 lg:h-full">
                <div
                  style={{
                    background:
                      'radial-gradient(46.7% 46.64% at 60% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(249, 213, 61, 0.00) 100%)',
                  }}
                  className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]"
                >
                  <Image
                    src="/images/millennial-woman-in-spectacles-connection.png"
                    alt="Mentor"
                    fill
                    className="object-contain md:-mt-4 lg:-mt-6 lg:ml-6"
                    priority
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="flex flex-col justify-center items-start text-left w-full md:px-4 lg:px-0 lg:w-1/2">
                <p className="xl:rotate-[-22deg] max-w-[320px] sm:max-w-[340px] text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] font-normal font-didact text-[#282828] mt-2 md:mt-4">
                  {t('understandRole.understandRole_Card3_Dis')}
                </p>

                <div className="xl:rotate-[-22deg] bg-white shadow-md md:h-[56px] lg:h-[66px] md:w-[300px] lg:w-[354px] px-4 py-2 rounded-full inline-flex items-center text-[#80B9FF] mt-4 md:mr-6 font-medium text-sm whitespace-nowrap">
                  <CelebrateYourGrowth />
                  <p className="text-[#F25D90] text-center font-comfortaa text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[24px] md:ml-2">
                    {t('understandRole.understandRole_Card3_Title')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ✅ Mobile & iPad version (sm + md only, no images) */}
      <div className="w-full max-w-sm mx-auto mb-4 block lg:hidden">
        <div className="relative w-full h-auto min-h-[140px] rounded-[20px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(105deg, rgba(255, 255, 255, 0.15) 12.75%, rgba(249, 213, 61, 0.15) 87.25%)',
              borderRadius: '20px',
            }}
            className="w-full h-full p-4 flex flex-col items-center justify-center text-center"
          >
            {/* Description */}
            <p className="max-w-[240px] text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] font-normal font-didact text-[#282828] mb-3">
              {t('understandRole.understandRole_Card1_Dis')}
            </p>

            {/* Title pill */}
            <div className="bg-white shadow-md px-3 py-1.5 rounded-full inline-flex items-center justify-center text-[#80B9FF] mt-2 font-medium text-xs sm:text-sm">
              <AskBetterQuestions />
              <p className="text-[#80B9FF] font-comfortaa text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[20px] ml-2">
                {t('understandRole.understandRole_Card1_Title')}
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* ✅ Mobile & iPad version (sm + md only, no image) */}
      <div className="w-full max-w-sm mx-auto mb-4 block lg:hidden">
        <div className="relative w-full h-auto min-h-[140px] rounded-[20px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(257deg, rgba(255, 255, 255, 0.15) 9.41%, rgba(249, 213, 61, 0.15) 90.59%)',
              borderRadius: '20px',
            }}
            className="w-full h-full p-4 flex flex-col items-center justify-center text-center"
          >
            {/* Title pill */}
            <div className="bg-white shadow-md px-3 py-1.5 mb-3 rounded-full inline-flex items-center justify-center text-[#3DB0CB] font-medium text-xs sm:text-sm">
              <KeepYouAccountable />
              <p className="text-[#3DB0CB] font-comfortaa text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[20px] ml-2">
                {t('understandRole.understandRole_Card2_Title')}
              </p>
            </div>

            {/* Description */}
            <p className="max-w-[240px] mt-2 text-[#282828] font-didact text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[18px] text-center">
              {t('understandRole.understandRole_Card2_Dis')}
            </p>
          </div>
        </div>
      </div>



      <div className="w-full max-w-sm mx-auto mb-4 block lg:hidden">
        <div className="relative w-full h-auto min-h-[140px] rounded-[20px] overflow-hidden">
          <div
            style={{
              background:
                'linear-gradient(105deg, rgba(255, 255, 255, 0.15) 12.75%, rgba(249, 213, 61, 0.15) 87.25%)',
              borderRadius: '0px 20px 20px 0px',
            }}
            className="w-full h-full p-4 flex flex-col items-center justify-center text-center"
          >
            {/* Description */}
            <p className="max-w-[240px] text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] font-normal font-didact text-[#282828] mb-3">
              {t('understandRole.understandRole_Card3_Dis')}
            </p>

            {/* Title pill */}
            <div className="bg-white shadow-md px-3 py-1.5 rounded-full inline-flex items-center justify-center text-[#F25D90] mt-2 font-medium text-xs sm:text-sm">
              <CelebrateYourGrowth />
              <p className="text-[#F25D90] font-comfortaa text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[20px] ml-2">
                {t('understandRole.understandRole_Card3_Title')}
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
