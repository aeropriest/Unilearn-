import React from 'react';
import { useTranslation } from "react-i18next";
type GrowthEdge = {
  title: string;
  description: string;
};

type MentorSupportPanelProps = {
  shineText: string;
  shineDescription: string;
  projectTitle: string;
  projectDescription: string;
  growthEdges: GrowthEdge[];
  titleColor: string,
  subTitleColor: string,
  growthTitleColor: string,
};

const MentorSupportPanel: React.FC<MentorSupportPanelProps> = ({
  shineText,
  shineDescription,
  projectTitle,
  projectDescription,
  growthEdges,
  growthTitleColor,
  titleColor,
  subTitleColor,
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 rounded-xl overflow-hidden mt-[15px]">
      {/* Shine Block */}
      <div className="w-full lg:w-60 bg-white/40 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-2">
        <div style={{ color: titleColor }} className="text-xs font-bold font-comfortaa">
          {shineText}
        </div>
        <div style={{ color: subTitleColor }} className="text-base font-normal font-didact">
          {shineDescription}
        </div>
      </div>

      {/* Project Suggestion Block */}
      <div className="w-full lg:w-72 bg-white/40 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-2">
        <div style={{ color: titleColor }} className="text-xs font-bold font-comfortaa">
          {projectTitle}
        </div>
        <div style={{ color: subTitleColor }} className="text-base font-normal font-didact">
          {projectDescription}
        </div>
      </div>


      {/* Growth Edges Block */}
      <div className="flex-1 bg-white/40 backdrop-blur-sm p-4 rounded-xl flex flex-col gap-2">
        <div style={{ color: titleColor }} className="text-xs font-bold font-comfortaa">
          {t("mentorDetails.growth_Edges")}
        </div>
        <div className="flex flex-col gap-4">
          {growthEdges.map((edge, index) => (
            <div
              key={index}
              className="flex justify-between items-start w-full gap-4"
            >
              <div
                style={{ color: growthTitleColor }}
                className="text-base font-didact font-400 min-w-[150px] max-w-[150px] flex-shrink-0"
              >
                {edge.title}
              </div>
              <div
                style={{ color: subTitleColor }}
                className="text-base text-[16px] font-didact flex-1 max-w-[344px]"
              >
                {edge.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSupportPanel;
