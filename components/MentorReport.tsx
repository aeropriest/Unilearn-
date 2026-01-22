'use client';

import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Image from 'next/image';
import Link from 'next/link';
import MentorSummaryCard from './MentorSummaryCard';
import ElementalSelfCard from './ElementalSelfCard';
import MentorCard from './MentorCard';
import MentorSupportPanel from './ForecastSection';
// import { mentorTypeConfigs } from './mentorTypeConfigs';
import { useMentorTypeConfigs } from './mentorTypeConfigs';
import { useTranslation } from "react-i18next";
type Props = {
  result: any;
  gender: 'male' | 'female';
};

export default function MentorReport({ result, gender }: Props) {
  const { t } = useTranslation();
  const reportRef = useRef<HTMLDivElement>(null);
  const [showFullReport, setShowFullReport] = useState(false);

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const elements = document.querySelectorAll('.report-section');

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLElement;

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL('image/png');
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    }

    pdf.save('Uni_Learner_Report.pdf');
  };

  // const mentorTypes = ["PGS", "PGE", "PPS", "PPE", "DGS", "DGE", "DPS", "DPE"];

  // // const learnerType = result?.mentorTypeCode || 'PGS';
  // const code = result?.mentorTypeCode || result;
  // const learnerType = code 
  //   ? code
  //   : mentorTypes[Math.floor(Math.random() * mentorTypes.length)];
  
  // const mentorTypes = ["PGS", "PGE", "PPS", "PPE", "DGS", "DGE", "DPS", "DPE"];

  // const code = result?.mentorTypeCode || result;

  // const learnerType = mentorTypes.includes(code as string)
  //   ? code
  //   : mentorTypes[Math.floor(Math.random() * mentorTypes.length)];

  // const config = mentorTypeConfigs[learnerType];
  const configs = useMentorTypeConfigs();
  const config = configs[result];


  return (
    <div className="min-h-screen bg-white p-6 md:p-10 relative">
      {/* Back Button */}
      <div className="mb-[30px] pl-8">
        <Link
          href="/"
          className="text-[#C7C7C7] font-comfortaa text-sm font-400 mb-[15px]"
        >
          &lt; {t('mentorDetails.back_Button')}
        </Link>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-6 lg:px-10 py-4">
        <p className="text-[#004699] font-comfortaa text-[12px] md:text-sm font-bold">
          {t('mentorDetails.header')}
        </p>
        <Image
          src="/images/uni-learn-logos.svg"
          alt="Uni Learn Logo"
          width={164}
          height={72}
          className="h-[36px] md:h-[48px] lg:h-[72px]"
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          background:
            "linear-gradient(192deg, rgba(255,255,255,0.30) 23.37%, rgba(128,185,255,0.30) 52.98%, rgba(61,176,203,0.30) 82.6%)",
        }}
        className="min-h-screen bg-white p-6 md:p-[30px] relative rounded-[12px]"
      >
        {config && (
          <>
            <MentorSummaryCard
              title={t("mentorDetails.uni_Mentor_Type")}
              subtitle={config.subtitle}
              traits={config.traits}
              description={config.description}
              primaryButtonText="Get Full Report"
              secondaryButtonText="Try Another"
              backgroundImageUrl={config.backgroundImage}
            />

            <div
              className="flex h-[15px] items-start self-stretch rounded-[12px] bg-cover bg-no-repeat bg-center mt-[15px]"
              style={{ backgroundImage: `url(${config.saperaterImage})` }}
            ></div>

            <ElementalSelfCard data={config.elementalSelf} />
            <MentorCard {...config.mentorCard} />
            <MentorSupportPanel {...config.mentorSupportPanel} />
          </>
        )}
        <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-between px-4 md:px-6 lg:px-10 py-4">
          <p className="text-[#004699] font-comfortaa text-[12px] md:text-sm font-bold">
            {t('mentorDetails.header')}
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
  );
}
