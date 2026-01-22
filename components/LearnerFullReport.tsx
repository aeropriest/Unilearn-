import Image from 'next/image';
import LearningEnvironment from './LearningEnvironment';
import DeepInsight from './DeepInsight';
import MentorMatch from './MentorMatch';
import ProjectSuggestion from './ProjectSuggestion';
import LearningWeatherReport from './LearningWeatherReport';
import GrowthForecast from './GrowthForecast';
import Inspired from './Inspired';
import UniLearnerType from './UniLearnerType';
import SensoryFlow from './SensoryFlow'; 
import React, { forwardRef } from 'react';
import { useLearnerConfigs } from './learnerConfigs';
import { useTranslation } from "react-i18next";

type LearnerFullReportProps = {
  onBack: () => void;
  learnerType: string;
  genderKey: 'female' | 'male';
  colorPaletteImage: string;
  bgGradient: string;
};

const LearnerFullReport = forwardRef<HTMLDivElement, LearnerFullReportProps>(
  ({ onBack, learnerType, genderKey, bgGradient, colorPaletteImage }, ref) => {
    const learnerConfigs = useLearnerConfigs();
    const config = learnerConfigs[learnerType];
    if (!config) return null;
    const { t } = useTranslation();
    return (
      <div  className="min-h-screen bg-white p-6 md:p-10 relative">
        <div className="mb-[30px]">
          <button onClick={onBack} className="text-[#C7C7C7] font-comfortaa text-sm font-700 mb-[15px]">
            &lt; {t('learnerDetails.back_Button')}
          </button>
        </div>

        <div
          className="md:flex-row w-full max-w-[1200px] mx-auto rounded-[12px]"
          style={{ background: bgGradient }}
        >
          {/* Group 1 */}
          <div >
            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-6 lg:px-10 py-4">
              <p style={{ color: config.titleColor }} className=" font-comfortaa text-[12px] md:text-sm font-bold">
                {t('learnerDetails.header')}
              </p>
              <Image
                src="/images/uni-learn-logos.svg"
                alt="Uni Learn Logo"
                width={164}
                height={72}
                className="h-[72px] md:h-[48px] lg:h-[72px]"
              />
            </div>

            <UniLearnerType
              learnerType={learnerType}
              detail={config.detail}
              imageUrl={config.image[genderKey]}
              titleColor={config.titleColor}
              title={config.title}
              badges={config.badges}
              motivation={config.motivation}
              cognition={config.cognition}
              environment={config.environment}
              approach={config.approach}
              bg={config.bg}
            />

            {config.DeepInsight && <DeepInsight {...config.DeepInsight} />}
          </div>

          {/* Group 2 */}
          <div >
            <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 md:gap-[10px]">
              <div className="w-full md:flex-1 mt-[15px]">
                <div
                  className="flex flex-col items-start gap-[15px] p-[15px] rounded-[12px]"
                  style={{ background: 'rgba(255,255,255,0.60)' }}
                >
                  {config.LearningEnvironment && <LearningEnvironment {...config.LearningEnvironment} />}
                  {config.LearningEnvironment?.sensoryFlow && <SensoryFlow {...config.LearningEnvironment.sensoryFlow} />}
                </div>
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div >
            {config.MentorMatch && <MentorMatch {...config.MentorMatch} />}
            {config.ProjectSuggestion && <ProjectSuggestion {...config.ProjectSuggestion} />}
            <div
              className="flex h-[30px] items-start gap-[10px] self-stretch rounded-[12px] bg-cover bg-center bg-no-repeat mt-[15px] mx-[30px]"
              style={{ backgroundImage: `url(${colorPaletteImage})` }}
            />
            {config.LearningWeatherReport && <LearningWeatherReport {...config.LearningWeatherReport} />}
          </div>

          {/* Group 4 */}
          <div >
            {config.GrowthForecast && <GrowthForecast {...config.GrowthForecast} />}
            {config.Inspired && <Inspired {...config.Inspired} />}
            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-6 lg:px-10 py-4 mb-[20px]">
              <p style={{ color: config.titleColor }} className="font-comfortaa text-xs md:text-[12px] font-bold text-end">
                {t('learnerDetails.header')}
              </p>
              <Image
                src="/images/uni-learn-logos.svg"
                alt="Uni Learn Logo"
                width={164}
                height={72}
                className="h-[36px] md:h-[48px] lg:h-[72px]"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

LearnerFullReport.displayName = 'LearnerFullReport';
export default LearnerFullReport;
