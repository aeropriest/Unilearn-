'use client';

import Link from "next/link"
import ApplicationStepsIcon from "@/components/icons/ApplicationStepsIcon";
import HeroIllustration from "@/components/icons/HeroIllustration";
import EmojiSunIcon from "@/components/icons/EmojiSunIcon";
import SunFaceIcon from "@/components/icons/SunFaceIcon";
import SunIcon from "@/components/icons/SunIcon";
import { useTranslation } from "react-i18next";
export function MentorInfoSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="space-y-12 mt-[50px]">
      <section className="lg:max-h-[251px]">
        <p className="self-stretch text-[#F25D90] font-comfortaa text-[16px] font-bold leading-none">
          {t('idea_Candidates.idea_Candidates')}
        </p>


        <h2
          className="lg:w-[403px] lg:h-[67px] flex lg:items-center lg:justify-center lg:text-[28px] font-normal leading-none text-[#004699] font-rocksalt text-center"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('idea_Candidates.idea_Candidates_Title')}
        </h2>



        <div className="flex flex-col gap-10 md:flex-row md:gap-8 ">
          <article className="text-start flex-1">
            <div className="mb-3">
              <SunIcon className="w-10 h-10" />
            </div>
            <h3
              className="self-stretch text-[28px] font-normal leading-none text-[#3DB0CB] font-questrial mb-1"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#3DB0CB',
              }}
            >
              {t('idea_Candidates.idea_Candidates_Sub_Title_One')}
            </h3>

            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('idea_Candidates.idea_Candidates_Sub_Dis_One')}
            </p>

          </article>

          <article className="text-start flex-1">
            <div className="mb-3">
              <SunFaceIcon className="w-10 h-10" />
            </div>
            <h3
              className="self-stretch text-[28px] font-normal leading-none text-[#3DB0CB] font-questrial mb-1"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#3DB0CB',
              }}
            >
              {t('idea_Candidates.idea_Candidates_Sub_Title_Two')}
            </h3>
            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('idea_Candidates.idea_Candidates_Sub_Dis_Two')}
            </p>
          </article>

          <article className="text-start flex-1">
            <div className="mb-3">
              <EmojiSunIcon className="w-10 h-10" />
            </div>
            <h3
              className="self-stretch text-[28px] font-normal leading-none text-[#3DB0CB] font-questrial mb-1"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#3DB0CB',
              }}
            >
              {t('idea_Candidates.idea_Candidates_Sub_Title_Three')}
            </h3>
            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('idea_Candidates.idea_Candidates_Sub_Dis_Three')}
            </p>
          </article>
        </div>
      </section>
      <section className="lg:max-h-[246px]">
        <p className="self-stretch text-[#F25D90] font-comfortaa text-[16px] font-bold leading-none">{t('application_Process.application_Process')}</p>
        <h2
          className="lg:w-[375px] lg:h-[67px] flex lg:items-center lg:justify-center lg:text-[28px] font-normal leading-none text-[#004699] font-rocksalt text-center"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('application_Process.application_Process_Title')}

        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <article className="flex-1">
            <div className="flex items-center gap-0 mb-2">
              <div
                className="text-[42px] font-extrabold leading-[40px] font-plusJakarta bg-gradient-to-br from-[#3DB0CB0A] to-[#3DB0CB7A] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(313deg, rgba(61, 176, 203, 0.03) 0.87%, rgba(61, 176, 203, 0.48) 99.13%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_One_Number')}
              </div>

              <h3
                className="text-[24px] font-normal leading-[24px] text-[#3DB0CB] font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#3DB0CB',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_One')}
              </h3>

            </div>
            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('application_Process.application_Process_Sub_Dis_One')}
            </p>
          </article>
          <article className="flex-1">
            <div className="flex items-center gap-0 mb-2">
              <div
                className="text-[42px] font-extrabold leading-[40px] font-plusJakarta bg-gradient-to-br from-[#3DB0CB0A] to-[#3DB0CB7A] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(313deg, rgba(61, 176, 203, 0.03) 0.87%, rgba(61, 176, 203, 0.48) 99.13%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_Two_Number')}
              </div>
              <h3
                className="text-[24px] font-normal leading-[24px] text-[#3DB0CB] font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#3DB0CB',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_Two')}
              </h3>
            </div>
            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('application_Process.application_Process_Sub_Dis_Two')}
            </p>
          </article>
          <article className="flex-1">
            <div className="flex items-center gap-0 mb-2">
              <div
                className="text-[42px] font-extrabold leading-[40px] font-plusJakarta bg-gradient-to-br from-[#3DB0CB0A] to-[#3DB0CB7A] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(313deg, rgba(61, 176, 203, 0.03) 0.87%, rgba(61, 176, 203, 0.48) 99.13%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_Three_Number')}
              </div>
              <h3
                className="text-[24px] font-normal leading-[24px] text-[#3DB0CB] font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#3DB0CB',
                }}
              >
                {t('application_Process.application_Process_Sub_Title_Three')}<br />
                {t('application_Process.application_Process_Sub_Title_Three_Second')}
              </h3>
            </div>
            <p
              className="self-stretch text-[20px] font-normal leading-none text-[#282828] font-didact"
            >
              {t('application_Process.application_Process_Sub_Dis_Three')}
            </p>
          </article>
        </div>
      </section>
      <section className="py-1 max-w-7xl lg:max-h-[396px] mx-auto">
        <p className="self-stretch text-[#F25D90] font-comfortaa text-[16px] font-bold leading-none">{t('earn_Grow.earn_Grow')}</p>

        <h2
          className="lg:w-[369px] lg:h-[67px] flex lg:items-center lg:justify-center lg:text-[28px] font-normal leading-none text-[#004699] font-rocksalt text-center"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('earn_Grow.earn_Grow_Title')}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative w-full max-w-[413px] mx-auto h-[306px] flex flex-col justify-end items-center overflow-hidden">
            <div className="absolute top-7 z-10 flex justify-center w-full rotate-[13deg]">
              <div style={{ background:"radial-gradient(50% 50% at 50% 50%, rgba(61, 176, 203, 0.15) 0%, rgba(61, 176, 203, 0.00) 100%)"}} className="w-[200px] h-[200px] rotate-[-15deg] flex justify-center items-center rounded-full">

                <ApplicationStepsIcon />
              </div>
            </div>
            <div className="w-full mt-12 px-4 py-5 bg-gradient-to-l from-teal-400/5 to-blue-300/30 rounded-tl-[96px] rounded-tr-xl rounded-bl-xl rounded-br-xl flex flex-col items-center gap-2.5">
              <h2
                className="self-stretch text-[28px] font-normal leading-none text-center text-[#3DB0CB] font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#3DB0CB',
                }}
              >
                {t('earn_Grow.earn_Grow_Sub_Title_One')}
              </h2>

              <p className="text-right text-xl text-gray-700 font-didact">
                {t('earn_Grow.earn_Grow_Sub_Dis_One')}
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-[413px] mx-auto h-[306px] flex flex-col justify-end items-center overflow-hidden">
            <div className="absolute top-2 z-10 flex justify-center w-full">
              <div style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(61, 176, 203, 0.15) 0%, rgba(61, 176, 203, 0.00) 100%)" }} className="flex justify-center items-center rounded-full">
                <HeroIllustration />
              </div>
            </div>
            <div className="w-full mt-12 px-4 py-5 bg-gradient-to-l from-teal-400/5 to-blue-300/30 rounded-tl-[96px] rounded-tr-xl rounded-bl-xl rounded-br-xl flex flex-col items-center gap-2.5">
              <h2
                className={`self-stretch ${isEnglish ? 'text-[28px]' : 'text-[24px]'} font-normal leading-none text-center text-[#3DB0CB] font-questrial`}
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                  WebkitTextStrokeColor: '#3DB0CB',
                }}
              > {t('earn_Grow.earn_Grow_Sub_Title_Two')}</h2>
              <p className="text-right text-xl text-gray-700 font-didact">
                {t('earn_Grow.earn_Grow_Sub_Dis_Two')}
              </p>
            </div>
          </div>

        </div>
        <div className="mt-10 flex flex-wrap items-center gap-2 text-sm text-gray-600 font-questrial">
          <span role="img" aria-label="Light bulb">💡</span>
          <span className="text-[#282828] font-didact text-[20px] font-normal leading-none">{t('earn_Grow.earn_Grow_Details')}</span>
          <Link
            href={process.env.NEXT_PUBLIC_MENTOR_HELP_URL || "#"}
            className="text-[#004699] font-comfortaa text-[20px] font-bold leading-none"
          >
            {t('earn_Grow.earn_Grow_Help_Center')}
          </Link>
        </div>
      </section>
    </div>
  )
}
