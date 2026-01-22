'use client'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from "react-i18next";
import PurposeCardOne from '../icons/PurposeCardOne';
import PurposeCardTwo from '../icons/PurposeCardTwo';
import PurposeCardThree from '../icons/PurposeCardThree';
import PurposeCardFour from '../icons/PurposeCardTour';
import PurposeCardFive from '../icons/PurposeCardFive';
import PurposeCardSix from '../icons/PurposeCardSix';
import PurposeCardSeven from '../icons/PurposeCardSeven';
export default function ProjectStepsSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <section className="w-full py-24 bg-white flex flex-col items-center gap-24">
      
    
      <div className="flex flex-col items-center text-center gap-2 px-4">
        <p
          className="self-stretch text-center text-[#F25D90] font-comfortaa font-bold leading-normal"
          style={{
            fontSize: 'var(--Text-Section-Label, 16px)',
          }}
        >
          {t('purpose_Stress.purpose_Stress')}
        </p>

        <p
          className="text-[16px] sm:text-[22px] lg:text-[28px] 
             text-center font-rocksalt font-normal leading-normal"
          style={{
            color: 'var(--Colors-Polynesian-Blue, #004699)',
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: 'var(--Colors-Polynesian-Blue, #004699)',
          }}
        >
          {t('purpose_Stress.purpose_Title_One')}
        </p>

        <p
          className="text-[16px] sm:text-[22px] lg:text-[28px] 
             text-center font-rocksalt font-normal leading-normal"
          style={{
            color: 'var(--Colors-Moonstone, #3DB0CB)',
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: 'var(--Colors-Moonstone, #3DB0CB)',
          }}
        >
          {t('purpose_Stress.purpose_Title_Two')}
        </p>

        <p
          className="text-[16px] sm:text-[18px] lg:text-[14px] 
             self-stretch text-center font-didact font-normal leading-normal pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0"
          style={{
            color: 'var(--Colors-Text-Color, #282828)',
          }}
        >
          {t('purpose_Stress.purpose_Dis')}
        </p>


      </div>

    
      <div className="relative flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-center items-center gap-6 px-[4px] mb-[100px]">
        {/* Card 1 */}
        <div className="relative w-[376px] h-[801px] sm:w-[360px] text-center p-9 lg:p-0">

          <div style={{ background: 'linear-gradient(180deg, rgba(61, 176, 203, 0.10) 0.26%, rgba(61, 176, 203, 0.50) 99.74%)' }} className="relative w-[300px] sm:w-[360px] rounded-[12px] flex flex-col items-center p-0 text-center overflow-hidden">
            <div className="w-[240px] h-[240px] aspect-square absolute left-[-19px]">
              <PurposeCardOne />
            </div>

            <p
              className="w-[200px] sm:w-[153.409px] 
             text-center 
             text-[16px] sm:text-[24px] lg:text-[30px] 
             text-[#004699] font-questrial font-normal 
             leading-[18px] sm:leading-none 
             mt-[40px] sm:mt-[60px] lg:mt-[81px]"
              style={{
                WebkitTextStrokeWidth: "0.5px",
                WebkitTextStrokeColor: "#004699",
              }}
            >
              {t('purpose_Stress.pick_Goal_Title')}
            </p>

            <p
              className="w-[240px] sm:w-[300px] 
             text-center 
             text-[16px] sm:text-[18px] lg:text-[20px] 
             text-[#282828] font-questrial font-normal 
             leading-[18px] sm:leading-none 
             mt-[8px] sm:mt-[10px]"
            >
              {t('purpose_Stress.pick_Goal_Dis_One')} <br /> {t('purpose_Stress.pick_Goal_Dis_Two')}
            </p>

            <div className="relative w-full h-[360px]">
              <Image
                src="/images/woman-notebook-and-writing-in-coffee-shop.png"
                alt="Pick a Goal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className={`xl:absolute xl:bottom-[100px] xl:z-20 left-[240px] w-[251px] ${isEnglish ? 'h-[127px]' : 'h-[147px]'} pl-[15px] pr-[15px] pt-[15px] pb-[15px] bg-white/50 backdrop-blur-md shadow-md rounded-xl text-left transition-transform duration-300 hover:scale-105 cursor-pointer`}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[35px] h-[35px] bg-brand-skyBlue rounded-full flex items-center justify-center">
                <PurposeCardTwo />
              </div>
              <p
                className="text-[24px] text-[#282828] font-questrial font-normal leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.2px",
                  WebkitTextStrokeColor: "#282828",
                }}
              >
                {t('purpose_Stress.milestones')}
              </p>

            </div>
            <p className="self-stretch text-[16px] text-[#282828] font-comfortaa font-normal leading-none">
              {t('purpose_Stress.milestones_Week1')}<br />
              {t('purpose_Stress.milestones_Week2')}<br />
              {t('purpose_Stress.milestones_Week3')}<br />
              ......
            </p>

          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-[300px] sm:w-[376px] md:w-[376px] lg:w-[376px] h-[300px] sm:h-[801px] sm:w-[360px] px-4 sm:px-10">

          <div className="xl:absolute xl:top-[70px] xl:right-[170px] w-[240px] p-4 bg-white/50 backdrop-blur-md shadow-md rounded-xl text-left ml-8 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[35px] h-[35px] bg-brand-pink rounded-full flex items-center justify-center">
                <PurposeCardThree />
              </div>
              <p
                className="text-[24px] text-[#282828] font-questrial font-normal leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.2px",
                  WebkitTextStrokeColor: "#282828",
                }}
              >
                {t('purpose_Stress.target')}
              </p>
            </div>
            <p className="self-stretch text-[16px] text-[#282828] font-comfortaa font-normal leading-none mt-[10px]">
              {t('purpose_Stress.target_Dis_One')} <br />
              {t('purpose_Stress.target_Dis_Two')} <br />
              {t('purpose_Stress.target_Dis_Three')}
            </p>
          </div>

          <div
            style={{
              background:
                'linear-gradient(0deg, rgba(61, 176, 203, 0.10) 0.1%, rgba(128, 185, 255, 0.50) 99.9%)',
            }}
            className="absolute top-1/4 xl:top-1/3 left-0 w-full xl:w-[356px] md:w-[356px] sm:w-[206px] rounded-[50px] flex flex-col items-center p-0 text-center overflow-hidden mt-20 md:mt-0 lg:mt-0"
          >
            <p
              className="w-[180px] sm:w-[202px] 
        text-center 
        text-[16px] sm:text-[24px] lg:text-[30px] 
        text-[#004699] font-questrial font-normal 
        leading-[18px] sm:leading-none 
        mt-[40px] sm:mt-[60px] lg:mt-[81px]"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#004699',
              }}
            >
              {t('purpose_Stress.map_Path')}
            </p>

            <p
              className="w-[240px] sm:w-[300px] 
  text-center 
  text-[16px] sm:text-[18px] lg:text-[20px] 
  text-[#282828] font-questrial font-normal 
  leading-[18px] sm:leading-none 
  mt-[8px] sm:mt-[10px] mb-10 md:mb-0 lg:mb-0"

            >
              {t('purpose_Stress.map_Path_Dis')}
            </p>

            <div className="w-[225.816px] h-[24.558px] shrink-0 absolute top-1/4 lg:top-[260px] left-0 hidden lg:block">
              <PurposeCardFour />
            </div>

            {/* Hide image on mobile */}
            <div className="relative w-full h-[360px] rounded-xl hidden sm:block">
              <Image
                src="/images/woman-notebook-and-writing-in-coffee-shop2.png"
                alt="Map Your Path"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>




        {/* Card 3 */}


        <div className="relative w-[376px] h-[801px] sm:w-[360px] text-center p-9 lg:p-0">
          <div style={{ background: 'linear-gradient(180deg, rgba(61, 176, 203, 0.10) 0.26%, rgba(61, 176, 203, 0.50) 99.74%)' }} className="relative w-[300px] sm:w-[360px] rounded-[50px] flex flex-col items-center p-0 text-center overflow-hidden">
            <div className="w-[244px] h-[244px] aspect-square absolute right-[-17.333px]">
              <PurposeCardFive />
            </div>

            <p
              className="w-[202px] text-center text-[16px] sm:text-[30px] text-[#004699] font-questrial font-normal leading-none mt-[81px]"
              style={{
                WebkitTextStrokeWidth: "0.5px",
                WebkitTextStrokeColor: "#004699",
              }}
            >
              {t('purpose_Stress.hit_GO')}
            </p>

            <p
              className="w-[300px] text-center text-[16px] sm:text-[20px] text-[#282828] font-questrial font-normal leading-none mt-[10px]"
            >
              {t('purpose_Stress.hit_GO_Dis')}
            </p>

            <div className="relative w-full h-[360px]">
              <Image
                src="/images/woman-notebook-and-writing-in-coffee-shop-for-rem.png"
                alt="Pick a Goal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="xl:absolute xl:bottom-[170px] mt-10 mb-10 xl:right-[80px]  w-[263px] h-[142px] p-[15px] bg-white/50 backdrop-blur-md shadow-md rounded-xl text-left z20 transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[35px] h-[35px] bg-brand-blue rounded-full flex items-center justify-center">
                <PurposeCardSix />
              </div>

              <p
                className="text-[24px] text-[#282828] font-questrial font-normal leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.2px",
                  WebkitTextStrokeColor: "#282828",
                }}
              >{t('purpose_Stress.resource')}</p>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center h-[28px] mb-[8px] gap-[10px] p-[1px] rounded-[5px] border border-[#80B9FF] bg-[linear-gradient(90deg,rgba(255,255,255,0.30)_0%,rgba(61,176,203,0.30)_100%)]">
              <p className="text-[16px] text-[#282828] font-comfortaa font-bold leading-none">
                {t('purpose_Stress.resource_Dis')}
              </p>
            </div>

            <div className="flex justify-end">
              <button style={{ background: "linear-gradient(90deg, #80B9FF 0%, #3DB0CB 100%)" }} className="w-[118px] h-[34px] px-4 py-1 text-white text-sm rounded-full font-comfortaa font-bold border border-blue-300">
                <p className="self-stretch text-[16px] text-white font-comfortaa font-bold leading-none">
                  {t('purpose_Stress.resource_Button')}
                </p>

              </button>
            </div>

            <div className="flex justify-end absolute right-[-1.333px] top-[110px]">
              <PurposeCardSeven />
            </div>


          </div>
        </div>

      </div>
    
    </section>
  )
}
