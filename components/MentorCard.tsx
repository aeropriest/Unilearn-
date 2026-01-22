import React from "react";
import { useTranslation } from "react-i18next";
type CoreStrength = {
  title: string;
  desc: string;
};

type MentorCardProps = {
  imageSrc: string;
  coreStrengths: CoreStrength[];
  essenceText: string;
  essenceTextColor: string;
  quote: string;
  quoteColor: string;
  svgColor: string;
  author: {
    name: string;
    nameColor: string;
    avatar: string;
  };
};

const MentorCard: React.FC<MentorCardProps> = ({
  imageSrc,
  coreStrengths,
  essenceText,
  essenceTextColor,
  quote,
  quoteColor,
  svgColor,
  author,
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full max-w-[1140px] mx-auto mt-6">
      <div className="flex flex-col md:flex-row gap-4 items-stretch">

        {/* Left Column */}
        <div className="flex w-full md:w-[30%] min-h-[305px]">
          {/* Mentor Essence */}
          <div className="p-4 bg-white/40 backdrop-blur rounded-xl h-full w-full">
            <div className="text-[12px] font-700 text-sky-900 font-comfortaa mb-2">{t("mentorDetails.mentor_Essence")} </div>
            <p style={{ color: essenceTextColor }} className="text-[16px] font-didact leading-relaxed">
              {essenceText}
            </p>
          </div>
        </div>

        {/* Core Strengths */}
        <div className="flex w-full md:w-[30%] min-h-[305px]">
          <div className="p-4 bg-white/40 backdrop-blur rounded-xl h-full w-full">
            <div className="text-[12px] font-700 text-sky-900 font-comfortaa mb-2">{t("mentorDetails.core_Strengths")}</div>
            <div className="flex flex-col gap-2">
              {coreStrengths.map((strength, idx) => (
                <div key={idx}>
                  <div style={{ color: strength.titleColor }} className="font-400 text-[16px] font-didact ">
                    {strength.title}
                  </div>
                  <div style={{ color: essenceTextColor }} className="text-[16px] font-400 font-didact">
                    {strength.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex w-full md:w-[40%] min-h-[305px]">
          <div className="rounded-xl overflow-hidden h-full w-full">
            <img
              src={imageSrc}
              alt="Mentor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex w-full md:w-[30%] min-h-[305px]">
          <div className="p-4 bg-white/40 backdrop-blur rounded-xl h-full w-full flex flex-col justify-center text-right">
            <div className="flex items-center justify-end gap-2 mb-4">
              <img src={author.avatar} alt={author.name} className="w-8 h-8 rounded-full" />
              <div style={{ color: author.nameColor }} className="text-[16px] font-400 font-questrial">
                {author.name}
              </div>
            </div>
            <div style={{ color: quoteColor }} className="text-[18px] font-didact">
              {quote}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5417 6.25C20.1963 6.25 25 11.7438 24.9998 19.8784C24.9572 31.6974 16.0722 40.0538 3.2544 41.6586C2.06521 41.8075 1.60667 40.1601 2.70176 39.6732C7.62007 37.4862 10.1041 34.7111 10.4249 31.9642C10.6646 29.912 9.54902 28.1143 8.14818 27.7777C4.51655 26.905 2.08333 22.3825 2.08333 17.7083C2.08333 11.3801 7.2134 6.25 13.5417 6.25Z" fill={svgColor} fillOpacity="0.6" />
                <path d="M38.5417 6.25C45.1963 6.25 50 11.7438 49.9998 19.8784C49.9572 31.6974 41.0722 40.0538 28.2544 41.6586C27.0652 41.8075 26.6067 40.1601 27.7018 39.6732C32.6201 37.4862 35.1041 34.7111 35.4249 31.9642C35.6646 29.912 34.549 28.1143 33.1482 27.7777C29.5166 26.905 27.0833 22.3825 27.0833 17.7083C27.0833 11.3801 32.2134 6.25 38.5417 6.25Z" fill={svgColor} fillOpacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
