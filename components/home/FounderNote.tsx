  'use client';
  import Link from "next/link";
  import Image from 'next/image';
  import { Button } from '@/components/ui/button';
  import { useTranslation } from "react-i18next";

  export default function FounderNote() {
    const { t } = useTranslation();
    return (
      <section className="relative w-full py-16 mt-[200px] mb-0 md:mb-[200px]">
        <div className="w-full px-4 mb-8 max-w-[1240px] mx-auto">
          <p className="text-center lg:text-left text-brand-pink font-comfortaa text-[16px] font-bold leading-normal">
            {t('founderNote.founderNote')}
          </p>
        </div>

        {/* Stacked by default; only row on xl+ */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-0 px-4 max-w-[1440px] mx-auto">
          <div
            className="
    relative
    w-[300px] min-h-[300px]    /* smaller on mobile */
    sm:w-full sm:min-h-[400px] /* restore for sm+ */
    lg:max-w-[400px] sm:max-w-[360px]
    h-auto rounded-[12px]
    pt-[30px] pb-[30px] px-[20px] /* tighter padding on mobile */
    shadow-[5px_5px_5px_rgba(40,40,40,0.10)]
    lg:rotate-[-10deg]
  "
            style={{
              background:
                'linear-gradient(152deg, rgba(249, 213, 61, 0.04) 12.41%, rgba(242, 93, 144, 0.85) 91.77%)',
            }}
          >
            <div className="transform rotate-1 self-stretch">
              <h3
                className="
        text-brand-blue font-rocksalt text-[18px] leading-[26px] font-normal text-center
        mt-3 sm:text-[22px] sm:leading-[32px] sm:mt-6
      "
              >
                {t('founderNote.founderNote_Card_One_Title')} <br />
                {t('founderNote.founderNote_Card_One_Title_Two')}
              </h3>
            </div>

            <p
              className="
      self-stretch text-center text-[#282828] font-didact
      text-[14px] leading-[20px] font-normal mt-4
      sm:text-[18px] sm:leading-normal sm:mt-6
    "
            >
              {t('founderNote.founderNote_Card_One_Dis')}
            </p>

            <div className="absolute bottom-[-65px] left-[-190px] z-20">
              <Image
                src="/images/zigzag.png"
                alt="Zigzag"
                width={0}
                height={0}
                className="
      hidden min-[1400px]:block
      object-cover
      h-[202px] w-[359px]
      rotate-[20deg]
    "
              />
            </div>
          </div>

          <div
            className="
    flex flex-col items-center justify-center
    w-[300px] min-h-[300px]   /* smaller on mobile */
    sm:w-full sm:min-h-[400px] /* restore at sm+ */
    lg:max-w-[400px] sm:max-w-[360px]
    pt-[30px] pb-[30px] px-[20px] /* tighter padding mobile */
    rounded-xl shadow-md
    lg:rotate-[2deg]
  "
            style={{
              background:
                'linear-gradient(152deg, rgba(128, 185, 255, 0.04) 12.41%, rgba(61, 176, 203, 0.85) 91.77%)',
            }}
          >
            <h3
              className="
      text-center font-rocksalt font-normal text-brand-blue
      text-[18px] leading-[22px] w-[240px] h-auto mt-3
      sm:text-[28px] sm:leading-[24px] sm:w-[329.71px] sm:h-[67.31px] sm:mt-6
      flex flex-col justify-center shrink-0
    "
            >
              {t('founderNote.founderNote_Card_Two_Title')}
            </h3>

            <p
              className="
      text-center text-[#282828] font-didact font-normal
      text-[14px] leading-[20px] mt-3 h-auto w-[260px]
      sm:text-[18px] sm:leading-normal sm:mt-4 sm:w-full sm:h-[67.31px]
      flex flex-col justify-center shrink-0
    "
            >
              {t('founderNote.founderNote_Card_Two_Dis')}
            </p>

            <p
              className="
      text-center text-[#004699] font-rocksalt font-normal rotate-[-2deg]
      text-[18px] leading-[24px] mt-4 mb-3
      sm:text-[24px] sm:leading-[32px] sm:mt-6 sm:mb-4
      w-full
    "
            >
              {t('founderNote.founderNote_Card_Two_Title_Two')}
            </p>

            <div className="w-full flex justify-center mt-[20px] sm:mt-[25px]">
              <Button
                onClick={() => window.open(`${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/users/sign_in`, "_blank")}
                asChild
                className="
    flex justify-center items-center
    w-[300px] h-[48px]           /* smaller button mobile */
    sm:w-[220px] lg:w-[340px] lg:h-[42px]
    px-[20px] py-[10px] sm:px-[32px] sm:py-[12px]
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    text-white text-[14px] sm:text-[16px] font-comfortaa font-semibold
    shadow-md
    transition-all duration-300 ease-in-out
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]   /* gradient flip only sm+ */
    sm:hover:brightness-105 sm:hover:scale-105 sm:hover:shadow-lg cursor-pointer
  "
              >
                <p className="text-white font-comfortaa text-[14px] sm:text-[16px] font-bold leading-none">
                    {t('founderNote.founderNote_Card_Two_Button')}
                  </p>
              </Button>
            </div>
          </div>


          <div
            className="
    relative flex items-center justify-center
    w-[300px] min-h-[300px]        /* smaller on mobile */
    sm:w-full sm:min-h-[400px]     /* restore from sm+ */
    lg:max-w-[400px] sm:max-w-[360px]
    pt-[40px] pb-[40px] px-[16px]  /* tighter padding on mobile */
    sm:pt-[112px] sm:pb-[112px] sm:px-[17px] /* restore original at sm+ */
    rounded-xl shadow-md
    lg:rotate-[-10deg]
    
  "
            style={{
              background:
                'linear-gradient(152deg, rgba(249, 213, 61, 0.04) 12.41%, rgba(242, 93, 144, 0.85) 91.77%)',
            }}
          >
            <div className="rounded-lg w-full z-10 text-center">
              <p
                className="
        text-center text-black font-didact font-normal
        text-[14px] leading-[20px]   /* smaller on mobile */
        sm:text-[16px] sm:leading-normal
        md:text-[18px]
      "
              >
                {t('founderNote.founderNote_Card_Three_Dis')}
              </p>

              <p
                className="
        text-center font-rocksalt font-normal text-brand-pink
        text-[18px] leading-[24px] mt-2  /* smaller on mobile */
        sm:text-[20px] sm:leading-[28px]
        md:text-[24px] md:leading-[32px]
        lg:text-[28px]
      "
              >
                {t('founderNote.founderNote_Card_Three_Title')}
              </p>
            </div>

            <Image
              src="/images/pen.png"
              alt="Pen"
              width={0}
              height={0}
              className="
    hidden min-[1400px]:block absolute
    h-[311px] w-[300px]
    right-[-190px] top-[100px]
    -translate-y-1/2 rotate-[10deg]
    aspect-[300/311] object-cover z-20
  "
            />
          </div>

        </div>
      </section>

    );
  }
