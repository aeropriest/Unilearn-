'use client';
import Link from "next/link";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

export default function CommunitySection() {
  const { t } = useTranslation();

  return (
    <section className="relative from-white mt-0 mb-20">
      {/* Floating Bulb */}
      <div className="flex absolute top-100 left-[200px] w-44 h-44 md:w-46 md:h-46 z-10 items-start justify-start -rotate-[25.002deg] hidden lg:block">
        <Image
          src="/images/3dbulb.png"
          alt="Bulb"
          fill
          className="object-contain"
        />
      </div>
      {/* Main Image */}
      <div className="relative w-full" style={{
        background:"linear-gradient(180deg, rgba(255, 255, 255, 0.80) 33.65%, rgba(252, 234, 158, 0.80) 70.93%, rgba(249, 213, 61, 0.80) 100%)"
      }}>
        <Image
          src="/images/community.png"
          alt="People collaborating"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Card Overlay */}
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[811px] lg:max-h-[361px] bg-white rounded-xl shadow-lg p-6 text-center z-20">
          <div className="text-center mb-6">
            <p className="self-stretch text-center text-[#F25D90] font-comfortaa text-[16px] font-bold leading-normal mb-4 tracking-wide">
              {t('community.community')}
            </p>
            <h1
              className="text-[16px] sm:text-[22px] lg:text-[28px] text-center text-[#004699] font-rocksalt font-normal leading-normal mb-6"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#004699',
              }}
            >
              {t('community.community_Title')}
            </h1>

            <p className="text-[14px] sm:text-[16px] lg:text-[14px] text-center text-[#282828] font-didact font-normal leading-normal max-w-xl mx-auto mb-2">
              {t('community.community_Dis')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            
            <Button
              onClick={() =>
                window.open(
                  `https://humdrum-art-946.notion.site/261463789b58804da257fc956fc9891a?v=261463789b58802b9ada000cb0a584b0&source=copy_link`,
                  "_blank"
                )
              }
              className="
    flex justify-center items-center gap-2
    w-[300px] h-[48px]
    sm:w-[350px] sm:h-[48px]
    min-w-[130px] sm:min-w-[160px]
    px-[38px] py-[14px]
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
  "
            >
              <p className="text-white font-comfortaa text-[16px] sm:text-[18px] font-bold leading-normal">
                {t("community.go_Community")}
              </p>
            </Button>

            <Button
              onClick={() =>
                window.open(`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_in`, "_blank")
              }
              className="
    flex justify-center items-center gap-2
    w-[300px] h-[48px]
    sm:w-[350px] sm:h-[48px]
    min-w-[130px] sm:min-w-[160px]
    px-[38px] py-[14px]
    rounded-[96px]
    bg-gradient-to-r from-[rgba(242,93,144,0.8)] to-[rgba(249,213,61,0.8)]
    sm:hover:from-[rgba(249,213,61,0.8)] sm:hover:to-[rgba(242,93,144,0.8)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out cursor-pointer
  "
            >
              <p className="text-white font-comfortaa text-[16px] sm:text-[18px] font-bold leading-normal">
                {t("community.join_Now")}
              </p>
            </Button>


          </div>
        </div>
      </div>
    </section>
  );
}
