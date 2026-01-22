import React from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from "react-i18next";

interface Strategy {
  color: string;
  title: string;
  text: string;
}

interface Tool {
  name: string;
  description: string;
}

interface DeepInsightProps {
  left: {
    icon: ReactNode;
    title: string;
    titleColor: string;
    highlight: string;
    description: string;
  };
  right: {
    icon: ReactNode;
    subtitle: string;
    titleColor: string;
    intro: string;
    strategies: Strategy[];
    tools: Tool[];
  };
}

const DeepInsight = ({ left, right }: DeepInsightProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 lg:gap-[10px]">
      {/* Left Column */}
      <div className="w-full md:w-full lg:w-[353px] mt-[15px] flex">
        <div
          className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px] w-full"
          style={{ background: 'rgba(255,255,255,0.60)' }}
        >
          <div className="flex items-start gap-2">
            {left.icon}
            <div>
              <p
                style={{ color: left.titleColor }}
                className="text-[12px] font-bold font-comfortaa leading-none mb-[10px]"
              >
                {left.title}
              </p>
              <p
                className="text-[#1E1E1E] text-[16px] font-normal font-questrial leading-none"
                style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
              >
                {left.highlight}
              </p>
            </div>
          </div>

          <p className="text-[#282828] text-[16px] font-normal leading-normal font-didact whitespace-pre-line">
            {left.description}
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
            {right.icon}
            <div>
              <p
                style={{ color: left.titleColor }}
                className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]"
              >
                {right.subtitle}
              </p>
              <p
                className="text-[#1E1E1E] text-[16px] font-normal font-questrial leading-none"
                style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
              >
                {right.intro}
              </p>
            </div>
          </div>

          {/* Strategies & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-6">
            {/* Strategies Section */}
            <div className="w-full p-4 rounded-md">
              <p
                className="text-[16px] font-normal not-italic leading-none font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: left.titleColor,
                  color: left.titleColor,
                }}
              >
                {t('learnerDetails.learning_Strategies')}
              </p>
              <p
                style={{ color: `${left.titleColor}99` }}
                className="text-[12px] font-bold not-italic leading-none font-comfortaa mt-[10px]"
              >
                {t('learnerDetails.learning_Strategies_Dis')}
              </p>

              {right.strategies.map((strategy, idx) => (
                <div key={idx} className="flex items-stretch gap-4 mt-[15px]">
                  <div className="w-[5px] rounded-[12px]" style={{ background: strategy.color }} />
                  <div className="flex flex-col">
                    <p
                      className="text-[#1E1E1E] text-[16px] font-normal not-italic leading-none font-didact mb-1"
                      style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
                    >
                      {strategy.title}
                    </p>
                    <p className="text-[#282828] text-[16px] font-normal not-italic leading-normal font-didact">
                      {strategy.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="w-full p-4 rounded-md">
              <p
                className="text-[16px] font-normal not-italic leading-none font-questrial"
                style={{
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: left.titleColor,
                  color: left.titleColor,
                }}
              >
                {t('learnerDetails.increase_Productivity')}
                
              </p>

              {right.tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row w-full mt-[20px]">
                  <div className="w-full lg:w-[30%]">
                    <p
                      className="text-[#1E1E1E] text-[16px] font-400 not-italic leading-normal font-didact"
                      style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
                    >
                      {tool.name}
                    </p>
                  </div>
                  <div className="w-full lg:w-[70%] lg:ml-[10px] mt-1 lg:mt-0">
                    <p className="text-[#282828] text-[16px] font-normal not-italic leading-normal font-didact">
                      {tool.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /Strategies & Tools */}
        </div>
      </div>
    </div>


  );
};

export default DeepInsight;
