'use client'
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";

export default function PalSessionPromo() {
  const { t } = useTranslation();
  return (

    <section className="w-full px-4 pt-24 pb-24 flex flex-col items-center justify-center lg:mb-20 max-w-[1920px] max-h-[960px] mx-auto">
      {/* Header Text */}
      <div className="max-w-[1200px] text-center flex flex-col items-center gap-4 mb-0 px-4">
        <p className="w-full max-w-[334px] text-[#F25D90] font-comfortaa text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-[24px]">
          {t('whatsMore.whatsMore')}
        </p>

        <h2
          className="text-[16px] sm:text-[28px] lg:text-[42px] 
             leading-[22px] sm:leading-[32px] lg:leading-[42px] 
             self-stretch text-[#004699] text-center font-rocksalt 
             max-w-[1200px] max-h-[42px] font-normal mb-4"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('whatsMore.whatsMore_Title')}
        </h2>

        <p
          className="text-[16px] sm:text-[18px] lg:text-[20px] 
             leading-[22px] sm:leading-[24px] lg:leading-[28px] 
             self-stretch text-[#282828] font-didact text-center font-normal"
        >
          {t('whatsMore.whatsMore_Dis')}
        </p>
      </div>

      {/* Image & Overlapping Card */}
      <div className="relative w-full max-w-[1200px] mt-8 lg:-mt-[55px] mb-24 px-4">
        <Image
          src="/images/young-programmers-working-on-a-new-project.png"
          alt="Pal Session Preview"
          width={1201}
          height={440}
          className="w-full h-auto object-contain"
        />

        {/* Overlapping card */}
        <div className="w-full max-w-[593px] p-6 sm:p-8 md:p-12 bg-white/80 rounded-xl shadow-[1px_1px_5px_5px_rgba(40,40,40,0.10)] backdrop-blur-md flex flex-col items-center gap-4 text-center mt-12 
min-[759px]:mt-0 min-[759px]:absolute min-[759px]:bottom-[-60%] min-[759px]:left-1/2 min-[759px]:-translate-x-1/2">
          <p className="w-full text-[#F25D90] text-center font-comfortaa text-[16px] font-bold leading-normal">
            {t('whatsMore.whatsMore_Updated')}
          </p>

          <h3
            className="text-[16px] sm:text-[22px] lg:text-[28px] 
             text-[#004699] text-center font-rocksalt font-normal"
            style={{
              WebkitTextStrokeWidth: '0.5px',
              WebkitTextStrokeColor: '#004699',
            }}
          >
            {t('whatsMore.whatsMore_Updated_Title')}
          </h3>

          <p
            className="text-[16px] sm:text-[18px] lg:text-[20px] 
             w-full max-w-[493px] text-[#282828] text-center 
             font-didact font-normal leading-normal"
          >
            {t('whatsMore.whatsMore_Updated_Dis')}
          </p>

          <Link href="https://humdrum-art-946.notion.site/261463789b58804da257fc956fc9891a?v=261463789b58802b9ada000cb0a584b0&source=copy_link">
            <button
              className="
    flex justify-center items-center
    w-[238px] h-[48px]
    px-[38px] py-[14px]
    text-white text-[16px] sm:text-[18px] font-bold font-comfortaa
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
    cursor-pointer
  "
            >
              {t('community.go_Community')}
            </button>
          </Link>
        </div>
      </div>  
    </section>
  )
}
