'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import Award from './icons/Award';
import Message from './icons/Massage'
import Courage from './icons/Courage';
import Share from './icons/Share';
import Download from './icons/Download';

import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LearnerFullReport from './LearnerFullReport';
import { Button } from "@/components/ui/button"
import LearnerSummaryCard from './LearnerSummaryCard';
import { useTranslation } from "react-i18next";

export default function LearnerReport({ result, gender, fullReport }: Props) {
  const { t } = useTranslation();
  const reportRef = useRef<HTMLDivElement>(null);
  const [showFullReport, setShowFullReport] = useState<boolean>(false);

  const generatePDFBlob = async (): Promise<Blob> => {
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

    const pdfBlob = pdf.output('blob');
    return pdfBlob;
  };

  const handleDownloadPDF = async () => {
    const blob = await generatePDFBlob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Uni_Learner_Report.pdf';
    a.click();

    URL.revokeObjectURL(url);
  };

  // const handleDownloadImages = async () => {
  //   const elements = document.querySelectorAll('.report-section');
    
  //   for (let i = 0; i < elements.length; i++) {
  //     const el = elements[i] as HTMLElement;

  //     const canvas = await html2canvas(el, {
  //       scale: 2,
  //       useCORS: true,
  //       ignoreElements: (element) => {
  //         return element.classList?.contains('skip-export');
  //       },
  //     });

  //     // Convert canvas to Blob (JPEG)
  //     canvas.toBlob((blob) => {
  //       if (blob) {
  //         const url = URL.createObjectURL(blob);
  //         const a = document.createElement('a');
  //         a.href = url;
  //         a.download = `Uni_Learner_Report_Page_${i + 1}.jpg`;
  //         a.click();
  //         URL.revokeObjectURL(url);
  //       }
  //     }, 'image/jpeg', 0.95);
  //   }
  // };

  const handleDownloadImages = async () => {
    const sections = document.querySelectorAll<HTMLElement>('.report-section');

    for (let i = 0; i < sections.length; i++) {
      const el = sections[i];

      // Find targets inside this section
      const targets = Array.from(el.querySelectorAll<HTMLElement>('.add-padding'));

      // Save previous inline styles and apply a temporary +4px padding-bottom
      const previousInlinePB: Array<{ node: HTMLElement; pb: string }> = [];
      targets.forEach((node) => {
        previousInlinePB.push({ node, pb: node.style.paddingBottom });

        const computedPB = window.getComputedStyle(node).paddingBottom;
        const current = parseFloat(computedPB) || 0;
        // node.style.paddingBottom = `${current + 16}px`;
        // current is whatever your existing padding base is
        const lang = localStorage.getItem("lang");

        node.style.paddingBottom = `${current + 16}px`;

      });

      try {
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          ignoreElements: (element) => element.classList?.contains('skip-export'),
        });

        // Convert canvas to Blob (JPEG)
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Uni_Learner_Report_Page_${i + 1}.jpg`;
            a.click();
            URL.revokeObjectURL(url);
          }
        }, 'image/jpeg', 0.95);
      } finally {
        previousInlinePB.forEach(({ node, pb }) => {
          node.style.paddingBottom = pb;
        });
      }
    }
  };


  const learnerConfigs: Record<string, {
    image: { female: string; male: string };
    bgGradient: string;
    colorPaletteImage: string;
    title: string;
    titleColor: string;
    badges: string[];
    description: string;
    famousPerson: {
      female: { name: string; image: string };
      male: { name: string; image: string };
    };
    quote: string;
    quoteAuthor: string;
    strengths: string[];
  }> = {
    IMDT: {
      image: {
        female: '/images/SimpleReport-IMDT-Female.png',
        male: '/images/SimpleReport-IMDT-Male.png',
      },
      bgGradient: 'linear-gradient(227deg, rgba(255,255,255,0.30) 0.12%, rgba(128,185,255,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-IMDT.png',
      title: t("IMDT_Summary.title"),
      titleColor: '#004699',
      badges: t("IMDT_Summary.badges", { returnObjects: true }) as string[],
      description: t("IMDT_Summary.description"),
      famousPerson: {
        female: {
          name: t("IMDT_Summary.famousPerson.female.name"),
          image: '/images/Análisedofilme.svg',
        },
        male: {
          name: t("IMDT_Summary.famousPerson.male.name"),
          image: '/images/Gandalf.svg',
        },
      },
      quote: t("IMDT_Summary.quote"),
      quoteAuthor: t("IMDT_Summary.quoteAuthor"),
      strengths: t("IMDT_Summary.strengths", { returnObjects: true }) as string[],
    },
    IMDX: {
      image: {
        female: '/images/SimpleReport-IMDX-Female.png',
        male: '/images/SimpleReport-IMDX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, rgba(255,255,255,0.30) 0.12%, rgba(128,185,255,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-IMDX.png',
      title: t('IMDX_Summary.title'),
      titleColor: '#004699',
      badges: t('IMDX_Summary.badges', { returnObjects: true }) as string[],
      description: t('IMDX_Summary.description'),
      famousPerson: {
        female: {
          name: t('IMDX_Summary.famousPerson.female.name'),
          image: '/images/Moana.svg',
        },
        male: {
          name: t('IMDX_Summary.famousPerson.male.name'),
          image: '/images/NewtScamander.svg',
        },
      },
      quote: t('IMDX_Summary.quote'),
      quoteAuthor: t('IMDX_Summary.quoteAuthor'),
      strengths: t('IMDX_Summary.strengths', { returnObjects: true }) as string[],
    },
    IMCT: {
      image: {
        female: '/images/SimpleReport-IMCT-Female.png',
        male: '/images/SimpleReport-IMCT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, rgba(255,255,255,0.30) 0.12%, rgba(128,185,255,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-IMCT.png',
      title: t('IMCT_Summary.title'),
      titleColor: '#004699',
      badges: t('IMCT_Summary.badges', { returnObjects: true }) as string[],
      description: t('IMCT_Summary.description'),
      famousPerson: {
        female: {
          name: t('IMCT_Summary.famousPerson.female.name'),
          image: '/images/HermioneGranger.svg',
        },
        male: {
          name: t('IMCT_Summary.famousPerson.male.name'),
          image: '/images/WalterWhite.svg',
        },
      },
      quote: t('IMCT_Summary.quote'),
      quoteAuthor: t('IMCT_Summary.quoteAuthor'),
      strengths: t('IMCT_Summary.strengths', { returnObjects: true }) as string[],
    },
    IMCX: {
      image: {
        female: '/images/SimpleReport-IMCX-Female.png',
        male: '/images/SimpleReport-IMCX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, rgba(255,255,255,0.30) 0.12%, rgba(128,185,255,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-IMCX.png',
      title: t('IMCX_Summary.title'),
      titleColor: '#004699',
      badges: t('IMCX_Summary.badges', { returnObjects: true }) as string[],
      description: t('IMCX_Summary.description'),
      famousPerson: {
        female: {
          name: t('IMCX_Summary.famousPerson.female.name'),
          image: '/images/PhoebeBuffay.svg',
        },
        male: {
          name: t('IMCX_Summary.famousPerson.male.name'),
          image: '/images/TonyStark.svg',
        },
      },
      quote: t('IMCX_Summary.quote'),
      quoteAuthor: t('IMCX_Summary.quoteAuthor'),
      strengths: t('IMCX_Summary.strengths', { returnObjects: true }) as string[],
    },
    ISDT: {
      image: {
        female: '/images/SimpleReport-ISDT-Female.png',
        male: '/images/SimpleReport-ISDT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, rgba(255,197,221,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ISDT.png',
      title: t('ISDT_Summary.title'),
      titleColor: '#F25D90',
      badges: t('ISDT_Summary.badges', { returnObjects: true }) as string[],
      description: t('ISDT_Summary.description'),
      famousPerson: {
        female: {
          name: t('ISDT_Summary.famousPerson.female.name'),
          image: '/images/BethHarmon.svg',
        },
        male: {
          name: t('ISDT_Summary.famousPerson.male.name'),
          image: '/images/SheldonCooper.svg',
        },
      },
      quote: t('ISDT_Summary.quote'),
      quoteAuthor: t('ISDT_Summary.quoteAuthor'),
      strengths: t('ISDT_Summary.strengths', { returnObjects: true }) as string[],
    },
    ISDX: {
      image: {
        female: '/images/SimpleReport-ISDX-Female.png',
        male: '/images/SimpleReport-ISDX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, rgba(255,197,221,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ISDX.svg',
      title: t('ISDX_Summary.title'),
      titleColor: '#F25D90',
      badges: t('ISDX_Summary.badges', { returnObjects: true }) as string[],
      description: t('ISDX_Summary.description'),
      famousPerson: {
        female: {
          name: t('ISDX_Summary.famousPerson.female.name'),
          image: '/images/Shuri.svg',
        },
        male: {
          name: t('ISDX_Summary.famousPerson.male.name'),
          image: '/images/HiroHamada&Baymax.svg',
        },
      },
      quote: t('ISDX_Summary.quote'),
      quoteAuthor: t('ISDX_Summary.quoteAuthor'),
      strengths: t('ISDX_Summary.strengths', { returnObjects: true }) as string[],
    },
    ISCT: {
      image: {
        female: '/images/SimpleReport-ISCT-Female.png',
        male: '/images/SimpleReport-ISCT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, rgba(255,197,221,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ISCT.svg',
      title: t('ISCT_Summary.title'),
      titleColor: '#F25D90',
      badges: t('ISCT_Summary.badges', { returnObjects: true }) as string[],
      description: t('ISCT_Summary.description'),
      famousPerson: {
        female: {
          name: t('ISCT_Summary.famousPerson.female.name'),
          image: '/images/AryaStark.svg',
        },
        male: {
          name: t('ISCT_Summary.famousPerson.male.name'),
          image: '/images/MichaelScofield.svg',
        },
      },
      quote: t('ISCT_Summary.quote'),
      quoteAuthor: t('ISCT_Summary.quoteAuthor'),
      strengths: t('ISCT_Summary.strengths', { returnObjects: true }) as string[],
    },
    ISCX: {
      image: {
        female: '/images/SimpleReport-ISCX-Female.png',
        male: '/images/SimpleReport-ISCX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, rgba(255,197,221,0.30) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ISCX.svg',
      title: t('ISCX_Summary.title'),
      titleColor: '#F25D90',
      badges: t('ISCX_Summary.badges', { returnObjects: true }) as string[],
      description: t('ISCX_Summary.description'),
      famousPerson: {
        female: {
          name: t('ISCX_Summary.famousPerson.female.name'),
          image: '/images/AméliePoulain.svg',
        },
        male: {
          name: t('ISCX_Summary.famousPerson.male.name'),
          image: '/images/EthanHunt.svg',
        },
      },
      quote: t('ISCX_Summary.quote'),
      quoteAuthor: t('ISCX_Summary.quoteAuthor'),
      strengths: t('ISCX_Summary.strengths', { returnObjects: true }) as string[],
    },
    ESCX: {
      image: {
        female: '/images/SimpleReport-ESCX-Female.png',
        male: '/images/SimpleReport-ESCX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Mustard, rgba(249,213,61,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ESCX.svg',
      title: t('ESCX_Summary.title'),
      titleColor: 'rgba(255,167,45,1)',
      badges: t('ESCX_Summary.badges', { returnObjects: true }) as string[],
      description: t('ESCX_Summary.description'),
      famousPerson: {
        female: {
          name: t('ESCX_Summary.famousPerson.female.name'),
          image: '/images/Atlanna.svg',
        },
        male: {
          name: t('ESCX_Summary.famousPerson.male.name'),
          image: '/images/HarryPotter.svg',
        },
      },
      quote: t('ESCX_Summary.quote'),
      quoteAuthor: t('ESCX_Summary.quoteAuthor'),
      strengths: t('ESCX_Summary.strengths', { returnObjects: true }) as string[],
    },
    ESCT: {
      image: {
        female: '/images/SimpleReport-ESCT-Female.png',
        male: '/images/SimpleReport-ESCT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Mustard, rgba(249,213,61,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ESCT.svg',
      title: t('ESCT_Summary.title'),
      titleColor: 'rgba(255,167,45,1)',
      badges: t('ESCT_Summary.badges', { returnObjects: true }) as string[],
      description: t('ESCT_Summary.description'),
      famousPerson: {
        female: {
          name: t('ESCT_Summary.famousPerson.female.name'),
          image: '/images/Mulan.svg',
        },
        male: {
          name: t('ESCT_Summary.famousPerson.male.name'),
          image: '/images/JohnWick.svg',
        },
      },
      quote: t('ESCT_Summary.quote'),
      quoteAuthor: t('ESCT_Summary.quoteAuthor'),
      strengths: t('ESCT_Summary.strengths', { returnObjects: true }) as string[],
    },
    ESDX: {
      image: {
        female: '/images/SimpleReport-ESDX-Female.png',
        male: '/images/SimpleReport-ESDX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Mustard, rgba(249,213,61,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ESDX.svg',
      title: t('ESDX_Summary.title'),
      titleColor: 'rgba(255,167,45,1)',
      badges: t('ESDX_Summary.badges', { returnObjects: true }) as string[],
      description: t('ESDX_Summary.description'),
      famousPerson: {
        female: {
          name: t('ESDX_Summary.famousPerson.female.name'),
          image: '/images/HarleyQuinn.svg',
        },
        male: {
          name: t('ESDX_Summary.famousPerson.male.name'),
          image: '/images/Gru.svg',
        },
      },
      quote: t('ESDX_Summary.quote'),
      quoteAuthor: t('ESDX_Summary.quoteAuthor'),
      strengths: t('ESDX_Summary.strengths', { returnObjects: true }) as string[],
    },
    ESDT: {
      image: {
        female: '/images/SimpleReport-ESDT-Female.png',
        male: '/images/SimpleReport-ESDT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Mustard, rgba(249,213,61,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-ESDT.svg',
      title: t('ESDT_Summary.title'),
      titleColor: 'rgba(255,167,45,1)',
      badges: t('ESDT_Summary.badges', { returnObjects: true }) as string[],
      description: t('ESDT_Summary.description'),
      famousPerson: {
        female: {
          name: t('ESDT_Summary.famousPerson.female.name'),
          image: '/images/Nikita.svg',
        },
        male: {
          name: t('ESDT_Summary.famousPerson.male.name'),
          image: '/images/FrankUnderwood.svg',
        },
      },
      quote: t('ESDT_Summary.quote'),
      quoteAuthor: t('ESDT_Summary.quoteAuthor'),
      strengths: t('ESDT_Summary.strengths', { returnObjects: true }) as string[],
    },
    EMCX: {
      image: {
        female: '/images/SimpleReport-EMCX-Female.png',
        male: '/images/SimpleReport-EMCX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Moonstone, rgba(61,176,203,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-EMCX.svg',
      title: t('EMCX_Summary.title'),
      titleColor: 'rgba(61,176,203,1)',
      badges: t('EMCX_Summary.badges', { returnObjects: true }) as string[],
      description: t('EMCX_Summary.description'),
      famousPerson: {
        female: {
          name: t('EMCX_Summary.famousPerson.female.name'),
          image: '/images/AnnaliseKeating.svg',
        },
        male: {
          name: t('EMCX_Summary.famousPerson.male.name'),
          image: '/images/Deadpool.svg',
        },
      },
      quote: t('EMCX_Summary.quote'),
      quoteAuthor: t('EMCX_Summary.quoteAuthor'),
      strengths: t('EMCX_Summary.strengths', { returnObjects: true }) as string[],
    },
    EMCT: {
      image: {
        female: '/images/SimpleReport-EMCT-Female.png',
        male: '/images/SimpleReport-EMCT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Moonstone, rgba(61,176,203,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-EMCT.svg',
      title: t('EMCT_Summary.title'),
      titleColor: 'rgba(61,176,203,1)',
      badges: t('EMCT_Summary.badges', { returnObjects: true }) as string[],
      description: t('EMCT_Summary.description'),
      famousPerson: {
        female: {
          name: t('EMCT_Summary.famousPerson.female.name'),
          image: '/images/DaenerysTargaryen.svg',
        },
        male: {
          name: t('EMCT_Summary.famousPerson.male.name'),
          image: '/images/ProfessorX.svg',
        },
      },
      quote: t('EMCT_Summary.quote'),
      quoteAuthor: t('EMCT_Summary.quoteAuthor'),
      strengths: t('EMCT_Summary.strengths', { returnObjects: true }) as string[],
    },
    EMDX: {
      image: {
        female: '/images/SimpleReport-EMDX-Female.png',
        male: '/images/SimpleReport-EMDX-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Moonstone, rgba(61,176,203,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-EMDX.svg',
      title: t('EMDX_Summary.title'),
      titleColor: 'rgba(61,176,203,1)',
      badges: t('EMDX_Summary.badges', { returnObjects: true }) as string[],
      description: t('EMDX_Summary.description'),
      famousPerson: {
        female: {
          name: t('EMDX_Summary.famousPerson.female.name'),
          image: '/images/JudyHopps.svg',
        },
        male: {
          name: t('EMDX_Summary.famousPerson.male.name'),
          image: '/images/ThomasShelby.svg',
        },
      },
      quote: t('EMDX_Summary.quote'),
      quoteAuthor: t('EMDX_Summary.quoteAuthor'),
      strengths: t('EMDX_Summary.strengths', { returnObjects: true }) as string[],
    },
    EMDT: {
      image: {
        female: '/images/SimpleReport-EMDT-Female.png',
        male: '/images/SimpleReport-EMDT-Male.png',
      },
      bgGradient:
        'linear-gradient(227deg, var(--Colors-Pure-White, rgba(255,255,255,0.30)) 0.12%, var(--Colors-Moonstone, rgba(61,176,203,0.30)) 99.88%)',
      colorPaletteImage: '/images/ColorPallet-EMDT.svg',
      title: t('EMDT_Summary.title'),
      titleColor: 'rgba(61,176,203,1)',
      badges: t('EMDT_Summary.badges', { returnObjects: true }) as string[],
      description: t('EMDT_Summary.description'),
      famousPerson: {
        female: {
          name: t('EMDT_Summary.famousPerson.female.name'),
          image: '/images/Furiosa.svg',
        },
        male: {
          name: t('EMDT_Summary.famousPerson.male.name'),
          image: '/images/SteveRogers.svg',
        },
      },
      quote: t('EMDT_Summary.quote'),
      quoteAuthor: t('EMDT_Summary.quoteAuthor'),
      strengths: t('EMDT_Summary.strengths', { returnObjects: true }) as string[],
    },
  };

  const learnerType = result?.learner_type_code || result;
  // const learnerType = 'ESCX';
  const genderKey = gender?.toLowerCase() as 'female' | 'male';
  // const genderKey = 'female';

  const config = learnerConfigs[learnerType || ''];

  const handleShare = useCallback(() => {
    const url = `${window.location.origin}/report?result=${learnerType}&gender=${genderKey}`;

    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard!');
      })
      .catch(() => {
        alert('Failed to copy link.');
      });
  }, [learnerType, genderKey]);

  
  useEffect(() => {
    if (fullReport) setShowFullReport(true);
  }, [fullReport]);
  return (
    <>

      {showFullReport ? (

        <LearnerFullReport onBack={() => setShowFullReport(false)} learnerType={learnerType} genderKey={genderKey} colorPaletteImage={config.colorPaletteImage} bgGradient={config.bgGradient} />

      ) : (
        <div className="min-h-screen bg-white p-6 md:p-10 relative">

          {/* Back + Share Buttons */}
          <div className="mb-[30px]">
              <Link href="/" className="text-[#C7C7C7] font-comfortaa text-sm font-700 mb-[15px] transition-transform hover:scale-105">
                &lt; {t('learnerDetails.back_Button')}
            </Link>

            <div className="mt-[15px] flex items-center gap-x-3">
                <Button
                  onClick={handleShare}
                  className="
    flex lg:w-[140px] lg:h-[42px] items-center justify-center gap-2
    px-8 py-3
    rounded-full
    bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB]
    sm:hover:from-[#3DB0CB] sm:hover:to-[#80B9FF]
    text-white font-comfortaa text-base font-bold
    shadow-md sm:hover:shadow-lg
    transition-transform duration-300
    hover:scale-105 active:scale-95
  "
                >
                  <Share />
                  {t('learnerDetails.share')}
                </Button>

              <Button
                  onClick={handleDownloadImages}
                  className="flex w-[170px] h-[42px] lg:w-[210px] lg:h-[42px] items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#80B9FF] 
    text-transparent bg-clip-text bg-gradient-to-r from-[#80B9FF] to-[#3DB0CB] 
    text-[16px] font-bold font-comfortaa ml-[10px]
    transition transform active:scale-95 duration-100  hover:scale-105 transition-transform duration-300"
              >
                <Download />
                  {t('learnerDetails.save_Album')}
              </Button>


            </div>
          </div>

          {/* Report Card */}


          {/* Report Card */}
          {config ? (
            <LearnerSummaryCard
              imageSrc={config.image[genderKey]}
              learnerType={learnerType}
              colorPaletteImage={config.colorPaletteImage}
              learnerTitle={config.title}
              titleColor={config.titleColor}
              bgGradient={config.bgGradient}
              badges={config.badges}
              description={config.description}
              famousPerson={config.famousPerson[genderKey]}
              quote={config.quote}
              quoteAuthor={config.quoteAuthor}
              strengths={config.strengths}
              // onGetFullReport={() => setShowFullReport(true)}
                onGetFullReport={() => {
                  window.open(
                    `${process.env.NEXT_APP_FRONTEND_BASE_URL}/get_full_report?result=${learnerType}&gender=${genderKey}&fullReport=true`,
                    '_blank'
                  );
                }}
              onTryAnother={() => console.log('Try Another Clicked')}
              ref={reportRef}
              fullReport={fullReport}
            />
          ) : null}


          {/* SimpleReport-IMDT-Male.png */}
        </div>
      )}

      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        <LearnerFullReport  onBack={() => { }} learnerType={learnerType} genderKey={genderKey} colorPaletteImage={config.colorPaletteImage} bgGradient={config.bgGradient} />
      </div>
    </>
  );
}
