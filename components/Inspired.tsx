import React from 'react';
import Flexible from './icons/Flexible';
import Elearning from './icons/Elearning';
import { useTranslation } from "react-i18next";

export type ProjectCard = {
  title: string;
  forLabel: string;
  forTarget: string;
  description: string;
  tags: string;
  inspiredBy: string;
  backgroundImage: string;
};

export type InspiredProps = {
  titleColor: string;
  title: string;
  projects: ProjectCard[];
  action: {
    message: string;
    button1: string;
    button2: string;
  };
};

const Inspired: React.FC<InspiredProps> = ({ titleColor, title, projects, action }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 gap-4 md:gap-[10px] lg:mt-[30px] lg:mb-[30px]">
      <div className="w-full mt-[15px]">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <Flexible fill={titleColor}/>
            <p className="text-[12px] font-bold font-comfortaa leading-none mb-[10px] mt-[10px]" style={{ color: titleColor }}>
              {title}
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap w-full gap-4 md:gap-[10px] mt-[10px]">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-[rgba(255,255,255,0.60)] rounded-[12px] shadow flex flex-col overflow-hidden w-full md:basis-[26%]"
              >
                {/* Text Content */}
                <div className="p-4 flex-1">
                  <p
                    className="text-[#1E1E1E] text-[16px] font-questrial font-normal"
                    style={{ WebkitTextStrokeWidth: '0.2px', WebkitTextStrokeColor: '#1E1E1E' }}
                  >
                    {proj.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#575757] text-[12px] font-didact">{t('learnerDetails.for')}</p>
                    <p className="text-[#000000] text-[14px] font-didact capitalize">{proj.forTarget}</p>
                  </div>
                  <p className="text-[#1E1E1E] text-[14px] mt-2 font-didact">{proj.description}</p>
                  <p className="text-[#282828] text-[12px] mt-2 font-comfortaa font-semibold">{proj.tags}</p>
                  <p className="text-[#575757] text-[12px] mt-2 font-didact">📚 {t('learnerDetails.inspired_by')}:</p>
                  <p className="text-[#1E1E1E] text-[14px] font-didact capitalize">{proj.inspiredBy}</p>
                </div>

                {/* Bottom Image */}
                <div
                  className="w-full h-[76px] shrink-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${proj.backgroundImage}')` }}
                ></div>
              </div>
            ))}


            {/* ✅ Action block now sits in same row */}
            <div className="p-0 flex flex-col justify-between md:basis-[20%] w-full">
              <div className="flex justify-end">
                <Elearning />
              </div>
              <p
                className="text-right text-[16px] font-didact mt-2"
                style={{
                  color: '#F25D90',
                  WebkitTextStrokeWidth: '0.2px',
                  WebkitTextStrokeColor: '#F25D90',
                }}
              >
                {action.message}
              </p>
              <button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/projects/browse#/`,
                    "_blank"
                  )
                }
                className="
    w-full mt-2
    rounded-full
    px-[32px] py-[12px]
    text-[16px]
    font-comfortaa font-bold text-white
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    sm:hover:scale-105
  "
              >
                {action.button1}
              </button>
              <button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_APP_FRONTEND_BASE_URL}/en/instructors#/`,
                    "_blank"
                  )
                }
                className="
    rounded-full font-comfortaa font-bold text-[#FCFDFF]
    mt-2 w-full
    px-8 py-3 text-[16px]
    bg-gradient-to-r from-[rgba(242,93,144,0.80)] to-[rgba(249,213,61,0.80)]
    sm:hover:from-[rgba(249,213,61,0.80)] sm:hover:to-[rgba(242,93,144,0.80)]
    sm:hover:scale-105 sm:hover:shadow-lg sm:hover:brightness-105
    transition-all duration-300 ease-in-out
  "
              >
                {action.button2}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inspired;
