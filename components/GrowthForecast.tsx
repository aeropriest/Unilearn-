import React from 'react';
import Binocular from './icons/Binocular';
import Identification from './icons/Identification';
import { useTranslation } from "react-i18next";
export type FamousPerson = {
  image: string;
  name: string;
  description: string;
};

export type GrowthForecastProps = {
  titleColor: string;
  forecastTitle: string;
  forecastText: string;
  famousTitle: string;
  people: FamousPerson[];
};

const GrowthForecast: React.FC<GrowthForecastProps> = ({
  titleColor,
  forecastTitle,
  forecastText,
  famousTitle,
  people,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 md:gap-[10px]">
      {/* Left Column */}
      <div className="w-full md:w-[65%] mt-[15px] flex">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px] w-full"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-center gap-2">
            <Binocular fill={titleColor} />
            <p
              className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]"
              style={{ color: titleColor }}
            >
              {forecastTitle}
            </p>
          </div>
          <p className="text-[#282828] text-[16px] font-normal leading-normal font-didact whitespace-pre-line">
            {forecastText}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:flex-1 mt-[15px] flex">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px] w-full"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-center gap-2">
            <Identification fill={titleColor} />
            <p
              className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]"
              style={{ color: titleColor }}
            >
              {t('learnerDetails.famous_People_Like_You')}
            </p>
          </div>

          {people.map((person, idx) => (
            <div className="flex items-start gap-4 mt-[10px] w-full" key={idx}>
              <div className="shrink-0">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <p
                  className="text-[#1E1E1E] text-[16px] font-normal font-didact mb-1"
                  style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
                >
                  {person.name}
                </p>
                <p className="text-[#282828] text-[12px] font-normal font-didact">{person.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default GrowthForecast;
