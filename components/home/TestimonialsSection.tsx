'use client';

import Image from "next/image";
import React from "react";
import QuoteBubbleIcon from "../icons/QuoteBubbleIcon";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const testimonials = [
    {
      quote: `${t('testimonials.first_Quote')}`,
      content: `${t('testimonials.first_Content')}`,
      name: `${t('testimonials.first_Name')}`,
      title: `${t('testimonials.first_Title')}`,
      avatar: "/images/avt1.jpg",
      bg: "bg-yellow-50",
      icons: true,
    },
    {
      quote: `${t('testimonials.second_Quote')}`,
      content: `${t('testimonials.second_Content')}`,
      name: `${t('testimonials.second_Name')}`,
      title: `${t('testimonials.second_Title')}`,
      avatar: "/images/portrait-happy21.jpg",
      bg: "bg-testimonial-gradient",
    },
    {
      quote: `${t('testimonials.third_Quote')}`,
      content: `${t('testimonials.third_Content')}`,
      name: `${t('testimonials.third_Name')}`,
      title: `${t('testimonials.third_Title')}`,
      avatar: "/images/happy-black-student-guy.jpg",
      bg: "bg-testimonial-gradient",
    },
  ];

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-40 max-w-[1920px] mx-auto mt-[0px] sm:mt-[150px] md:mt-[250px] xl:mt-[200px]">

      <div className="flex flex-col items-center justify-center text-center py-12 px-4 mb-[90px]">
        <p className="self-stretch text-center text-pink-500 font-comfortaa text-[16px] font-bold leading-normal mb-6">
          {t('testimonials.testimonials')}
        </p>

        <div className="flex flex-col gap-[20px] w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4">
            <div
              className="max-w-[348px] max-h-[100px] md:w-[240px] aspect-[348.34/100] rounded-[96px] overflow-hidden flex-1 bg-white"
              style={{
                backgroundImage: "url('/images/WeImagined.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span
              className="text-[22px] sm:text-[32px] md:text-[48px] lg:text-[64px] 
             text-center font-questrial font-normal text-transparent"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#004699',
                color: '#004699',
              }}
            >
              {t('testimonials.imagined')}
            </span>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:gap-4">
            <span
              className="text-[22px] sm:text-[32px] md:text-[48px] lg:text-[64px] 
             leading-[22px] sm:leading-[40px] md:leading-[56px] lg:leading-[74px] 
             text-center font-questrial font-normal text-brand-blue"
              style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#004699',
              }}
            >
              {t('testimonials.created')}
            </span>

            <div
              className="max-w-[348px] max-h-[100px] md:w-[240px] aspect-[348.34/100] rounded-[96px] overflow-hidden flex-1 bg-white"
              style={{
                backgroundImage: "url('/images/Wecreated.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div
              className="max-w-[348px] max-h-[100px] md:w-[240px] aspect-[348.34/100] rounded-[96px] overflow-hidden flex-1 bg-white"
              style={{
                backgroundImage: "url('/images/Webecame.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span
              className="text-[16px] sm:text-[32px] md:text-[48px] lg:text-[64px] 
             leading-[22px] sm:leading-[40px] md:leading-[52px] lg:leading-[64px] 
             font-normal font-rocksalt text-center text-brand-blue"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#004699',
              }}
            >
              {t('testimonials.we')}
            </span>
            <span
              className="text-[16px] sm:text-[16px] md:text-[48px] lg:text-[64px] 
             leading-[26px] sm:leading-[46px] md:leading-[70px] lg:leading-[100px] 
             font-normal font-rocksalt text-center text-[#F25D90]"
              style={{
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: '#F25D90',
              }}
            >
              {t('testimonials.became')}
            </span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col min-[1497px]:flex-row gap-20 min-[1497px]:max-w-[1620px] mx-auto px-4 sm:px-6">
        {/* First Section (Main Testimonial) */}
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(61, 176, 203, 0.30) 0.08%, rgba(61, 176, 203, 0.10) 32.24%, rgba(61, 176, 203, 0.01) 99.92%)",
          }}
          className="w-full min-[1497px]:ml-7 min-[1497px]:w-1/3 h-auto p-4 sm:p-6 min-[1497px]:p-[50px] flex flex-col rounded-[5px] shadow-md from-white"
        >
          <div className="flex items-center gap-4 p-4 sm:p-6 xl:p-[50px] relative">
            <Image
              src="/images/stars.png"
              alt=""
              width={0}
              height={0}
              className="xl:absolute xl:z-20 xl:-top-12 xl:-left-20 w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] xl:w-[283px] xl:h-[283px]"
            />
            <svg
              className="xl:absolute xl:top-36 xl:left-40 xl:z-20"
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.1092 40.8986C64.0302 40.6912 59.4562 40.6912 59.4562 37.7801C59.4562 33.8308 65.2771 28.6333 74.6326 23.0197C77.5424 21.1481 83.5733 18.2383 83.5733 14.2877C83.5733 11.1692 81.2857 8.88278 76.5042 9.50621C71.9302 10.1297 64.861 13.2482 55.5068 21.1481C45.7353 29.2567 36.5885 42.7702 36.5885 56.075C36.5885 69.5885 45.7353 83.102 60.497 83.102C72.3462 83.102 82.5338 74.1626 82.5338 61.896C82.5325 52.5405 76.0882 41.7307 66.1092 40.8986Z"
                fill="#3DB0CB"
                fillOpacity="0.5"
              />
              <path
                d="M36.8838 35.0529C35.1762 34.1604 33.3033 33.5764 31.282 33.4084C29.203 33.201 24.629 33.201 24.629 30.2899C24.629 26.3405 30.4499 21.143 39.8054 15.5295C42.7165 13.6579 48.7449 10.748 48.7449 6.79742C48.7449 3.67892 46.4572 1.39254 41.6757 2.01598C37.1017 2.63942 30.0325 5.75792 20.6784 13.6579C10.9081 21.7665 1.75998 35.28 1.75998 48.5861C1.75998 62.0996 10.9068 75.6131 25.6685 75.6131C29.1387 75.6131 32.4646 74.8413 35.4348 73.4488C32.5224 68.183 30.9697 62.0904 30.9697 56.0765C30.971 48.6504 33.3624 41.4487 36.8838 35.0529Z"
                fill="#3DB0CB"
                fillOpacity="0.5"
              />
            </svg>
          </div>

          <div className="w-full px-1 pt-6 sm:pt-7 flex flex-col text-start xl:mt-20">
            <p className="flex h-[84px] flex-col justify-center self-stretch text-[20px] sm:text-[24px] xl:text-[28px] text-[#3DB0CB] [text-shadow:0_0_0_#3DB0CB] font-questrial font-normal leading-none mt-16 sm:mt-10 mb-2">
              {testimonials[0].quote}
            </p>
            <p className="text-[#282828] font-didact text-[14px] sm:text-[16px] xl:text-[18px] leading-relaxed mt-4 sm:mt-6 mb-4">
              {testimonials[0].content}
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                width={0}
                height={0}
                className="rounded-full w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] xl:w-[65px] xl:h-[65px]"
              />
              <div>
                <p className="text-[#282828] font-comfortaa font-bold text-[16px] sm:text-[18px] xl:text-[20px] leading-[24px] sm:leading-[26px]">
                  {testimonials[0].name}
                </p>
                <p className="text-[#5C5C5C] font-didact text-[14px] sm:text-[16px] xl:text-[18px] leading-[18px] sm:leading-[20px] text-center sm:text-left">
                  {testimonials[0].title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section (Heading + Image) */}
        <div className="w-full min-[1497px]:w-1/3 flex flex-col items-center text-center pt-4 sm:pt-6 min-[1497px]:pt-8">
          <p className="w-[90%] sm:w-[423.33px] text-center text-[#004699] [text-shadow:0_0_0_#004699] font-questrial text-[20px] sm:text-[30px] xl:text-[35px] font-normal leading-[30px] sm:leading-[44px] xl:leading-[50px]">
            {t('testimonials.projects_Learning')}
          </p>

          <p className={`mt-6 sm:mt-8 text-[#3DB0CB] font-rocksalt text-[30px] sm:text-[50px] ${isEnglish ? 'xl:text-[60px]' : 'xl:text-[40px]'} leading-[36px] sm:leading-[45px] xl:leading-[50px] text-stroke-moonstone`}>
            {t('testimonials.meaning_Ful')}
          </p>
          <Image
            src="/images/meaningful.png"
            alt="Student"
            width={0}
            height={0}
            className="w-[90%] sm:w-[400px] xl:w-[500px] h-[350px] sm:h-[450px] xl:h-[550px] mt-auto object-cover"
          />
        </div>

        {/* Third Section (Other Testimonials) */}
        <div className="w-full min-[1497px]:w-1/3 flex flex-col justify-between gap-6 px-4 sm:px-6">
          {testimonials.slice(1).map((t, idx) => (
            <div
              key={idx}
              style={{
                background:
                  "linear-gradient(0deg, rgba(61, 176, 203, 0.30) 0.08%, rgba(61, 176, 203, 0.10) 32.24%, rgba(61, 176, 203, 0.01) 99.92%)",
              }}
              className="p-4 sm:p-6 xl:p-8 rounded-[5px] shadow-md flex flex-col w-full"
            >
              <div className="flex items-center gap-2 mb-3">
                <QuoteBubbleIcon className="w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5" />
                <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-[#3DB0CB] font-questrial font-normal text-[18px] sm:text-[22px] xl:text-[24px] leading-[24px] sm:leading-[26px] xl:leading-[28px] [text-shadow:0_0_0_#3DB0CB]">
                  {t.quote}
                </p>
              </div>
              <p className="text-[#282828] font-didact text-[14px] sm:text-[16px] xl:text-[18px] leading-normal mb-4">
                {t.content}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={0}
                  height={0}
                  className="rounded-full w-[40px] h-[40px] sm:w-[55px] sm:h-[55px] xl:w-[65px] xl:h-[65px]"
                />
                <div>
                  <p className="text-[#282828] font-comfortaa text-[16px] sm:text-[19px] xl:text-[20px] font-bold leading-[24px] sm:leading-[26px] xl:leading-[28px]">
                    {t.name}
                  </p>
                  <p className="text-[#5C5C5C] font-didact text-[14px] sm:text-[17px] xl:text-[18px] leading-[18px] sm:leading-[20px] text-center sm:text-left">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
