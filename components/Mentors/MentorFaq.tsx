'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";

export default function MentorFaq() {
  const { t } = useTranslation();
  
  const faqData = {
    learners: [
      {
        question: `${t('mentorFaq.Q1')}`,
        answer: `${t('mentorFaq.Ans1')}`,
      },
      {
        question: `${t('mentorFaq.Q2')}`,
        answer: `${t('mentorFaq.Ans2')}`,
      },
      {
        question: `${t('mentorFaq.Q3')}`,
        answer: `${t('mentorFaq.Ans3')}`,
      },
      {
        question: `${t('mentorFaq.Q4')}`,
        answer: `${t('mentorFaq.Ans4')}`,
      },
      {
        question: `${t('mentorFaq.Q5')}`,
        answer: `${t('mentorFaq.Ans5')}`,
      },
    ]
  };

  type TabType = 'learners';

  interface FaqItem {
    question: string;
    answer: string;
  }
  const [activeTab, setActiveTab] = useState<TabType>('learners');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = faqData[activeTab];

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-white px-2 py-16 text-center lg:mt-[200px]">
      {/* Title */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#F25D90] text-center font-comfortaa text-[24px] font-bold leading-[24px] tracking-wide">
          {t('mentorFaq.FAQs')}
        </p>

        <h1
          className="text-[16px] sm:text-[28px] lg:text-[42px] 
             leading-[22px] sm:leading-[32px] lg:leading-[42px] 
             self-stretch text-center font-normal text-brand-blue font-rocksalt 
             mb-6 mt-[15px]"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('mentorFaq.got_Mentor_Questions')}
        </h1>
      </div>



      <div className="mt-8 w-full max-w-2xl mx-auto space-y-3 flex flex-col items-center justify-center px-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-[12px] w-full lg:w-[920px] text-left min-h-[68px] px-4 py-3 cursor-pointer transition-shadow shadow hover:shadow-md bg-[linear-gradient(270deg,rgba(255,255,255,0.05)_46.64%,rgba(61,176,203,0.05)_99.97%)]"
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between px-2 sm:px-6">
              <span className="text-brand-blue text-base sm:text-xl lg:text-[24px] font-questrial font-normal text-center leading-[32px] sm:leading-[48px]">
                {faq.question}
              </span>

              <div
                className={`transition-transform duration-200 ${activeIndex === i ? 'rotate-180' : ''}`}
              >
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_880)">
                    <rect width="30" height="30" transform="translate(0 0.507812)" fill="white" />
                    <path d="M25.6066 4.90123C22.7936 2.08817 18.9783 0.507813 15 0.507812C11.0217 0.507813 7.20641 2.08817 4.39335 4.90123C1.5803 7.71428 -6.10352e-05 11.5296 -6.10352e-05 15.5079C-6.10352e-05 19.4861 1.5803 23.3015 4.39335 26.1145C7.20641 28.9276 11.0217 30.5079 15 30.5079C18.9783 30.5079 22.7936 28.9276 25.6066 26.1145C28.4197 23.3015 30 19.4861 30 15.5079C30 11.5296 28.4197 7.71428 25.6066 4.90123ZM15 28.6329C7.76285 28.6329 1.87499 22.745 1.87499 15.5079C1.87499 8.27072 7.76285 2.38287 15 2.38287C22.2371 2.38287 28.125 8.27072 28.125 15.5079C28.125 22.745 22.2371 28.6329 15 28.6329ZM21.5996 12.4626C21.7755 12.6384 21.8742 12.8768 21.8742 13.1255C21.8742 13.3741 21.7755 13.6126 21.5996 13.7884L15.6629 19.7251C15.4871 19.9009 15.2486 19.9996 15 19.9996C14.7514 19.9996 14.5129 19.9009 14.3371 19.7251L8.40041 13.7884C8.22635 13.6122 8.12908 13.3743 8.12983 13.1267C8.13059 12.879 8.2293 12.6417 8.40442 12.4666C8.57954 12.2915 8.81683 12.1928 9.06449 12.192C9.31214 12.1913 9.55003 12.2885 9.72621 12.4626L15 17.7364L20.2738 12.4626C20.4497 12.2868 20.6881 12.188 20.9367 12.188C21.1854 12.188 21.4238 12.2868 21.5996 12.4626Z" fill="#3DB0CB" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_880">
                      <rect width="30" height="30" fill="white" transform="translate(0 0.507812)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            {activeIndex === i && (
              <div className="mt-3 text-gray-700 text-[16px] lg:text-[18px] sm:text-base font-normal font-didact px-2 sm:px-6">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>



      <div className="flex items-center justify-center w-full mt-[50px] px-4 mb-[100px]">
   
        <Button
          onClick={() => window.open(`${process.env.NEXT_PUBLIC_MENTOR_HELP_URL}`, "_blank")}
          className="
    flex justify-center items-center
    w-[300px] h-[48px]                      /* Mobile size */
    sm:w-[200px] md:w-[490px] lg:w-[920px] sm:h-[72px] /* Larger screens */
    px-[48px] py-[20px]
    text-white text-[16px] sm:text-base font-comfortaa font-bold
    rounded-[96px]
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]   /* hover only sm+ */
    shadow-md sm:hover:shadow-lg
    transition-transform sm:hover:scale-105
  "
        >
          <p className="text-white text-center font-comfortaa text-[16px] sm:text-[24px] font-bold leading-[24px]">
            {t('mentorFaq.go_Help_Center')}
          </p>
        </Button>
      </div>


    </section>
  );
}
