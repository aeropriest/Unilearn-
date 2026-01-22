import { useTranslation } from "react-i18next";

export const useMentorTypeConfigs = () => {
  const { t } = useTranslation(); // ✅ Hook goes here

  const mentorTypeConfigs: Record<string, {
    titleColor: string;
    subtitle: string;
    traits: string[];
    description: string;
    backgroundImage: string;
    saperaterImage: string;
    elementalSelf: {
      title: string;
      titleColor: string;
      elements: {
        type: string;
        subtitle: string;
        label: string;
        description: string;
        typeColor: string;
        subtitleColor: string;
        labelColor: string;
        descriptionColor: string;
      }[];
    };
    mentorCard: {
      imageSrc: string;
      coreStrengths: { title: string; titleColor: string; desc: string }[];
      essenceText: string;
      essenceTextColor: string;
      quote: string;
      quoteColor: string;
      svgColor: string;
      author: { name: string; nameColor: string; avatar: string };
    };
    mentorSupportPanel: {
      shineText: string;
      titleColor: string;
      forecastTitle: string;
      forecastText: string;
      shineDescription: string;
      growthTitleColor: string;
      projectTitle: string;
      projectDescription: string;
      subTitleColor: string;
      growthEdges: { title: string; description: string }[];
    };
  }> = {
    PGS: {
      titleColor: "#004699",
      subtitle: t("PGS.subtitle"),
      traits: t("PGS.traits", { returnObjects: true }) as string[],
      description: t("PGS.description"),
      backgroundImage: "/images/HeroPGS.jpg",
      saperaterImage: "/images/PGSColorPallet.svg",

      elementalSelf: {
        title: t("PGS.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("PGS.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "#004699",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "#1574C2",
          descriptionColor: "#56606C",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsPGS.jpg",
        coreStrengths: (t("PGS.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(21, 116, 194, 1)",
        })),
        essenceText: t("PGS.mentorCard.essenceText"),
        essenceTextColor: "rgba(86, 96, 108, 1)",
        quote: t("PGS.mentorCard.quote"),
        quoteColor: "rgba(86, 96, 108, 1)",
        svgColor: "rgba(169, 171, 170, 0.6)",
        author: {
          name: t("PGS.mentorCard.author"),
          nameColor: "rgba(169, 171, 170, 1)",
          avatar: "/images/JohnFKennedy.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("PGS.mentorSupportPanel.shineText"),
        titleColor: "#004699",
        subTitleColor: "rgba(86, 96, 108, 1)",
        growthTitleColor: "#56606C",
        forecastTitle: t("PGS.mentorSupportPanel.forecastTitle"),
        forecastText: t("PGS.mentorSupportPanel.forecastText"),
        shineDescription: t("PGS.mentorSupportPanel.shineDescription"),
        projectTitle: t("PGS.mentorSupportPanel.projectTitle"),
        projectDescription: t("PGS.mentorSupportPanel.projectDescription"),
        growthEdges: t("PGS.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    PGE: {
      titleColor: "#004699",
      subtitle: t("PGE.subtitle"),
      traits: t("PGE.traits", { returnObjects: true }) as string[],
      description: t("PGE.description"),
      backgroundImage: "/images/HeroPGE.jpg",
      saperaterImage: "/images/PGEColorPallet.svg",

      elementalSelf: {
        title: t("PGE.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("PGE.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "#004699",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "#001F74",
          descriptionColor: "#316383",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsPGE.jpg",
        coreStrengths: (t("PGE.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(0, 31, 116, 1)",
        })),
        essenceText: t("PGE.mentorCard.essenceText"),
        essenceTextColor: "rgba(49, 99, 131, 1)",
        quote: t("PGE.mentorCard.quote"),
        quoteColor: "rgba(126, 72, 158, 1)",
        svgColor: "rgba(135, 110, 165, 0.6)",
        author: {
          name: t("PGE.mentorCard.author"),
          nameColor: "rgba(63, 46, 125, 0.8)",
          avatar: "/images/CarlSagan.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("PGE.mentorSupportPanel.shineText"),
        titleColor: "#004699",
        growthTitleColor: "#004699",
        subTitleColor: "#56606C",
        forecastTitle: t("PGE.mentorSupportPanel.forecastTitle"),
        forecastText: t("PGE.mentorSupportPanel.forecastText"),
        shineDescription: t("PGE.mentorSupportPanel.shineDescription"),
        projectTitle: t("PGE.mentorSupportPanel.projectTitle"),
        projectDescription: t("PGE.mentorSupportPanel.projectDescription"),
        growthEdges: t("PGE.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    PPS: {
      titleColor: "#004699",
      subtitle: t("PPS.subtitle"),
      traits: t("PPS.traits", { returnObjects: true }) as string[],
      description: t("PPS.description"),
      backgroundImage: "/images/HeroPPS.jpg",
      saperaterImage: "/images/PPSColorPallet.svg",

      elementalSelf: {
        title: t("PPS.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("PPS.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "#004699",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "#001F74",
          descriptionColor: "#316383",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsPPS.jpg",
        coreStrengths: (t("PPS.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(0, 31, 116, 1)",
        })),
        essenceText: t("PPS.mentorCard.essenceText"),
        essenceTextColor: "rgba(49, 99, 131, 1)",
        quote: t("PPS.mentorCard.quote"),
        quoteColor: "rgba(163, 118, 97, 1)",
        svgColor: "rgba(225, 206, 188, 1)",
        author: {
          name: t("PPS.mentorCard.author"),
          nameColor: "rgba(251, 151, 76, 1)",
          avatar: "/images/CarlJung.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("PPS.mentorSupportPanel.shineText"),
        titleColor: "#004699",
        growthTitleColor: "rgba(0, 31, 116, 1)",
        subTitleColor: "rgba(49, 99, 131, 1)",
        forecastTitle: t("PPS.mentorSupportPanel.forecastTitle"),
        forecastText: t("PPS.mentorSupportPanel.forecastText"),
        shineDescription: t("PPS.mentorSupportPanel.shineDescription"),
        projectTitle: t("PPS.mentorSupportPanel.projectTitle"),
        projectDescription: t("PPS.mentorSupportPanel.projectDescription"),
        growthEdges: t("PPS.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    PPE: {
      titleColor: "#004699",
      subtitle: t("PPE.subtitle"),
      traits: t("PPE.traits", { returnObjects: true }) as string[],
      description: t("PPE.description"),
      backgroundImage: "/images/HeroPPE.jpg",
      saperaterImage: "/images/PPEColorPallet.svg",

      elementalSelf: {
        title: t("PPE.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("PPE.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "#004699",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "rgba(30, 74, 121, 1)",
          descriptionColor: "rgba(69, 95, 132, 1)",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsPPE.jpg",
        coreStrengths: (t("PPE.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(30, 74, 121, 1)",
        })),
        essenceText: t("PPE.mentorCard.essenceText"),
        essenceTextColor: "rgba(69, 95, 132, 1)",
        quote: t("PPE.mentorCard.quote"),
        quoteColor: "rgba(100, 150, 187, 1)",
        svgColor: "rgba(181, 207, 224, 1)",
        author: {
          name: t("PPE.mentorCard.author"),
          nameColor: "rgba(100, 150, 187, 1)",
          avatar: "/images/RachelNaomiRemen.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("PPE.mentorSupportPanel.shineText"),
        titleColor: "rgba(0, 70, 153, 1)",
        growthTitleColor: "rgba(30, 74, 121, 1)",
        subTitleColor: "rgba(69, 95, 132, 1)",
        forecastTitle: t("PPE.mentorSupportPanel.forecastTitle"),
        forecastText: t("PPE.mentorSupportPanel.forecastText"),
        shineDescription: t("PPE.mentorSupportPanel.shineDescription"),
        projectTitle: t("PPE.mentorSupportPanel.projectTitle"),
        projectDescription: t("PPE.mentorSupportPanel.projectDescription"),
        growthEdges: t("PPE.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    DGS: {
      titleColor: "#004699",
      subtitle: t("DGS.subtitle"),
      traits: t("DGS.traits", { returnObjects: true }) as string[],
      description: t("DGS.description"),
      backgroundImage: "/images/HeroDGS.jpg",
      saperaterImage: "/images/DGSColorPallet.svg",

      elementalSelf: {
        title: t("DGS.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("DGS.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "rgba(0, 70, 153, 1)",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "rgba(43, 66, 6, 1)",
          descriptionColor: "rgba(78, 53, 15, 1)",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsDGS.jpg",
        coreStrengths: (t("DGS.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(43, 66, 6, 1)",
        })),
        essenceText: t("DGS.mentorCard.essenceText"),
        essenceTextColor: "rgba(78, 53, 15, 1)",
        quote: t("DGS.mentorCard.quote"),
        quoteColor: "rgba(100, 133, 5, 1)",
        svgColor: "rgba(212, 196, 58, 1)",
        author: {
          name: t("DGS.mentorCard.author"),
          nameColor: "rgba(161, 156, 6, 1)",
          avatar: "/images/AudreyHepburn.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("DGS.mentorSupportPanel.shineText"),
        titleColor: "rgba(0, 70, 153, 1)",
        growthTitleColor: "rgba(43, 66, 6, 1)",
        subTitleColor: "rgba(78, 53, 15, 1)",
        forecastTitle: t("DGS.mentorSupportPanel.forecastTitle"),
        forecastText: t("DGS.mentorSupportPanel.forecastText"),
        shineDescription: t("DGS.mentorSupportPanel.shineDescription"),
        projectTitle: t("DGS.mentorSupportPanel.projectTitle"),
        projectDescription: t("DGS.mentorSupportPanel.projectDescription"),
        growthEdges: t("DGS.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    DGE: {
      titleColor: "#004699",
      subtitle: t("DGE.subtitle"),
      traits: t("DGE.traits", { returnObjects: true }) as string[],
      description: t("DGE.description"),
      backgroundImage: "/images/HeroDGE.jpg",
      saperaterImage: "/images/DGEColorPallet.svg",

      elementalSelf: {
        title: t("DGE.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("DGE.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "rgba(0, 70, 153, 1)",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "rgba(84, 59, 32, 1)",
          descriptionColor: "rgba(71, 87, 96, 1)",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsDGE.jpg",
        coreStrengths: (t("DGE.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(84, 59, 32, 1)",
        })),
        essenceText: t("DGE.mentorCard.essenceText"),
        essenceTextColor: "rgba(71, 87, 96, 1)",
        quote: t("DGE.mentorCard.quote"),
        quoteColor: "rgba(56, 80, 53, 1)",
        svgColor: "rgba(252, 195, 60, 0.6)",
        author: {
          name: t("DGE.mentorCard.author"),
          nameColor: "rgba(155, 139, 129, 1)",
          avatar: "/images/JonKabat-Zinn.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("DGE.mentorSupportPanel.shineText"),
        titleColor: "rgba(0, 70, 153, 1)",
        growthTitleColor: "rgba(84, 59, 32, 1)",
        subTitleColor: "rgba(71, 87, 96, 1)",
        forecastTitle: t("DGE.mentorSupportPanel.forecastTitle"),
        forecastText: t("DGE.mentorSupportPanel.forecastText"),
        shineDescription: t("DGE.mentorSupportPanel.shineDescription"),
        projectTitle: t("DGE.mentorSupportPanel.projectTitle"),
        projectDescription: t("DGE.mentorSupportPanel.projectDescription"),
        growthEdges: t("DGE.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    DPS: {
      titleColor: "#004699",
      subtitle: t("DPS.subtitle"),
      traits: t("DPS.traits", { returnObjects: true }) as string[],
      description: t("DPS.description"),
      backgroundImage: "/images/HeroDPS.jpg",
      saperaterImage: "/images/DPSColorPallet.svg",

      elementalSelf: {
        title: t("DPS.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("DPS.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "rgba(0, 70, 153, 1)",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "rgba(76, 48, 23, 1)",
          descriptionColor: "rgba(71, 87, 96, 1)",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsDPS.jpg",
        coreStrengths: (t("DPS.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(76, 48, 23, 1)",
        })),
        essenceText: t("DPS.mentorCard.essenceText"),
        essenceTextColor: "rgba(100, 66, 38, 1)",
        quote: t("DPS.mentorCard.quote"),
        quoteColor: "rgba(74, 95, 116, 1)",
        svgColor: "rgba(192, 175, 154, 0.6)",
        author: {
          name: t("DPS.mentorCard.author"),
          nameColor: "rgba(174, 124, 71, 1)",
          avatar: "/images/LenaHorne.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("DPS.mentorSupportPanel.shineText"),
        titleColor: "rgba(0, 70, 153, 1)",
        growthTitleColor: "rgba(76, 48, 23, 1)",
        subTitleColor: "rgba(100, 66, 38, 1)",
        forecastTitle: t("DPS.mentorSupportPanel.forecastTitle"),
        forecastText: t("DPS.mentorSupportPanel.forecastText"),
        shineDescription: t("DPS.mentorSupportPanel.shineDescription"),
        projectTitle: t("DPS.mentorSupportPanel.projectTitle"),
        projectDescription: t("DPS.mentorSupportPanel.projectDescription"),
        growthEdges: t("DPS.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
    DPE: {
      titleColor: "#004699",
      subtitle: t("DPE.subtitle"),
      traits: t("DPE.traits", { returnObjects: true }) as string[],
      description: t("DPE.description"),
      backgroundImage: "/images/HeroDPE.jpg",
      saperaterImage: "/images/DPEColorPallet.svg",

      elementalSelf: {
        title: t("DPE.elementalSelf.title"),
        titleColor: "#004699",
        elements: (t("DPE.elementalSelf.elements", {
          returnObjects: true,
        }) as any[]).map((e) => ({
          ...e,
          typeColor: "rgba(0, 70, 153, 1)",
          subtitleColor: "rgba(0, 70, 153, 0.60)",
          labelColor: "rgba(105, 128, 176, 1)",
          descriptionColor: "rgba(140, 143, 175, 1)",
        })),
      },

      mentorCard: {
        imageSrc: "/images/CoreStrengthsDPE.jpg",
        coreStrengths: (t("DPE.mentorCard.coreStrengths", {
          returnObjects: true,
        }) as any[]).map((cs) => ({
          ...cs,
          titleColor: "rgba(105, 128, 176, 1)",
        })),
        essenceText: t("DPE.mentorCard.essenceText"),
        essenceTextColor: "rgba(140, 143, 175, 1)",
        quote: t("DPE.mentorCard.quote"),
        quoteColor: "rgba(103, 140, 201, 1)",
        svgColor: "rgba(238, 199, 182, 0.8)",
        author: {
          name: t("DPE.mentorCard.author"),
          nameColor: "rgba(169, 183, 217, 1)",
          avatar: "/images/HermannHesse.svg",
        },
      },

      mentorSupportPanel: {
        shineText: t("DPE.mentorSupportPanel.shineText"),
        titleColor: "rgba(0, 70, 153, 1)",
        growthTitleColor: "rgba(105, 128, 176, 1)",
        subTitleColor: "rgba(140, 143, 175, 1)",
        forecastTitle: t("DPE.mentorSupportPanel.forecastTitle"),
        forecastText: t("DPE.mentorSupportPanel.forecastText"),
        shineDescription: t("DPE.mentorSupportPanel.shineDescription"),
        projectTitle: t("DPE.mentorSupportPanel.projectTitle"),
        projectDescription: t("DPE.mentorSupportPanel.projectDescription"),
        growthEdges: t("DPE.mentorSupportPanel.growthEdges", {
          returnObjects: true,
        }) as { title: string; description: string }[],
      },
    },
  };

  return mentorTypeConfigs;
};

