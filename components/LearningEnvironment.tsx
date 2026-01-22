import React from 'react';
import SensoryFlow from './SensoryFlow';
import Workplace from './icons/Workplace';
import { useTranslation } from "react-i18next";
const LearningEnvironment: React.FC<LearningEnvironmentProps> = ({
  title,
  subtitle,
  titleColor,
  description,
  subTitleColor,
  visualClarity,
  zones,
  tools,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Header */}
      <div className="flex items-start gap-2">
        <Workplace fill={titleColor} />
        <div>
          <p
            style={{ color: titleColor }}
            className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]"
          >
            {title}
          </p>
          <p
            className="text-[#1E1E1E] text-[16px] font-normal font-questrial leading-none"
            style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Content: mobile stack → tablet grid (2 cols) → large 3-column flex */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full gap-4">
        {/* Column 1 (Visual Clarity): full-width on md, 20% on lg+ */}
        <div className="w-full md:col-span-2 lg:col-span-1 lg:basis-[20%] p-4 rounded-md">
          <Section
            title={t('learnerDetails.visual_Clarity')}
            titleColor={titleColor}
            subTitleColor={subTitleColor}
            subtitle={t('learnerDetails.visual_Clarity_Dis')}
            description={visualClarity.description}
          />
        </div>

        {/* Column 2 (Zones): half on md, 45% on lg+ */}
        <div className="w-full md:col-span-1 lg:basis-[45%] p-4 rounded-md">
          <Section
            title={t('learnerDetails.functional_Zones')}
            titleColor={titleColor}
            subTitleColor={subTitleColor}
            subtitle={t('learnerDetails.functional_Zones_Dis')}
          />
          {zones.map((zone, i) => (
            <Zone key={i} {...zone} />
          ))}
        </div>

        {/* Column 3 (Tools): half on md, 35% on lg+ */}
        <div className="w-full md:col-span-1 lg:basis-[35%] p-4 rounded-md">
          <Section
            title={t('learnerDetails.settings_That_Help')}
            titleColor={titleColor}
            subTitleColor={subTitleColor}
            subtitle={t('learnerDetails.settings_That_Help_Dis')}
          />
          {tools.map((tool, i) => (
            <Tool key={i} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LearningEnvironment;

/* ---------------- Helper Components ---------------- */

const Section = ({
  title,
  subtitle,
  description,
  titleColor,
  subTitleColor,
}: {
  title: string;
  subtitle: string;
  description?: string;
  titleColor: string;
  subTitleColor: string;
}) => (
  <>
    <p
      className="text-[16px] font-questrial"
      style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: titleColor, color: titleColor }}
    >
      {title}
    </p>
    <p style={{ color: subTitleColor }} className="text-[12px] font-comfortaa font-bold mt-[10px]">
      {subtitle}
    </p>
    {description && (
      <p className="text-[#282828] text-[16px] font-didact mt-[10px]">
        {description}
      </p>
    )}
  </>
);

const Zone = ({ icon, title, verb, description, titleColor, subTitleColor }: ZoneType) => (
  <div className="flex flex-col md:flex-row w-full mt-[20px] gap-2">
    <div className="w-full md:w-[10%]">{icon}</div>
    <div className="w-full md:w-[30%]">
      <p
        className="text-[16px] font-questrial"
        style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: titleColor, color: titleColor }}
      >
        {title}
      </p>
      <p style={{ color: subTitleColor }} className="text-[10px] font-comfortaa mt-[5px]">
        {verb}
      </p>
    </div>
    <div className="w-full md:w-[60%]">
      <p className="text-[#282828] text-[14px] font-didact">{description}</p>
    </div>
  </div>
);

const Tool = ({ title, description, result, subTitleColor, titleColor }: ToolType) => (
  <div className="flex flex-col md:flex-row w-full mt-[20px]">
    <div className="w-full md:w-[55%]">
      <p
        className="text-[16px] font-questrial font-400"
        style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: titleColor, color: titleColor }}
      >
        {title}
      </p>
      <p style={{ color: subTitleColor }} className="text-[10px] font-comfortaa mt-[5px]">
        {description}
      </p>
    </div>
    <div className="w-full md:w-[45%] md:pl-3 mt-2 md:mt-0">
      <p className="text-[#282828] text-[14px] font-didact">{result}</p>
    </div>
  </div>
);
