'use client';

import React, { forwardRef } from 'react';
import Entrepreneurial from '@/components/icons/Entrepreneurial';
import Neurotechnology from '@/components/icons/Neurotechnology';
import Tablelamp from '@/components/icons/Tablelamp';
import Signpost from '@/components/icons/Signpost';

type TraitInfo = {
  label: string;
  value: string;
  description: string;
};

type UniLearnerTypeProps = {
  titleColor: string;
  learnerType: string;
  title: string;
  detail: string;
  badges: string[];
  motivation: TraitInfo;
  cognition: TraitInfo;
  environment: TraitInfo;
  approach: TraitInfo;
  imageUrl: string;
  bg: string;
};

const UniLearnerType = forwardRef<HTMLDivElement, UniLearnerTypeProps>(
  (
    {
      titleColor,
      learnerType,
      title,
      detail,
      badges,
      motivation,
      cognition,
      environment,
      approach,
      imageUrl,
      bg
    },
    ref
  ) => {
    const traits: { icon: React.ReactNode; info: TraitInfo }[] = [
      { icon: <Entrepreneurial fill={titleColor} />, info: motivation },
      { icon: <Neurotechnology fill={titleColor} />, info: cognition },
      { icon: <Tablelamp fill={titleColor} />, info: environment },
      { icon: <Signpost fill={titleColor} />, info: approach },
    ];

    return (
      <div
        ref={ref}
        className="flex flex-col md:flex-col lg:flex-row w-full max-w-[1200px] mx-auto rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px]"
      >
        {/* Image: on top + centered on iPad; original sizing returns at lg */}
        {/* <div
          className="w-[350px] max-w-full h-[350px] aspect-square rounded-full bg-center bg-contain bg-no-repeat mt-[60px] md:mt-6 md:mx-auto lg:mx-0 lg:ml-[30px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        /> */}
        <div
          className="relative w-[350px] h-[350px] mt-[60px] md:mt-6 md:mx-auto lg:mx-0 lg:ml-[30px]"
        >
          {/* Background (dots) */}
          <div
            className="absolute inset-0 rounded-full bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
          />

          {/* Foreground (main image) */}
          <div
            className="relative w-full h-full rounded-full bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>


        {/* Content: full width on iPad; fixed width returns at lg */}
        <div className="w-full md:w-full lg:w-[794px]">
          <div className="w-full mt-[30px] flex flex-col lg:flex-row h-auto lg:h-[180px] gap-4 md:px-[15px]">
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-[14px] font-bold font-comfortaa" style={{ color: titleColor }}>
                  Uni Learner Type
                </p>
                <h2
                  className="text-[28px] font-normal font-questrial"
                  style={{
                    color: titleColor,
                    WebkitTextStrokeWidth: '0.5px',
                    WebkitTextStrokeColor: titleColor,
                  }}
                >
                  {learnerType} | {title}
                </h2>
                <div className="flex flex-wrap mt-5 gap-2">
                  {badges.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center justify-center px-4 h-[28px] text-white text-[16px] font-bold font-comfortaa rounded-full"
                      style={{ backgroundColor: titleColor }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="text-[#282828] text-[16px] font-didact mt-[15px] ml-[15px] mr-[15px] md:mx-[15px]">
                  {detail}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-[15px] mt-[15px] lg:mr-[15px] md:mx-[15px]">
            {traits.map(({ icon, info }) => (
              <div
                key={info.label}
                style={{
                  background: 'linear-gradient(130deg, rgba(255,255,255,0.00) 1.12%, #FFF 98.88%)',
                }}
                className="flex flex-col items-start gap-[15px] p-[15px] flex-1 self-stretch rounded-[12px] md:h-auto lg:h-[190px]"
              >
                <div className="flex items-center gap-2">
                  {icon}
                  <div className="text-[12px] font-bold not-italic leading-none font-comfortaa" style={{ color: titleColor }}>
                    {info.label}
                    <div
                      className="text-[16px] font-normal not-italic leading-none font-questrial mt-[5px]"
                      style={{
                        WebkitTextStrokeWidth: '0.2px',
                        WebkitTextStrokeColor: '#1E1E1E',
                        color: '#1E1E1E',
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
                <p className="text-[#282828] text-[16px] font-normal font-didact leading-none">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default UniLearnerType;
