'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";


export default function FaqSection() {
  const { t } = useTranslation();

  const faqData = {
    learners: [
      {
        question: `${t('homeFAQ.learners_question_One')}`,
        answer: `${t('homeFAQ.learners_answer_One')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Two')}`,
        answer: `${t('homeFAQ.learners_answer_Two')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Three')}`,
        answer: `${t('homeFAQ.learners_answer_Three')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Four')}`,
        answer: `${t('homeFAQ.learners_answer_Four')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Five')}`,
        answer: `${t('homeFAQ.learners_answer_Five')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Six')}`,
        answer: `${t('homeFAQ.learners_answer_Six')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Seven')}`,
        answer: `${t('homeFAQ.learners_answer_Seven')}`,
      },
      {
        question: `${t('homeFAQ.learners_question_Eight')}`,
        answer: `${t('homeFAQ.learners_answer_Eight')}`,
      },
    ],
    mentors: [
      {
        question: `${t('homeFAQ.mentors_question_One')}`,
        answer: `${t('homeFAQ.mentors_answer_One')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Two')}`,
        answer: `${t('homeFAQ.mentors_answer_Two')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Three')}`,
        answer: `${t('homeFAQ.mentors_answer_Three')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Four')}`,
        answer: `${t('homeFAQ.mentors_answer_Four')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Five')}`,
        answer: `${t('homeFAQ.mentors_answer_Five')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Six')}`,
        answer: `${t('homeFAQ.mentors_answer_Six')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Seven')}`,
        answer: `${t('homeFAQ.mentors_answer_Seven')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Eight')}`,
        answer: `${t('homeFAQ.mentors_answer_Eight')}`,
      },
      {
        question: `${t('homeFAQ.mentors_question_Nine')}`,
        answer: `${t('homeFAQ.mentors_answer_Nine')}`,
      },
    ],
  };
  type TabType = 'learners' | 'mentors';

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
    <section className="w-full px-4 py-16 text-center mt-[100px] max-w-[1920px] max-h-[2552px] mx-auto">
      {/* Title */}
      <div className="mb-12">
        <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-brand-pink font-comfortaa font-bold text-center mb-4 tracking-wide w-full">
          {t('homeFAQ.FAQs')}
        </p>

        <h1
          className="text-[16px] sm:text-[22px] lg:text-[28px] text-center text-brand-blue font-rocksalt font-normal mb-6 max-h-[85px]"
          style={{
            WebkitTextStrokeWidth: '0.5px',
            WebkitTextStrokeColor: '#004699',
          }}
        >
          {t('homeFAQ.frequently_Asked_Questions')}
        </h1>
      </div>

      <div className="mt-6 flex justify-center rounded-full">
        <div className="inline-flex rounded-full bg-gradient-to-r from-[#B8D6FF] to-[#A6E3EE] p-[1px]">
          <div className="flex gap-1 rounded-full bg-white px-1 py-1 lg:w-[400px] lg:h-[52]">
            {['learners', 'mentors'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <Button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab as TabType);
                    setActiveIndex(null);
                  }}
                  className={`lg:w-[197px] lg:h-[46px] md:w-[197px] md:h-[46px] sm:w-[137px] sm:h-[46px] px-4 py-2 text-[16px] font-bold font-comfortaa text-white bg-blue-500 rounded-full
              ${isActive
                      ? 'text-white bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]'
                      : 'text-brand-skyBlue bg-transparent'
                    }`}
                >
                  {tab === 'learners' ? `${t('homeFAQ.learners')}` : `${t('homeFAQ.mentors')}`}
                </Button>
              );
            })}
          </div>
        </div>
      </div>



      <div className="mt-8 w-full max-w-[92 0px] mx-auto space-y-3 flex flex-col items-center justify-center px-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-[12px] w-full lg:w-[920px] text-left min-h-[68px] px-4 py-3 cursor-pointer transition-shadow shadow hover:shadow-md bg-[linear-gradient(270deg,rgba(255,255,255,0.05)_46.64%,rgba(61,176,203,0.05)_99.97%)]"
            onClick={() => toggle(i)}
          >
            <div className="flex items-center justify-between">
              
              <span className="text-brand-blue text-base sm:text-xl lg:text-[24px] font-questrial font-normal text-center leading-[32px] sm:leading-[48px]">
                {faq.question}
              </span>

              <div
                className={`transition-transform duration-200 ${activeIndex === i ? 'rotate-180' : ''
                  }`}
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
              <div className="mt-3 text-gray-700 text-[16px] lg:text-[18px] font-normal font-didact">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full mt-[50px] px-4 mb-[100px]">
        <Button
          onClick={() =>
            window.open(
              activeTab === "learners"
                ? process.env.NEXT_PUBLIC_LEARNER_HELP_URL
                : process.env.NEXT_PUBLIC_MENTOR_HELP_URL,
              "_blank"
            )
          }
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
            {t('homeFAQ.go_Help_Center')}
          </p>
        </Button>
      </div>
    </section>
  );
}
