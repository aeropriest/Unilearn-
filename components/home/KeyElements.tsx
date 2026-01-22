'use client';

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function KeyElements() {
  const { t } = useTranslation();

  const keyElements = [
    {
      title: `${t("keyElements.learning_Projects")}`,
      description: `${t("keyElements.learning_ProjectsDis")}`,
      image: "/images/Untitleddesign.png",
      bgColor:
        "linear-gradient(155deg, rgba(255, 255, 255, 0.40) 9.73%, rgba(61, 176, 203, 0.40) 50.39%)",
      textColor: "text-brand-skyBlue",
    },
    {
      title: `${t("keyElements.mentor_Guidance")}`,
      description: `${t("keyElements.mentor_GuidanceDis")}`,
      image: "/images/mansitwood.png",
      bgColor:
        "linear-gradient(155deg, rgba(255, 255, 255, 0.40) 9.73%, rgba(128, 185, 255, 0.40) 50.39%)",
      textColor: "text-brand-blue",
    },
    {
      title: `${t("keyElements.co_Learning")}`,
      description: `${t("keyElements.co_LearningDis")}`,
      image: "/images/laughWoman.png",
      bgColor:
        "linear-gradient(155deg, rgba(255, 255, 255, 0.40) 9.73%, rgba(255, 123, 168, 0.40) 50.39%)",
      textColor: "text-brand-pink",
    },
    {
      title: `${t("keyElements.ai_Assistant")}`,
      description: `${t("keyElements.ai_AssistantDis")}`,
      image: "/images/Manlaptop.png",
      bgColor:
        "linear-gradient(155deg, rgba(255, 255, 255, 0.40) 9.73%, rgba(249, 213, 61, 0.40) 59.29%)",
      textColor: "text-[rgba(255,177,65,1)]",
    },
  ];

  return (
    <section className="relative py-10 px-8 lg:mb-[100px] lg:mt-[100px]">
      <div className="container mx-auto max-w-screen-2xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-brand-pink font-comfortaa text-sm sm:text-base lg:text-lg font-bold mb-3 tracking-wide">
            {t("keyElements.keyElements")}
          </p>

          <h1
            className="text-base sm:text-2xl lg:text-[28px] text-center font-normal mb-4 font-rocksalt text-[rgba(0,70,153,1)]"
            style={{
              WebkitTextStrokeWidth: "0.5px",
              WebkitTextStrokeColor: "rgba(0,70,153,1)",
            }}
          >
            {t("keyElements.keyElementsTitle")}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#282828] text-center font-normal font-didact leading-relaxed max-w-2xl mx-auto">
            {t("keyElements.keyElementsDis")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:-rotate-[4deg]">
          {keyElements.map((el, idx) => (
            <div
              key={idx}
              style={{ background: el.bgColor }}
              className="
                rounded-xl shadow-md text-left transform transition duration-300
                hover:scale-105
                w-full max-w-[350px] sm:max-w-full
                h-[400px] sm:h-[480px] lg:h-[500px]
                flex flex-col overflow-hidden
              "
            >
              {/* Text */}
              <div className="pt-5 sm:pt-8 px-4">
                <h3
                  className={`text-lg sm:text-2xl lg:text-3xl font-normal text-right font-questrial ${el.textColor}`}
                  style={{ WebkitTextStrokeWidth: "0.5px" }}
                >
                  {el.title}
                </h3>
                <p
                  className={`mt-2 text-sm sm:text-lg font-normal leading-snug text-right font-didact ${el.textColor}`}
                >
                  {el.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 mt-4">
                <Image
                  src={el.image}
                  alt={el.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
