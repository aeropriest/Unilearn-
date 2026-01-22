'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function HomeHero() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  return (
    <section className="relative py-1 px-0 overflow-hidden from-white via-primary-50/30 to-accent-50/50">
      <div
        className="grid max-w-[1600px] w-full mx-auto pt-[50px] pb-[20px] px-4 sm:px-6 lg:px-8 gap-y-[30px] gap-x-[48px] lg:gap-x-[0px] grid-cols-1 md:grid-cols-1 lg:grid-cols-1 min-[1466px]:grid-cols-2 "
        style={{ flex: "1 0 0", alignSelf: "stretch" }}
      >
        {/* Left Section */}
        <div className="rounded-lg">
          <div className="flex justify-end items-center w-full bg-white">
            <div className="flex flex-wrap sm:flex-nowrap items-center pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
              <svg
                className="w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] lg:w-[90px] lg:h-[90px]"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90 45C90 69.8528 69.8528 90 45 90C20.1472 90 0 69.8528 0 45C0 20.1472 20.1472 0 45 0C69.8528 0 90 20.1472 90 45Z"
                  fill="url(#paint0_linear_7_43)"
                  fillOpacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_43"
                    x1="87.6546"
                    y1="90"
                    x2="2.34536"
                    y2="-1.93461e-06"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.302885" stopColor="#F25D90" />
                    <stop offset="1" stopColor="#F9D53D" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex items-center -ml-3 sm:-ml-4">
                {[1, 2, 3, 4, 5]
                  .reverse()
                  .map((idx, i) => (
                    <img
                      key={idx}
                      src={`/images/happyAsia${idx === 1 ? '' : idx}.jpg`}
                      alt={`User ${idx}`}
                      className={`
          rounded-full object-cover shrink-0 
          w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] lg:w-[90px] lg:h-[90px]
          ${i > 2 ? 'max-[360px]:hidden' : ''}   // hide 4th+ images on <360px
        `}
                      style={{ marginLeft: i === 0 ? "0" : "-12px", zIndex: i }}
                    />
                  ))}
              </div>


              <div className="ml-[15px] mr-[8px] text-right">
                <p className="text-[20px] sm:text-[24px] font-comfortaa font-bold leading-none bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] bg-clip-text text-transparent">{t('homeHero.anytime')}</p>
                <p className="text-[20px] sm:text-[24px] font-comfortaa font-bold leading-none bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] bg-clip-text text-transparent">{t('homeHero.anywhere')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end w-full mt-10 px-6 sm:px-6 lg:px-0 ">
            <h1 className="text-[38px] sm:text-[72px] md:text-[100px] lg:text-[112px] font-questrial font-normal leading-[1.1] text-transparent bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] bg-clip-text w-full max-w-[718px] text-right" style={{ textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)', WebkitTextStrokeWidth: '1.5px', }}>{t('homeHero.project_Based')}</h1>
            {/* <h2 className="text-[42px] sm:text-[64px] md:text-[76px] isEnglish ? lg:text-[89px] : lg:text-[59px] font-questrial font-normal leading-[1.1] text-transparent bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] bg-clip-text w-full max-w-[718px] text-right mt-2" style={{ textShadow: '0px 20px 40px rgba(0, 0, 0, 0.05)', WebkitTextStrokeWidth: '1.5px', }}>{t('homeHero.learningPlatform')}</h2> */}
            <h2
              className={`
    text-[30px] sm:text-[64px] md:text-[76px]
    ${isEnglish ? "lg:text-[89px]" : "lg:text-[59px]"}
    font-questrial font-normal leading-[1.1]
    text-transparent bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)]
    bg-clip-text w-full max-w-[718px] text-right mt-2  
  `}
              style={{
                textShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)",
                WebkitTextStrokeWidth: "1.5px",
              }}
            >
              {t("homeHero.learningPlatform")}
            </h2>

          </div>

          <div className="flex flex-col lg:flex-row items-center justify-end gap-6 w-full mt-[50px] px-0">
            <div className="flex flex-col justify-center w-full max-w-[420px] pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
              <p className="text-right font-comfortaa text-[16px] sm:text-[24px] font-bold leading-[30px] text-transparent bg-gradient-to-r from-[#004699] to-[rgba(0,70,153,0.8)] bg-clip-text">
                <span className="whitespace-nowrap">{t('homeHero.connect_globally')}</span>{' '}
                <span className="flex items-center justify-end gap-2">
                  <span className="whitespace-nowrap">{t('homeHero.achieve_goals')}</span>
                </span>
              </p>
            </div>
            
              <Button
              onClick={() => window.open(`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=learner#/`, "_blank")}
                className="
    w-[300px] h-[48px]               
    sm:w-[196px] sm:h-[67px]      
    flex justify-center items-center
    px-[48px] py-[20px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]  /* hover only from sm+ */
    text-white text-[16px] sm:text-[18px]
    font-comfortaa font-bold
    rounded-[2149.244px]
    shadow-md sm:hover:shadow-lg
    transition-transform sm:hover:scale-105
  "
              >
                <p className="text-center text-white font-comfortaa text-[16px] sm:text-[24px] font-bold leading-none">
                  {t('homeHero.sign_Up')}
                </p>
              </Button>
          </div>


          <div className="flex justify-end items-end w-full mt-[60.5px] pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
            <p className="flex flex-wrap justify-end items-center gap-1 text-right font-rocksalt font-normal capitalize leading-normal 
                text-[16px] sm:text-[20px] lg:text-[30px]">
              <span className="text-transparent bg-gradient-to-r from-[#F25D90] via-[rgba(242,93,144,0.8)] to-[#F25D90] bg-clip-text">
                {t('homeHero.love_Learning')}
              </span>
              <span className="text-transparent bg-gradient-to-br from-[#3DB0CB] to-[rgba(61,176,203,0.8)] bg-clip-text 
                     text-[16px] sm:text-[24px] lg:text-[28px]">
                {t('homeHero.for_rhythm')}
              </span>
            </p>
          </div>

        </div>


        <div className="hidden min-[1380px]:block rounded-lg px-4 sm:px-6 lg:mt-5 pb-40 w-full sm:w-[761px] sm:h-[583px]">
          <div className="grid w-full h-full mx-auto grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-8">

            {/* Left Card */}

            <div
              style={{
                background:
                  "linear-gradient(98deg, rgba(61, 176, 203, 0.25) 0.17%, rgba(255, 255, 255, 0.25) 28.44%)",
              }}
              className="relative lg:rotate-[-4.998deg] rounded-[12px] w-full max-w-[380px] max-h-[475px] sm:w-[380px] sm:h-[475px] mt-[40px] sm:mt-[62.94px] overflow-hidden"
            >
              {/* Text container under the image */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[40px] sm:mt-[65px] px-4">
                <p className="text-[#3DB0CB] font-rocksalt text-[18px] sm:text-[20px] leading-[32px] rotate-[-2deg] mb-2">
                  {t('homeHero.connect_dots_through')}
                </p>
                <p
                  className="font-questrial text-[40px] sm:text-[64px] leading-[50px] font-normal text-[#3DB0CB]"
                  style={{
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "#3DB0CB",
                  }}
                >
                  {t('homeHero.projects')}
                </p>
              </div>

              {/* Image on top */}
              <div className="absolute top-[125px] left-1/2 z-20 transform -translate-x-1/2 w-full max-w-[380.5px] hidden lg:block">
                <div
                  className="rounded-[12px] aspect-[380.5/370.74] w-full"
                  style={{
                    backgroundImage: "url('/images/discover.png')",
                    backgroundSize: "216.524% 125%",
                    backgroundPosition: "-170.359px -75.381px",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>

            </div>

            {/* Right Card */}
            <div style={{ background: "linear-gradient(98deg, rgba(128, 185, 255, 0.25) 0.17%, rgba(255, 255, 255, 0.25) 67.25%)" }}
              className="lg:rotate-[5.002deg] max-w-[380px] max-h-[475px] rounded-[12px] w-full sm:w-[380px] sm:h-[475px] mt-[40px] sm:mt-[62.94px] overflow-hidden">
              <div className="flex flex-col items-center justify-center text-center mt-[40px] sm:mt-[65px] px-4">
                <p className="text-[rgba(0,70,153,1)] font-rocksalt text-[18px] sm:text-[20px] leading-[32px] rotate-[-2deg] mb-2">
                  {t('homeHero.discover_PossiBility_With')}
                </p>
                <p
                  className="font-questrial text-[40px] sm:text-[64px] leading-[50px] text-[rgba(0,70,153,1)]"
                  style={{
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: 'rgba(0,70,153,1)',
                  }}
                >
                  {t('homeHero.mentors')}
                </p>
              </div>

              <div className="absolute top-[55px] left-1/2 z-20 transform -translate-x-1/2 hidden lg:block w-full max-w-[380.5px]">
                <div
                  className="rounded-[12px] aspect-[380.5/427.67] w-full"
                  style={{
                    backgroundImage: "url('/images/connect.png')",
                    backgroundSize: "245.684% 126.294%",
                    backgroundPosition: "-202.296px -6.735px",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>



            </div>

          </div>
        </div>



      </div>
    </section>
  );
}
