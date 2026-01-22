import React from 'react';
import Cloudyday from './icons/Cloudyday';

export type WeatherCard = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export type LearningWeatherReportProps = {
  titleColor: string;
  subTitleColor: string;
  title: string;
  cards: WeatherCard[];
};

const LearningWeatherReport: React.FC<LearningWeatherReportProps> = ({
  titleColor,
  title,
  cards,
  subTitleColor,
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 md:gap-[10px]">
      <div className="w-full md:flex-1 mt-[15px]">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px]"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-end gap-2">
            <Cloudyday fill={titleColor}/>
            <p className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]" style={{ color: titleColor }}>
              {title}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-[15px] mt-[1px] lg:mr-[15px] flex-wrap">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-[15px] p-[15px] flex-1 self-stretch rounded-[12px]"
                style={{ background: 'rgba(0,70,153,0.02)' }}
              >
                <div className="gap-2">
                  {card.icon}
                  <p
                    className="text-[16px] font-normal not-italic leading-none font-questrial"
                    style={{
                      color: titleColor,
                      WebkitTextStrokeWidth: '0.2px',
                      WebkitTextStrokeColor: titleColor,
                    }}
                  >
                    {card.title}
                  </p>
                  <p style={{ color: subTitleColor }} className="text-[12px] font-bold not-italic leading-none font-comfortaa mt-[10px]">
                    {card.subtitle}
                  </p>
                </div>
                <p className="text-[#282828] text-[16px] font-normal not-italic leading-none font-didact">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningWeatherReport;
