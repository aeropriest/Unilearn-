import React from 'react';
import Partnership from './icons/Partnership';
import { useTranslation } from "react-i18next";
export type MentorMatchProps = {
  titleColor: string;
  title: string;
  description: string;
  benefits: { color: string; text: string }[];
  mentorTypes: {
    image: string;
    name: string;
    description: string;
  }[];
};

const MentorMatch: React.FC<MentorMatchProps> = ({
  titleColor,
  title,
  description,
  benefits,
  mentorTypes,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 md:gap-[10px]">
      <div className="w-full md:flex-1 mt-[15px]">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px]"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-start gap-2">
            <Partnership fill={titleColor}/>
            <div>
              <p
                className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]"
                style={{ color: titleColor }}
              >
                {title}
              </p>
              <p
                className="text-[16px] font-normal font-questrial leading-none"
                style={{
                  color: '#1E1E1E',
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: '#1E1E1E',
                }}
              >
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <div className="w-full md:basis-[25%] p-4 rounded-md">
              <p
                className="text-[16px] font-normal not-italic leading-none font-questrial mb-10"
                style={{
                  color: titleColor,
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: titleColor,
                }}
              >
                {t('learnerDetails.you_Will_Benefit')}
              </p>

              {benefits.map((benefit, i) => (
                <div className="flex items-start gap-4 mt-[15px]" key={i}>
                  <div
                    className="w-[5px] rounded-[12px] self-stretch"
                    style={{ backgroundColor: benefit.color }}
                  ></div>
                  <div className="flex flex-col">
                    <p className="text-[#282828] text-[16px] font-normal not-italic leading-normal font-didact">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {mentorTypes.map((mentor, i) => (
              
              <div className="w-full md:basis-[37.5%] rounded-md" key={i}>
                
                <p
                  className="text-[16px] mt-5 font-normal not-italic leading-none font-questrial"
                  style={{
                    color: titleColor,
                    WebkitTextStrokeWidth: '0.2px',
                    WebkitTextStrokeColor: titleColor,
                  }}
                >
                  {i === 0 ? t('learnerDetails.best_Matching_Mentor_Types') : ""}
                </p>  
                <div className={`flex items-start gap-4 ${i === 1 ? 'mt-[92px]' : 'mt-[54px]'}`}>

                  <div
                    className="w-[180px] h-[180px] rounded-full bg-cover bg-center bg-no-repeat hidden lg:block"
                    style={{ backgroundImage: `url(${mentor.image})` }}
                  ></div>
                  <div className="lg:w-[50%]">
                    <p
                      className="text-[#1E1E1E] text-[16px] font-normal not-italic leading-normal font-didact"
                      style={{
                        WebkitTextStrokeWidth: '0.2px',
                        WebkitTextStrokeColor: '#1E1E1E',
                      }}
                    >
                      {mentor.name}
                    </p>
                    <p className="text-[#282828] text-[14px] font-normal not-italic leading-normal font-didact">
                      {mentor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorMatch;
