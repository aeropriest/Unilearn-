'use client';

import CircularTextImage from "./CircularTextImage";
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";
export default function MentorshipSection() {
  const { t } = useTranslation();
  const text = "DOMAINEXPERT"
  const letters = text.split("")

  return (
    <section className="bg-white py-12 px-4 text-center mx-auto lg:max-w-[1920px] lg:max-h-[1323px]">


      <p className="text-center text-[16px] sm:text-[16px] font-bold font-comfortaa text-[#F25D90] mb-3">
        {t('knowWhy.knowWhy')}
      </p>

      <p
        className="text-[16px] sm:text-[22px] lg:text-[28px] 
             text-center font-normal text-[#004699] font-rocksalt mb-3"
        style={{
          WebkitTextStrokeWidth: '0.5px',
          WebkitTextStrokeColor: '#004699',
        }}
      >
        {t('knowWhy.knowWhy_Title')}
      </p>

      <p
        className="text-[16px] sm:text-[18px] lg:text-[20px] 
             text-center text-[#282828] font-didact font-normal mt-2 max-w-[700px] mx-auto"
      >
        {t('knowWhy.knowWhy_Dis1')}
        <br />
        {t('knowWhy.knowWhy_Dis2')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1276px] mx-auto mt-16 px-2">
        {/* Expert 1 */}
        <div className="flex flex-col items-center justify-center p-4">
          <CircularTextImage imageSrc="/images/domain-expert1.png" text="DOMAINEXPERT" />
        </div>

        <div className="flex items-center justify-center px-0">
          <div className="w-full max-w-xl flex flex-col gap-0 items-center">
            {/* <div className="text-center w-[418px] h-[53px] mb-[20px]">
              <p className="text-[#004699] text-[24px] sm:text-[24px] font-700 font-comfortaa leading-normal">
                {t('knowWhy.knowWhy_Card1_Dis1')}{" "}
                <span className="text-[#282828] text-[20px] sm:text-[20px] font-normal font-didact">
                  {t('knowWhy.knowWhy_Card1_Dis2')}
                </span>
              </p>
              <p className="text-[#282828] text-[16px] sm:text-[20px] font-normal font-didact mt-1">
                {t('knowWhy.knowWhy_Card1_Dis3')}
              </p>
            </div> */}
            <div className="text-center w-full max-w-[418px] mx-auto px-4 mb-5">
              <p className="text-[#004699] text-lg md:text-2xl lg:text-[24px] font-[700] font-comfortaa leading-normal">
                {t('knowWhy.knowWhy_Card1_Dis1')}{' '}
                <span className="text-[#282828] text-base md:text-lg lg:text-[20px] font-normal font-didact">
                  {t('knowWhy.knowWhy_Card1_Dis2')}
                </span>
              </p>

              <p className="text-[#282828] text-sm md:text-base lg:text-[20px] font-normal font-didact mt-1">
                {t('knowWhy.knowWhy_Card1_Dis3')}
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <Button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                    "_blank"
                  )
                }
                className="
    w-[300px] lg:w-[418px] lg:h-[48px] sm:h-[48px]
    px-6 py-2
    flex items-center justify-center
    font-bold font-comfortaa text-white
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
              >
                <p className="text-white font-comfortaa text-[16px] font-bold leading-normal">
                  {t("knowWhy.knowWhy_Card1_Button")}
                </p>
              </Button>
            </div>
          </div>
        </div>


        {/* Expert 2 */}
        <div className="flex flex-col items-center justify-center p-4">
          <CircularTextImage imageSrc="/images/domain-expert2.png" text="PERSPECTIVECLEAR" />
        </div>

        <div className="flex items-center justify-center pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0 mt-[100px]">
          <div className="w-full max-w-xl flex flex-col gap-4">
            <div className="text-right">
              <h3
                className="text-[#004699] 
             text-[16px] sm:text-[20px] lg:text-[24px] 
             font-700 font-comfortaa 
             leading-[20px] sm:leading-normal"
              >
                {t('knowWhy.knowWhy_Card2_Dis1')}{" "}
                <span
                  className="text-[#282828] 
               text-[16px] sm:text-[18px] lg:text-[20px] 
               font-normal font-didact mt-1"
                >
                  {t('knowWhy.knowWhy_Card2_Dis2')}
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Expert 3 */}
        <div className="flex flex-col items-center justify-center p-4 mt-[100px]">
          <CircularTextImage imageSrc="/images/domain-expert3.png" text="GUIDEEXPERIENCED" />
        </div>

        <div className="flex items-center justify-center px-4 mt-[100px]">
          <div className="w-full max-w-xl flex flex-col gap-4">
            <div className="text-left">
              <h3
                className="text-[#004699] 
             text-[16px] sm:text-[20px] lg:text-[24px] 
             font-700 font-comfortaa 
             leading-[20px] sm:leading-normal"
              >
                {t('knowWhy.knowWhy_Card3_Dis1')}{" "}
                <span
                  className="text-[#282828] 
               text-[16px] sm:text-[18px] lg:text-[20px] 
               font-normal font-didact mt-1"
                >
                  {t('knowWhy.knowWhy_Card3_Dis2')}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
