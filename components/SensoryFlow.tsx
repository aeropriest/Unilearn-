import React from 'react';

type SensoryFlowProps = {
  left: {
    title: string;
    subtitle: string;
    titleColor: string;
    subTitleColor: string;
    zones: {
      icon: React.ReactNode;
      title: string;
      titleColor: string;
      subTitleColor: string;
      verb?: string;
      description: string;
    }[];
  };
  right: {
    title: string;
    subtitle: string;
    titleColor: string;
    subTitleColor: string;
    anchors: {
      icon: React.ReactNode;
      title: string;
      titleColor: string;
      subTitleColor: string;
      verb: string;
      descriptionTitle?: string;
      description: string;
    }[];
  };
};

const SensoryFlow: React.FC<SensoryFlowProps> = ({ left, right }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row w-full max-w-[1200px] mx-auto gap-4 md:gap-6">
      {/* Left */}
      <div className="w-full md:col-span-1 lg:flex-1 lg:basis-[55%] mt-[15px]">
        <div className="p-4 rounded-md">
          <Section
            title={left.title}
            subtitle={left.subtitle}
            titleColor={left.titleColor}
            subTitleColor={left.subTitleColor}
          />
          {left.zones.map((zone, i) => (
            <Zone key={i} {...zone} />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:col-span-1 lg:flex-1 lg:basis-[45%] mt-[15px]">
        <div className="p-4 rounded-md">
          <Section
            title={right.title}
            subtitle={right.subtitle}
            titleColor={right.titleColor}
            subTitleColor={right.subTitleColor}
          />
          {right.anchors.map((anchor, i) => (
            <RightZone key={i} {...anchor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SensoryFlow;

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
  titleColor: string;
  subTitleColor: string;
  description?: string;
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
      <p className="text-[#282828] text-[16px] font-didact mt-[10px]">{description}</p>
    )}
  </>
);

const Zone = ({
  icon,
  title,
  verb,
  description,
  titleColor,
  subTitleColor,
}: {
  icon: React.ReactNode;
  title: string;
  verb?: string;
  description: string;
  titleColor: string;
  subTitleColor: string;
}) => (
  <div className="flex flex-col md:flex-row w-full mt-[20px] gap-2">
    <div className="w-full md:w-[25%] flex items-start md:items-center">
      <div className="flex items-center gap-2">
        {/* Show icon on iPad+, hide only on phones */}
        <div className="hidden md:block">{icon}</div>
        <div>
          <p
            className="text-[16px] font-questrial"
            style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: titleColor, color: titleColor }}
          >
            {title}
          </p>
          {verb && (
            <p style={{ color: subTitleColor }} className="text-[10px] font-comfortaa mt-[5px]">
              {verb}
            </p>
          )}
        </div>
      </div>
    </div>
    <div className="w-full md:w-[75%]">
      <p className="text-[#282828] text-[14px] font-didact">{description}</p>
    </div>
  </div>
);

const RightZone = ({
  icon,
  title,
  verb,
  description,
  descriptionTitle,
  titleColor,
  subTitleColor,
}: {
  icon: React.ReactNode;
  title: string;
  verb: string;
  description: string;
  descriptionTitle?: string;
  titleColor: string;
  subTitleColor: string;
}) => (
  <div className="flex flex-col md:flex-row w-full mt-[20px] gap-2">
    <div className="w-full md:w-[40%]">
      <div className="flex items-start gap-2">
        {/* Show icon on iPad+, hide only on phones */}
        <div className="hidden md:block">{icon}</div>
        <div>
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
      </div>
    </div>
    <div className="w-full md:w-[60%]">
      {descriptionTitle && (
        <p
          className="text-[#1E1E1E] text-[16px] font-didact"
          style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
        >
          {descriptionTitle}
        </p>
      )}
      <p className="text-[#282828] text-[14px] font-didact">{description}</p>
    </div>
  </div>
);
