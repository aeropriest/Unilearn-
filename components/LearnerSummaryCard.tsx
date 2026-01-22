'use client';

import Image from 'next/image';
import Award from './icons/Award';
import Message from './icons/Massage'
import Courage from './icons/Courage';
import { FC } from 'react';
import { useTranslation } from "react-i18next";
type LearnerSummaryCardProps = {
  bgGradient?: string;
  imageSrc: string;
  colorPaletteImage: string;
  titleColor: string;
  learnerType: string;
  learnerTitle: string;
  badges: string[];
  description: string;
  ref: any;
  famousPerson: {
    name: string;
    image: string;
  };
  quote: string;
  fullReport: boolean;
  quoteAuthor: string;
  strengths: string[];
  onGetFullReport?: () => void;
  onTryAnother?: () => void;
};

const LearnerSummaryCard: FC<LearnerSummaryCardProps> = ({
  bgGradient,
  imageSrc,
  colorPaletteImage,
  titleColor,
  learnerType,
  learnerTitle,
  badges,
  description,
  famousPerson,
  quote,
  quoteAuthor,
  strengths,
  ref,
  fullReport,
  onGetFullReport,
  onTryAnother,
}) => {
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      style={{ background: bgGradient }}
      className="p-5 md:p-0 lg:p-0   flex flex-col md:flex-col lg:flex-row w-full max-w-[1200px] mx-auto rounded-tl-[12px] rounded-tr-[12px] rounded-br-[12px] report-section"
    >
      {/* Image section — full width & on top for iPad; fixed width returns at lg */}
      <div className="w-[300px] md:w-full lg:w-[406px] flex items-end md:items-end">
        <Image
          src={imageSrc}
          alt="Learner"
          width={406}
          height={500}
          className="object-cover w-full h-auto md:h-auto lg:h-[500px]"
        />
      </div>

      {/* Content section — full width on iPad; fixed width returns at lg */}
      <div className="w-full md:w-full lg:w-[794px]">
        <div className="mt-[30px] mr-[15px] md:px-[15px] flex justify-end">
          <Image
            src="/images/uni-learn-logos.svg"
            alt="Uni Learn Logo"
            width={164}
            height={72}
          />
        </div>

        <div className="w-full mt-[30px] flex flex-col lg:flex-row h-auto lg:h-[120px] gap-4 md:px-[15px]">
          <div className="flex-1 md:ml-0 lg:ml-[15px]">
            <p style={{ color: titleColor }} className="text-[14px] font-bold font-comfortaa">
              {t('learnerDetails.uni_Learner_Type')}
            </p>
            <h2
              className="text-[28px] font-normal font-questrial"
              style={{
                color: titleColor,
                WebkitTextStrokeWidth: '0.5px',
                WebkitTextStrokeColor: titleColor,
              }}
            >
              {learnerType} | {learnerTitle}
            </h2>

            <div className="flex flex-wrap mt-5 gap-2">
              {badges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center justify-center px-4 h-[28px] text-white text-[16px] font-bold font-comfortaa rounded-full add-padding"
                  style={{ background: titleColor }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[250px] flex flex-col gap-2">
            <button
              onClick={onGetFullReport}
              className="
    skip-export
    w-full lg:w-[244px]
    px-[32px] py-[14px]
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    text-white text-[18px] font-bold font-comfortaa
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
            >
              {t("learnerDetails.get_Full_Report")}
            </button>
            
            <button
              onClick={() => window.location.reload()}
              className="
    skip-export w-full lg:w-[244px]
    px-[32px] py-[14px] rounded-full
    bg-gradient-to-r from-[rgba(242,93,144,0.80)] to-[rgba(249,213,61,0.80)]
    text-[#FCFDFF] text-[18px] font-bold font-comfortaa
    sm:hover:from-[rgba(249,213,61,0.80)] sm:hover:to-[rgba(242,93,144,0.80)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
  "
            >
              {t('learnerDetails.try_Another')}
            </button>
          </div>
        </div>

        <p className="text-[#282828] text-[16px] font-didact mt-[15px] ml-[15px] mr-[15px] md:mx-[15px]">
          {description}
        </p>

        {/* Cards: 1-col → 2-col on iPad → 3-col on lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mt-[15px] lg:mr-[15px] lg:ml-[15px] md:mx-[15px]">
          {/* Famous Person */}
          <div className="flex flex-col gap-[15px] p-[15px] flex-1 rounded-[12px] bg-[rgba(255,255,255,0.60)]">
            <div className="flex items-center gap-2">
              <Award fill={titleColor} />
              <p style={{ color: titleColor }} className="text-[16px] font-bold font-comfortaa">
                {t('learnerDetails.famous')} {learnerType}
              </p>
            </div>
            <div className="flex flex-col items-center gap-[15px]">
              <div
                className="w-[80px] h-[80px] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url('${famousPerson.image}')`, backgroundColor: 'lightgray' }}
              />
              <p className="text-[#282828] text-center text-[16px] font-didact">{famousPerson.name}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col gap-[15px] p-[15px] flex-1 rounded-[12px] bg-[rgba(255,255,255,0.60)]">
            <div className="flex items-center gap-2">
              <Message fill={titleColor} />
              <p style={{ color: titleColor }} className="text-[16px] font-bold font-comfortaa">{t('learnerDetails.quote')}</p>
            </div>
            <div className="text-[#282828] text-[14px] font-didact font-400 max-w-[191px] md:max-w-none">
              “{quote}”<br />— {quoteAuthor}
            </div>
          </div>

          {/* Strengths */}
          <div className="flex flex-col gap-[15px] p-[15px] flex-1 rounded-[12px] bg-[rgba(255,255,255,0.60)]">
            <div className="flex items-center gap-2">
              <Courage fill={titleColor} />
              <p style={{ color: titleColor }} className="text-[16px] font-bold font-comfortaa">{t('learnerDetails.strength')}</p>
            </div>
            <div className="text-[#282828] font-didact text-[18px] leading-normal">
              {strengths.map((s, idx) => (
                <div key={idx}>{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Color bar */}
        <div
          className="h-[10px] rounded-[12px] bg-cover bg-no-repeat bg-lightgray mt-[15px] mb-[15px] ml-[15px] mr-[15px] md:mx-[15px]"
          style={{ backgroundImage: `url(${colorPaletteImage})` }}
        />

        <p className="text-[#282828] font-didact text-[16px] mb-[30px] ml-[15px] md:mx-[15px]">
          {t('learnerDetails.header')}
        </p>
      </div>
    </div>

  );
};

export default LearnerSummaryCard;
