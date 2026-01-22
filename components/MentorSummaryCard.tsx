import React from "react";

interface MentorSummaryCardProps {
  title: string;
  subtitle: string;
  traits: string[];
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImageUrl: string;
}

const MentorSummaryCard: React.FC<MentorSummaryCardProps> = ({
  title,
  subtitle,
  traits,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundImageUrl,
}) => {
  return (
    <div
      className="w-full lg:h-[395px] lg:w-[1140px] p-6 sm:p-12 bg-gradient-to-b from-black/0 to-black/20 rounded-xl flex justify-center items-start gap-3.5 bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="flex-1 flex flex-col justify-end h-full gap-6 text-white z-10">
        {/* Title Section */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold font-comfortaa">{title}</p>
          <p className="text-3xl font-questrial">{subtitle}</p>

          {/* Traits */}
          <div className="flex flex-wrap gap-2">
            {traits.map((trait, idx) => (
              <div
                key={idx}
                className="px-4 py-1 bg-sky-800/50 rounded-full font-comfortaa text-base font-bold"
              >
                {trait}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-base font-didact">{description}</p>
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-xl" />
    </div>

  );
};

export default MentorSummaryCard;

