'use client';

import React, { useEffect, useState } from 'react';
import CarouselSlide1 from './CarouselSlide/CarouselSlide1';
import CarouselSlideMilestones from './CarouselSlide/CarouselSlideMilestones';
import CarouselSlideResources from './CarouselSlide/CarouselSlideResources';
import CarouselSlideAssessment from './CarouselSlide/CarouselSlideAssessment';
import { useTranslation } from "react-i18next";

const slides = [
  <CarouselSlide1 key={0} />,
  <CarouselSlideMilestones key={1} />,
  <CarouselSlideResources key={2} />,
  <CarouselSlideAssessment key={3} />
];

export default function SmartGoalSection() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="w-full px-6 py-10 flex flex-col items-center lg:mb-[100px]">
      <div className="self-stretch text-center text-[#F25D90] font-comfortaa text-[16px] font-bold leading-none pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
        {t('create_Your_Own_Project.create_Your_Own_Project')}
      </div>

      <h2
        className="text-[16px] sm:text-[22px] lg:text-[28px] 
             text-center text-[#004699] font-normal font-rocksalt leading-none mt-5 pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0"
        style={{
          WebkitTextStrokeWidth: '0.5px',
          WebkitTextStrokeColor: '#004699',
        }}
      >
        {t('create_Your_Own_Project.create_Your_Own_Project_Title')}
      </h2>

      <p
        className="text-[16px] sm:text-[18px] lg:text-[14px] 
             text-[#282828] text-center font-normal font-didact leading-normal 
             w-full max-w-[740px] mt-2 pl-4 pr-4 md:pl-0 md:pr-0 lg:pl-0 lg:pr-0"
      >
        {t('create_Your_Own_Project.create_Your_Own_Project_Dis')}
      </p>

      <div className="w-full max-w-6xl mt-10">
        {slides[activeSlide]}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-[25px] h-[25px] rounded-full cursor-pointer ${activeSlide === idx ? 'bg-[rgba(242,93,144,1)]' : 'bg-[rgba(199,199,199,1)]'
              }`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </section>
  );
}
