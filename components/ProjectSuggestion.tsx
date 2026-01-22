import React from 'react';
import Forecasting from './icons/Forecasting';
import Notepad from './icons/Notepad';

export type ProjectSuggestionProps = {
  titleColor: string;
  suggestionTitle: string;
  suggestionSubtitle: string;
  suggestionDescription: string;
  suggestionList: string[];
  suggestionFooter: string;
  growthEdgesTitle: string;
  growthEdgesSubtitle: string;
  growthPoints: { label: string; description: string }[];
};

const ProjectSuggestion: React.FC<ProjectSuggestionProps> = ({
  titleColor,
  suggestionTitle,
  suggestionSubtitle,
  suggestionDescription,
  suggestionList,
  suggestionFooter,
  growthEdgesTitle,
  growthEdgesSubtitle,
  growthPoints,
}) => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 lg:gap-[10px]">
      {/* Left Column */}
      <div className="w-full md:w-full lg:w-[623px] mt-[15px] flex">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px] w-full"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-start gap-2">
            <Forecasting fill={titleColor} />
            <div>
              <p className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]" style={{ color: titleColor }}>
                {suggestionTitle}
              </p>
              <p
                className="text-[#1E1E1E] text-[16px] font-normal font-questrial leading-none"
                style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
              >
                {suggestionSubtitle}
              </p>
            </div>
          </div>

          <p className="text-[#282828] text-[16px] font-normal leading-normal font-didact">
            {suggestionDescription}
          </p>

          <ul className="list-disc pl-5 md:pl-6">
            {suggestionList.map((item, idx) => (
              <li
                key={idx}
                className="text-[#282828] text-[16px] font-normal not-italic leading-normal font-didact"
                style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#282828' }}
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="text-[#282828] text-[16px] font-normal leading-normal font-didact">
            {suggestionFooter}
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-full lg:flex-1 mt-[15px] flex">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px] w-full"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-start gap-2">
            <Notepad fill={titleColor} />
            <div>
              <p className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]" style={{ color: titleColor }}>
                {growthEdgesTitle}
              </p>
              <p
                className="text-[#1E1E1E] text-[16px] font-normal font-questrial leading-none"
                style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
              >
                {growthEdgesSubtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-[20px] mt-[10px]">
            {growthPoints.map((point, idx) => (
              <div className="flex flex-col md:flex-row w-full" key={idx}>
                <div className="w-full md:w-[35%] lg:w-[30%] mb-1 md:mb-0">
                  <p
                    className="text-[#1E1E1E] text-[16px] font-normal font-didact"
                    style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
                  >
                    {point.label}
                  </p>
                </div>
                <div className="w-full md:w-[65%] lg:w-[70%] md:pl-[12px]">
                  <p className="text-[#282828] text-[16px] font-normal font-didact">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProjectSuggestion;
