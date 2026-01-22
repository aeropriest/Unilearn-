'use client';

import UserProfile from "../icons/UserProfile";
import StartYourProject from "../icons/StartYourProject";
import GetSupportNeeded from "../icons/GetSupportNeeded";
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next";
export default function OnboardingSteps() {
  const { t } = useTranslation();

  const steps = [
    {
      number: `${t('yourUNIJourney.numberOne')}`,
      title: `${t('yourUNIJourney.numberOne_Title')}`,
      description: `${t('yourUNIJourney.numberOne_Dis')}`,
      image: <UserProfile className="w- 24 h - 24" />,
      width: "320px",
    },
    {
      number: `${t('yourUNIJourney.numberTwo')}`,
      title: `${t('yourUNIJourney.numberTwo_Title')}`,
      description: `${t('yourUNIJourney.numberTwo_Dis')}`,
      image: <StartYourProject className="w- 24 h - 24" />,
      width: "320px",
    },
    {
      number: `${t('yourUNIJourney.numberThree')}`,
      title: `${t('yourUNIJourney.numberThree_Title')}`,
      description: `${t('yourUNIJourney.numberThree_Dis')}`,
      image: <GetSupportNeeded className="w- 24 h - 24" />,
      width: "100px",
    },
  ];
  const title = t('yourUNIJourney.your_UNI_Journey_Title') // e.g. "Big Dreams? Start Here in 3 Moves."
  const parts = title.split("?")
  return (
    <section className="w-full bg-white px-4 sm:px-8 text-center mt-[100px] sm:mt-[200px]">

      <div className="text-center mb-4">
        <p className="self-stretch text-center text-[#F25D90] text-[16px] font-comfortaa font-bold leading-normal mb-3 tracking-wide">
          {t('yourUNIJourney.your_UNI_Journey')}
        </p>

        <h1
          className="
        text-[16px] sm:text-[22px] lg:text-[28px]
        text-center font-rocksalt font-normal text-[#004699]
        leading-normal mb-3
      "
          style={{
            WebkitTextStrokeWidth: "0.5px",
            WebkitTextStrokeColor: "#004699",
          }}
        >
          {/* Mobile → break into 2 lines, Desktop → inline */}
          <span className="block sm:inline">{parts[0]}?</span>{" "}
          <span className="block sm:inline">{parts[1]}</span>
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center text-[#282828] font-didact font-normal leading-normal max-w-xl mx-auto mb-10 pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
          {t('yourUNIJourney.your_UNI_Journey_Dis')}
        </p>

      </div>
      {/* Steps */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-1 max-w-7xl mx-auto items-start">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center px-1 ">

            <div className="relative mb-4 flex justify-center">
              <div
                className="absolute top-1/2 right-full hidden sm:block h-[1px]"
                style={{
                  width: `100%`,
                  background: 'linear-gradient(180deg, rgba(249, 213, 61, 0.64) 0%, rgba(249, 213, 61, 0.24) 100%)',
                }}
              />
              <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]">
                {/* SVG Circle */}
                <svg
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                >
                  <path
                    d="M81 40.5793C81 62.7102 63.0594 80.6508 40.9285 80.6508C18.7976 80.6508 0.856995 62.7102 0.856995 40.5793C0.856995 18.4484 18.7976 0.507812 40.9285 0.507812C63.0594 0.507812 81 18.4484 81 40.5793Z"
                    fill="url(#paint0_linear_7_644)"
                    fillOpacity="0.8"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7_644"
                      x1="40.9285"
                      y1="0.507812"
                      x2="40.9285"
                      y2="80.6508"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F9D53D" stopOpacity="0.8" />
                      <stop offset="1" stopColor="#F9D53D" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Centered & Styled Number */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-white font-extrabold leading-none
               text-[28px] sm:text-[40px]"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {step.number}
                </div>
              </div>

              {/* Connecting Line */}
              <div
                className="absolute top-1/2 left-full hidden sm:block h-[1px]"
                style={{
                  width: `${step.width}`,
                  background: 'linear-gradient(180deg, rgba(249, 213, 61, 0.64) 0%, rgba(249, 213, 61, 0.24) 100%)',
                }}
              />

            </div>


            <div className="mb-4" style={{
              background: 'radial-gradient(50% 50% at 50% 50%, rgba(249, 213, 61, 0.60) 0%, rgba(249, 213, 61, 0.00) 100%)',
            }}>
              {step.image}
            </div>
            <div className="relative mb-4 max-w-[372px] max-h-[189px]">
              <p
                className="self-stretch text-[24px] sm:text-[28px] lg:text-[36px] 
             leading-[22px] sm:leading-[34px] lg:leading-[40px] 
             text-center text-[#004699] font-questrial font-normal mb-2"
                style={{ WebkitTextStrokeWidth: "0.5px", WebkitTextStrokeColor: "#004699" }}
              >
                {step.title}
              </p>

              <p
                className="
                          self-stretch 
                          max-w-[280px] sm:max-w-full   /* limit width only on mobile */
                          text-[14px] sm:text-[18px] lg:text-[20px] 
                          text-[#6B6161] font-didact font-normal text-center sm:text-start md:text-start lg:text-start
                        "
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-18 flex justify-center">
        <Button
          onClick={() =>
            window.open(
              `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=learner#/`,
              "_blank"
            )
          }
          className="
    flex justify-center items-center
    w-[300px] h-[48px]              /* Mobile size */
    sm:w-[400px] sm:h-[67px]        /* Larger screens */
    px-[48px] py-[20px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]   /* hover only from sm+ */
    text-white text-[16px] sm:text-base
    rounded-[96px]
    font-comfortaa font-normal
    shadow-md sm:hover:shadow-lg
    transition-transform sm:hover:scale-105
  "
        >
          <p className="text-white text-[16px] sm:text-[24px] font-comfortaa font-bold leading-none">
            {t('yourUNIJourney.onboard_Now')}
          </p>
        </Button>


      </div>

    </section>
  );
}
