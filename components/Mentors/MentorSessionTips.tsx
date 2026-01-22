'use client'
import Link from "next/link"
import Image from 'next/image'
import { useTranslation } from "react-i18next";

export default function MentorSessionTips() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'ja'; // kept as-is from your code

  return (
    <section className="w-full flex justify-center items-center overflow-hidden px-4 pt-20 pb-4 lg:pt-48 lg:pb-36 bg-white">
      <div className="relative w-full max-w-[1500px]">
        {/* Stack on mobile + iPad (md/lg); switch to row only on desktop (xl) */}
        <div className="flex flex-col xl:flex-row justify-center md:items-center xl:items-stretch gap-5 xl:gap-6">

          {/* Card 0 */}
          <div className="bg-white p-5 sm:p-7 w-full max-w-[90%] sm:max-w-[300px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[460px] h-auto max-h-[463px] flex flex-col justify-center items-center mx-auto">
            <p className="xl:w-[217px] xl:h-[18px] self-stretch text-[#F25D90] text-center font-comfortaa text-[14px] sm:text-[16px] font-bold leading-normal">
              {t('showPurpose.showPurpose')}
            </p>

            <p
              className="
    text-[16px] sm:text-[24px] lg:text-[32px]
    leading-[28px] sm:leading-[40px] lg:leading-[56px]   // 🔹 increased
    xl:w-[217px] xl:h-[192px] self-stretch
    text-[#004699] text-center font-rocksalt font-normal mt-4 mb-2
  "
              style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
            >
              {t('showPurpose.showPurpose_Title')}
            </p>

            <p
              className="text-[16px] sm:text-[18px] lg:text-[20px] 
             xl:w-[257px] xl:h-[54px] self-stretch 
             text-[#282828] text-center font-didact font-normal leading-normal mt-6 sm:mt-10"
            >
              {t('showPurpose.showPurpose_Dis')}
            </p>
          </div>

          {/* Card 1 */}
          <div
            style={{
              background: 'linear-gradient(167deg, rgba(249, 213, 61, 0.04) 19.63%, rgba(242, 93, 144, 0.81) 92.68%)',
              boxShadow: '5px 5px 5px 0px rgba(40, 40, 40, 0.10)',
            }}
            className="
              xl:rotate-[-8deg] rounded-xl shadow-md
              p-4 sm:p-6 md:p-7
              w-full
              max-w-[270px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380.33px]
              max-h-[380px] sm:max_h-[420px] md:max-h-[463px]
              flex flex-col justify-center items-center text-center mx-auto
            "
          >
            <h3
              className="
                self-stretch text-[#F25D90] text-center font-questrial
                text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]
                font-normal leading-normal mb-3
              "
              style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#F25D90' }}
            >
              {t('showPurpose.showPurpose_Card1_Title')}
            </h3>

            <div
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`,
                  "_blank"
                )
              }
              className="
                w-[230px] sm:w-[280px] md:w-[300px]
                h-[42px] sm:h-[46px] md:h-[48px]
                bg-gradient-to-r from-[rgba(242,93,144,0.8)] to-[rgba(249,213,61,0.8)]
                rounded-full flex justify-center items-center mb-3
                sm:hover:from-[rgba(249,213,61,0.8)] sm:hover:to-[rgba(242,93,144,0.8)]
                sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
                transition-all duration-300 ease-in-out cursor-pointer
              "
            >
              <span className="text-[#FCFDFF] font-comfortaa text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-none">
                {t('showPurpose.showPurpose_Card1_Button')}
              </span>
            </div>

            <p className="
                self-stretch text-[#282828] font-didact
                text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl
                font-normal leading-snug text-start
              ">
              {t('showPurpose.showPurpose_Card1_Dis1')}
              <br />
              {t('showPurpose.showPurpose_Card1_Dis2')}
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{ background: 'linear-gradient(152deg, rgba(128, 185, 255, 0.04) 12.41%, rgba(61, 176, 203, 0.85) 91.77%)' }}
            className="
              xl:rotate-[2deg] rounded-xl shadow-md
              p-4 sm:p-6 md:p-7
              w-full
              max-w-[270px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380.33px]
              max-h-[380px] sm:max_h-[420px] md:max-h-[463px]
              flex flex-col justify-center items-center text-center mx-auto
            "
          >
            <p
              className="
                w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px]
                text-[#004699] text-center font-questrial
                text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px]
                font-normal leading-snug mb-3
              "
              style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#004699' }}
            >
              {t('showPurpose.showPurpose_Card2_Title1')}
              <br />
              {t('showPurpose.showPurpose_Card2_Title2')}
            </p>

            <p className="
                w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px]
                text-[#282828] font-didact
                text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                font-normal leading-snug text-start
              ">
              {t('showPurpose.showPurpose_Card2_Dis1')}
              <br />
              {t('showPurpose.showPurpose_Card2_Dis2')}
            </p>

            <div
              onClick={() =>
                window.open(
                  `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                  "_blank"
                )
              }
              className="
                w-[230px] sm:w-[280px] md:w-[300px]
                h-[42px] sm:h-[46px] md:h-[48px]
                flex justify-center items-center self-stretch
                px-[28px] sm:px-[34px] md:px-[38px]
                py-[10px] sm:py-[12px] md:py-[14px]
                rounded-[96px]
                cursor-pointer
                bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
                sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
                shadow-md sm:hover:shadow-lg
                transition-transform duration-300 sm:hover:scale-105
                mb-3 mt-6
              "
            >
              <span className="text-white font-comfortaa text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-none">
                {t("showPurpose.showPurpose_Card2_Button")}
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              background:
                "linear-gradient(167deg, rgba(249, 213, 61, 0.04) 19.63%, rgba(242, 93, 144, 0.81) 92.68%)",
              boxShadow: "5px 5px 5px 0px rgba(40, 40, 40, 0.10)",
            }}
            className="
              xl:rotate-[-10deg] rounded-xl shadow-md
              p-0
              w-full
              max-w-[270px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380.33px]
              max-h-[380px] sm:max_h-[420px] md:max-h-[463px]
              flex flex-col text-center mx-auto overflow-hidden
            "
          >
            {/* Top */}
            <div className="h-[65%] flex flex-col justify-center pt-6 pb-6">
              <h3
                className={`
                  w-full max-w-[300px] sm:max-w-[340px] md:max-w-[362px]
                  mx-auto text-[#F25D90] font-questrial
                  ${isEnglish ? "text-[16px] sm:text-[18px] md:text-[20px]" : "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px]"}
                  font-normal leading-snug mb-1 px-2
                `}
                style={{ WebkitTextStrokeWidth: "0.5px", WebkitTextStrokeColor: "#F25D90" }}
              >
                {t("showPurpose.showPurpose_Card3_Title")}
              </h3>

              <p className="
                  text-[#282828] font-didact
                  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
                  font-normal leading-[20px] sm:leading-[22px] md:leading-[24px]
                  text-start px-5
                ">
                {t("showPurpose.showPurpose_Card3_Dis1")}
                {t("showPurpose.showPurpose_Card3_Dis2")}
                {t("showPurpose.showPurpose_Card3_Dis3")}
                {t("showPurpose.showPurpose_Card3_Dis4")}
                {t("showPurpose.showPurpose_Card3_Dis5")}
              </p>
            </div>

            {/* Bottom image */}
            <div className="h-[35%] flex items-end justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/images/test12.png"
                  alt="MentorshipImage"
                  width={260}
                  height={276}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
