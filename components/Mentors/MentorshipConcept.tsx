'use client';
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import Comma from '../icons/Comma';
export default function MentorshipConcept() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'ja';
  return (
    <section className="px-6 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-28 py-16 max-w-screen-2xl mx-auto">
      <div className="mb-10 md:mb-12 text-center sm:text-left">
        <p
          className="text-[#F25D90] font-comfortaa text-[16px] sm:text-base font-bold"
          style={{ WebkitTextStrokeWidth: '0.1px', WebkitTextStrokeColor: '#F25D90' }}
        >
          {t('keyConcept.keyConcept')}
        </p>

        <h1
          className="text-[16px] sm:text-[22px] lg:text-[28px] font-rocksalt text-brand-blue mb-1 mt-5"
        >
          {t('keyConcept.keyConcept_Title')}
        </h1>

        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#282828] mt-4">
          {t('keyConcept.keyConcept_Sub_Title')}
        </p>
      </div>

      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Big left card (span 2 on md/xl) */}
        <div className="relative rounded-xl md:col-span-2 xl:col-span-2 overflow-hidden">
          {/* Decorative image: xl+ only to avoid overlap on iPad */}
          <div className="hidden xl:block absolute bottom-0 left-0 w-[420px] aspect-[424/447]">
            <Image
              src="/images/EducationSirKenRobinson.png"
              alt="Ken Robinson"
              fill
              priority
              sizes="(min-width:1280px) 420px, 0px"
              className="object-contain"
            />
          </div>

          <div
            style={{ background: 'linear-gradient(244deg, rgba(128,185,255,0.12) 0.12%, rgba(255,255,255,0.04) 99.88%)' }}
            className="relative z-10 flex items-start justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 min-h-[300px] md:min-h-[420px] xl:min-h-[480px]"
          >
            <div className="p-4 sm:p-6 md:p-8 rounded-md w-full md:max-w-2xl text-center">
              <div className="flex items-center justify-center mb-6 md:mb-10 mt-6 md:mt-10">
                <Comma />
              </div>
              <p className="text-sm sm:text-base text-gray-800 font-didact lg:text-[20px] leading-relaxed">
                {t('keyConcept.keyConcept_Card1_Title1')}{' '}
                <span className="text-brand-blue font-didact text-xl md:text-2xl font-[400]">
                  {t('keyConcept.keyConcept_Card1_Title2')}
                </span>. <br />
                {t('keyConcept.keyConcept_Card1_Title3')}{' '}
                <span className="text-brand-blue font-didact text-xl md:text-2xl font-[400]">
                  {t('keyConcept.keyConcept_Card1_Title4')}
                </span><br />
                {t('keyConcept.keyConcept_Card1_Title5')}{' '}
                <span className="text-brand-blue font-didact text-xl md:text-2xl font-[400]">
                  {t('keyConcept.keyConcept_Card1_Title6')}
                </span><br />
                {t('keyConcept.keyConcept_Card1_Title7')}{' '}
                <span className="text-brand-blue font-didact text-xl md:text-2xl font-[400]">
                  {t('keyConcept.keyConcept_Card1_Title8')}
                </span>.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-5 text-[#282828] text-center font-bold font-comfortaa mt-4">
                {t('keyConcept.keyConcept_Card1_Title9')}
              </p>
            </div>
          </div>
        </div>

        {/* Right small card */}
        <div
          style={{ background: 'linear-gradient(215deg, rgba(61,176,203,0.05) 38.28%, rgba(255,255,255,0.05) 61.72%)' }}
          className="rounded-xl p-4 sm:p-5 md:p-6 flex flex-col gap-4 w-full"
        >
          <p
            style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#3DB0CB' }}
            className={`font-questrial text-brand-skyBlue text-start mt-4 md:mt-8 font-[400] ${isEnglish ? 'text-2xl' : 'text-[29px]'
              }`}
          >
            {t('keyConcept.keyConcept_Card2_Title')}
          </p>

          <p className="text-lg text-brand-blue text-start font-didact leading-6">
            {t('keyConcept.keyConcept_Card2_Sub_Title')}
          </p>

          <div className="flex items-center justify-end">
            <div className="bg-[rgba(61,176,200,0.6)] rounded-xl font-comfortaa font-normal text-sm text-white w-fit p-4 ml-auto shadow">
              {t('keyConcept.keyConcept_Card2_Dis1')}<br />
              {t('keyConcept.keyConcept_Card2_Dis2')} <br />
              {t('keyConcept.keyConcept_Card2_Dis3')} <br />
              {t('keyConcept.keyConcept_Card2_Dis4')}
              <div className="mt-2 hidden xl:block">
                <Image
                  src="/images/web-project-thumbnail.png"
                  alt="Web Design 101"
                  width={220}
                  height={120}
                  sizes="220px"
                  className="rounded-[12px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-white w-fit px-4 py-2 text-sm text-[#282828] rounded-[12px] shadow font-comfortaa">
              {t('keyConcept.keyConcept_Card2_Message1')} <br /> {t('keyConcept.keyConcept_Card2_Message2')}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
        {/* Card 3 */}
        <div
          className="rounded-xl p-4 sm:p-5 md:p-6 relative w-full"
          style={{ background: 'linear-gradient(215deg, rgba(242,93,144,0.05) 38.28%, rgba(255,255,255,0.05) 61.72%)' }}
        >
          <p
            style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#3DB0CB' }}
            className="text-[26px] md:text-[30px] font-questrial text-brand-skyBlue text-start mt-6 md:mt-10 font-[400]"
          >
            {t('keyConcept.keyConcept_Card3_Title')}
          </p>

          <p className="text-lg md:text-[20px] text-brand-blue text-start font-didact mt-3 mb-3">
            {t('keyConcept.keyConcept_Card3_Sub_Title')}
          </p>

          <div className="flex flex-col items-end">
            <div className="bg-[rgba(242,93,144,0.8)] w-full max-w-[260px] px-4 py-2 text-sm font-medium text-right text-white rounded-[12px] shadow font-comfortaa">
              {t('keyConcept.keyConcept_Card3_Message1')} <br /> {t('keyConcept.keyConcept_Card3_Message2')} <br /> {t('keyConcept.keyConcept_Card3_Message3')}
            </div>
          </div>

          <div className="mt-3">
            <div
              className={`bg-[rgba(255,255,255,0.80)] w-full max-w-[300px] px-4 py-3 font-medium font-comfortaa text-sm text-[#282828] rounded-[12px] shadow ${isEnglish ? 'min-h-[165px]' : 'min-h-[115px]'
                }`}
            >
              {t('keyConcept.keyConcept_Card3_Message4')}<br /> {t('keyConcept.keyConcept_Card3_Message5')} <br /> {t('keyConcept.keyConcept_Card3_Message6')} <br /> {t('keyConcept.keyConcept_Card3_Message7')} <br /> {t('keyConcept.keyConcept_Card3_Message8')}
            </div>
          </div>

          <Image
            src="/images/more-than-tutoring.png"
            alt="Mentor"
            width={500}
            height={300}
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="absolute bottom-0 right-0 hidden xl:block"
          />
        </div>

        {/* Card 4 */}
        <div
          style={{ background: 'linear-gradient(215deg, rgba(249,213,61,0.05) 38.28%, rgba(255,255,255,0.05) 61.72%)' }}
          className="rounded-xl p-4 sm:p-5 md:p-6 relative w-full"
        >
          <p
            className="text-[26px] md:text-[30px] font-normal font-questrial text-[#3DB0CB] mt-6 md:mt-10"
            style={{ WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#3DB0CB' }}
          >
            {t('keyConcept.keyConcept_Card4_Title1')} <br /> {t('keyConcept.keyConcept_Card4_Title2')}
          </p>

          <div className="mt-3">
            <div className="w-full max-w-[300px] px-4 pt-3 pb-2 text-sm font-medium text-[#282828] rounded-[12px] shadow font-comfortaa">
              {t('keyConcept.keyConcept_Card4_Message1')}<br />
              {t('keyConcept.keyConcept_Card4_Message2')} <br />
              {t('keyConcept.keyConcept_Card4_Message3')} <br />
              {t('keyConcept.keyConcept_Card4_Message4')}
            </div>
          </div>

          <div className="flex flex-col items-end mt-2">
            <div className="w-full max-w-[260px] bg-[rgba(249,213,61,0.8)] px-4 py-2 text-sm font-medium text-right text-[#282828] rounded-[12px] shadow font-comfortaa">
              {t('keyConcept.keyConcept_Card4_Message5')}<br /> {t('keyConcept.keyConcept_Card4_Message6')}
            </div>
          </div>

          <p className="text-base md:text-[20px] leading-5 font-normal font-didact text-[#004699] mt-4">
            {t('keyConcept.keyConcept_Card4_Message7')} <br />
            <span className="font-didact">{t('keyConcept.keyConcept_Card4_Message8')}</span>
            {t('keyConcept.keyConcept_Card4_Message9')}
          </p>

          <Image
            src="/images/support-group.png"
            alt="Supportive Group"
            width={500}
            height={300}
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="absolute bottom-0 right-0 hidden xl:block"
          />
        </div>

        {/* Card 5 */}
        <div className="p-2 sm:p-3 md:p-4 flex flex-col justify-between w-full mt-2 md:mt-4">
          <p className="text-base md:text-[20px] leading-5 font-normal font-didact text-[#004699] pl-3">
            {t('keyConcept.keyConcept_Card4_Message10')}
            <br />
            <span className="underline">{t('keyConcept.keyConcept_Card4_Message11')}</span>
          </p>
          <Image
            src="/images/mentee-group.png"
            alt="Mentees"
            width={500}
            height={300}
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="self-center hidden xl:block"
          />
        </div>
      </div>
    </section>

  );
}
