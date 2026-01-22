'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

export default function MentorInvite() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-1 md:mt-20 px-8 sm:px-6 lg:px-12 py-12 mb-[100px]">
      <div style={{
        background: 'linear-gradient(278deg, rgba(255, 255, 255, 0.10) 0.7%, rgba(61, 176, 203, 0.10) 99.3%)',
      }} className="rounded-xl p-6 sm:p-8 w-full lg:w-[650px] lg:h-[328px]">
        <p className="text-center text-[#F25D90] font-comfortaa text-[16px] font-bold leading-normal mb-0">
          {t('join_as_Mentor.join_as_Mentor')}
        </p>

        <h1
          className="text-[16px] sm:text-[22px] lg:text-[28px] text-center text-[#004699] font-rocksalt font-normal leading-[28px] sm:leading-[34px] lg:leading-[42px] mb-6 mt-4"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('join_as_Mentor.join_as_Mentor_Title_One')} <br />
          {t('join_as_Mentor.join_as_Mentor_Title_Two')}
        </h1>

        <p className="text-[14px] sm:text-[16px] lg:text-[14px] text-[#282828] text-center lg:text-start ml-0 lg:ml-6 font-didact font-normal leading-normal mb-6 max-w-full mx-auto">
          {t('join_as_Mentor.join_as_Mentor_Dis')}
        </p>
        <Button
          onClick={() =>
            window.open(
              `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_up?role=mentor#/`,
              "_blank"
            )
          }
          className="
    mb-10 flex justify-center items-center
    w-[300px] h-[48px]                     
    sm:w-[300px] md:w-[550px] lg:w-[550px] sm:h-[48px] lg:h-[48px] 
    px-[38px] py-[14px]
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    text-white font-comfortaa font-bold text-[16px] sm:text-[18px] leading-none
    transition-all duration-300 ease-in-out
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    mx-auto lg:mx-0    /* ✅ centered on mobile + tablet, normal from lg+ */
  "
        >
          {t("join_as_Mentor.join_as_Mentor_Button")}
        </Button>


        {/* Avatar Group */}
        <div
          className="
    flex items-center justify-center lg:justify-start
    space-x-[-12px]
    mt-4 lg:mt-0
    -ml-0 lg:-ml-[27px]   /* ✅ no negative margin on mobile */
  "
        >
          {["portrait-happy1", "portrait-happy2", "vertical-image", "smiling-woman", "stylish-woman-posing"].map((n) => (
            <Image
              key={n}
              src={`/images/${n}.jpg`}
              alt={`Mentor ${n}`}
              width={0}
              height={0}
              className="w-[55px] h-[55px] lg:w-[75px] lg:h-[75px] rounded-full border-2 border-white object-cover"
            />
          ))}

          <div
            className="
      w-[55px] h-[55px] lg:w-[75px] lg:h-[75px]
      bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
      rounded-full flex items-center justify-center
      text-white font-bold text-2xl border-2 border-white
      hover:scale-105 transition-transform
    "
          >
            +
          </div>
        </div>

      </div>
      <div
        className="w-full max-w-[404px] aspect-square rounded-full overflow-hidden shadow-lg self-center"
        style={{ background:"linear-gradient(180deg, rgba(255,255,255,0.80) 34.62%, rgba(61,176,203,0.80) 100%)"}}
 >
        <Image
          src="/images/join.png"
          alt="Mentor"
          width={404}
          height={404}
          className="object-cover w-full h-full"
        />
      </div>
    </section>

  );
}

