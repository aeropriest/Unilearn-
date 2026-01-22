import React, { forwardRef } from 'react';
import Discovery from '@/components/icons/Discovery';
import Compass from '@/components/icons/Compass';
import type { DeepInsightType } from '@/types/DeepInsightType';
import Workplace from '@/components/icons/Workplace';
import Candle from '@/components/icons/Candle';
import Lamp from '@/components/icons/Lamp';
import Magicball from '@/components/icons/Magicball';
import Magicwand from '@/components/icons/Magicwand';
import EyeCare from './icons/EyeCare';
import Ear from './icons/Ear';
import Nose from './icons/Nose';
import Reach from './icons/Reach';
import Anchor from './icons/Anchor';
import Bell from './icons/Bell';
import Push from './icons/Push';
import Pinwheel from './icons/Pinwheel';
import Atmosphere from './icons/Atmosphere';
import Earth from './icons/Earth';
import Storm from './icons/Storm';
import Sunlight from './icons/Sunlight';
import { useTranslation } from "react-i18next";


type LearnerConfigType = {
  titleColor: string;
  image: { female: string; male: string };
  bg: string;
  colorPaletteImage: string;
  title: string;
  badges: string[];
  famousPerson: {
    female: { name: string; image: string };
    male: { name: string; image: string };
  };
  quote: string;
  quoteAuthor: string;
  strengths: string[];
  detail: string;
  motivation: {
    label: string;
    value: string;
    description: string;
  };
  cognition: {
    label: string;
    value: string;
    description: string;
  };
  environment: {
    label: string;
    value: string;
    description: string;
  };
  approach: {
    label: string;
    value: string;
    description: string;
  };
  DeepInsight?: DeepInsightType;
  LearningEnvironment?: any;
  MentorMatch?: any;
  ProjectSuggestion?: any;
  LearningWeatherReport?: any;
  GrowthForecast?: any;
  Inspired?: any;
};

export const useLearnerConfigs = (): Record<string, LearnerConfigType> => {
  const { t } = useTranslation();

  return {
    // config/IMDT_FullReport.ts
    IMDT : {
      titleColor: '#004699',
      image: {
        female: '/images/SimpleReport-IMDT-Female.png',
        male: '/images/SimpleReport-IMDT-Male.png',
      },
      bg: "/images/fullReport1.jpg",
      colorPaletteImage: '/images/ColorPallet-IMCX.svg',
      title: t('IMDT_FullReport.title'),
      badges: t('IMDT_FullReport.badges', { returnObjects: true }) as string[],
      famousPerson: {
        female: {
          name: t('IMDT_FullReport.famousPerson.female.name'),
          image: '/images/MarieCurie.svg',
        },
        male: {
          name: t('IMDT_FullReport.famousPerson.male.name'),
          image: '/images/NikolaTesla.svg',
        },
      },
      quote: t('IMDT_FullReport.quote'),
      quoteAuthor: t('IMDT_FullReport.quoteAuthor'),
      strengths: t('IMDT_FullReport.strengths', { returnObjects: true }) as string[],
      detail: t('IMDT_FullReport.detail'),

      motivation: {
        label: t('IMDT_FullReport.motivation.label'),
        value: t('IMDT_FullReport.motivation.value'),
        description: t('IMDT_FullReport.motivation.description'),
      },
      cognition: {
        label: t('IMDT_FullReport.cognition.label'),
        value: t('IMDT_FullReport.cognition.value'),
        description: t('IMDT_FullReport.cognition.description'),
      },
      environment: {
        label: t('IMDT_FullReport.environment.label'),
        value: t('IMDT_FullReport.environment.value'),
        description: t('IMDT_FullReport.environment.description'),
      },
      approach: {
        label: t('IMDT_FullReport.approach.label'),
        value: t('IMDT_FullReport.approach.value'),
        description: t('IMDT_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#004699'} />,
          title: t('IMDT_FullReport.DeepInsight.left.title'),
          titleColor: '#004699',
          highlight: t('IMDT_FullReport.DeepInsight.left.highlight'),
          description: t('IMDT_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#004699'} />,
          subtitle: t('IMDT_FullReport.DeepInsight.right.subtitle'),
          titleColor: '#004699',
          intro: t('IMDT_FullReport.DeepInsight.right.intro'),
          strategies: [
            {
              color: 'rgba(0,70,153,0.5)',
              title: t('IMDT_FullReport.DeepInsight.right.strategies.0.title'),
              text: t('IMDT_FullReport.DeepInsight.right.strategies.0.text'),
            },
            {
              color: 'rgba(0,70,153,0.80)',
              title: t('IMDT_FullReport.DeepInsight.right.strategies.1.title'),
              text: t('IMDT_FullReport.DeepInsight.right.strategies.1.text'),
            },
            {
              color: '#004699',
              title: t('IMDT_FullReport.DeepInsight.right.strategies.2.title'),
              text: t('IMDT_FullReport.DeepInsight.right.strategies.2.text'),
            },
          ],
          tools: [
            { name: t('IMDT_FullReport.DeepInsight.right.tools.0.name'), description: t('IMDT_FullReport.DeepInsight.right.tools.0.description') },
            { name: t('IMDT_FullReport.DeepInsight.right.tools.1.name'), description: t('IMDT_FullReport.DeepInsight.right.tools.1.description') },
            { name: t('IMDT_FullReport.DeepInsight.right.tools.2.name'), description: t('IMDT_FullReport.DeepInsight.right.tools.2.description') },
            { name: t('IMDT_FullReport.DeepInsight.right.tools.3.name'), description: t('IMDT_FullReport.DeepInsight.right.tools.3.description') },
          ],
        },
      },

      LearningEnvironment: {
        icon: <Workplace />,
        title: t('IMDT_FullReport.LearningEnvironment.title'),
        titleColor: '#004699',
        subTitleColor: 'rgba(0, 70, 153, 0.60)',
        subtitle: t('IMDT_FullReport.LearningEnvironment.subtitle'),
        visualClarity: {
          description: t('IMDT_FullReport.LearningEnvironment.visualClarity.description'),
        },
        zones: [
          {
            icon: <Candle />,
            title: t('IMDT_FullReport.LearningEnvironment.zones.0.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            verb: t('IMDT_FullReport.LearningEnvironment.zones.0.verb'),
            description: t('IMDT_FullReport.LearningEnvironment.zones.0.description'),
          },
          {
            icon: <Lamp />,
            title: t('IMDT_FullReport.LearningEnvironment.zones.1.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            verb: t('IMDT_FullReport.LearningEnvironment.zones.1.verb'),
            description: t('IMDT_FullReport.LearningEnvironment.zones.1.description'),
          },
          {
            icon: <Magicball />,
            title: t('IMDT_FullReport.LearningEnvironment.zones.2.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            verb: t('IMDT_FullReport.LearningEnvironment.zones.2.verb'),
            description: t('IMDT_FullReport.LearningEnvironment.zones.2.description'),
          },
          {
            icon: <Magicwand />,
            title: t('IMDT_FullReport.LearningEnvironment.zones.3.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            verb: t('IMDT_FullReport.LearningEnvironment.zones.3.verb'),
            description: t('IMDT_FullReport.LearningEnvironment.zones.3.description'),
          },
        ],
        tools: [
          {
            title: t('IMDT_FullReport.LearningEnvironment.tools.0.title'),
            description: t('IMDT_FullReport.LearningEnvironment.tools.0.description'),
            result: t('IMDT_FullReport.LearningEnvironment.tools.0.result'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
          },
          {
            title: t('IMDT_FullReport.LearningEnvironment.tools.1.title'),
            description: t('IMDT_FullReport.LearningEnvironment.tools.1.description'),
            result: t('IMDT_FullReport.LearningEnvironment.tools.1.result'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
          },
          {
            title: t('IMDT_FullReport.LearningEnvironment.tools.2.title'),
            description: t('IMDT_FullReport.LearningEnvironment.tools.2.description'),
            result: t('IMDT_FullReport.LearningEnvironment.tools.2.result'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
          },
          {
            title: t('IMDT_FullReport.LearningEnvironment.tools.3.title'),
            description: t('IMDT_FullReport.LearningEnvironment.tools.3.description'),
            result: t('IMDT_FullReport.LearningEnvironment.tools.3.result'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
          },
        ],
        sensoryFlow: {
          left: {
            title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            subtitle: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
            zones: [
              {
                icon: <EyeCare />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: '',
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description'),
              },
              {
                icon: <Ear />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: '',
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description'),
              },
              {
                icon: <Nose />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: '',
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description'),
              },
              {
                icon: <Reach />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: '',
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description'),
              },
            ],
          },
          right: {
            title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0,70,153,0.6)',
            subtitle: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
            anchors: [
              {
                icon: <Anchor />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'),
                descriptionTitle: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'),
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description'),
              },
              {
                icon: <Bell />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'),
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description'),
              },
              {
                icon: <Push />,
                title: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'),
                titleColor: '#004699',
                subTitleColor: 'rgba(0,70,153,0.6)',
                verb: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'),
                description: t('IMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description'),
              },
            ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#004699',
        title: t('IMDT_FullReport.MentorMatch.title'),
        description: t('IMDT_FullReport.MentorMatch.description'),
        benefits: [
          { color: 'rgba(0,70,153,0.5)', text: t('IMDT_FullReport.MentorMatch.benefits.0.text') },
          { color: 'rgba(0,70,153,0.80)', text: t('IMDT_FullReport.MentorMatch.benefits.1.text') },
          { color: '#004699', text: t('IMDT_FullReport.MentorMatch.benefits.2.text') },
        ],
        mentorTypes: [
          {
            image: '/images/PGSEMCT.png',
            name: t('IMDT_FullReport.MentorMatch.mentorTypes.0.name'),
            description: t('IMDT_FullReport.MentorMatch.mentorTypes.0.description'),
          },
          {
            image: '/images/PPEESDT.png',
            name: t('IMDT_FullReport.MentorMatch.mentorTypes.1.name'),
            description: t('IMDT_FullReport.MentorMatch.mentorTypes.1.description'),
          },
        ],
      },

      ProjectSuggestion: {
        titleColor: '#004699',
        suggestionTitle: t('IMDT_FullReport.ProjectSuggestion.suggestionTitle'),
        suggestionSubtitle: t('IMDT_FullReport.ProjectSuggestion.suggestionSubtitle'),
        suggestionDescription: t('IMDT_FullReport.ProjectSuggestion.suggestionDescription'),
        suggestionList: t('IMDT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
        suggestionFooter: t('IMDT_FullReport.ProjectSuggestion.suggestionFooter'),
        growthEdgesTitle: t('IMDT_FullReport.ProjectSuggestion.growthEdgesTitle'),
        growthEdgesSubtitle: t('IMDT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
        growthPoints: t('IMDT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('IMDT_FullReport.LearningWeatherReport.title'),
        titleColor: '#004699',
        subTitleColor: 'rgba(0,70,153,0.6)',
        cards: [
          {
            icon: <Atmosphere />,
            title: t('IMDT_FullReport.LearningWeatherReport.cards.0.title'),
            subtitle: t('IMDT_FullReport.LearningWeatherReport.cards.0.subtitle'),
            description: t('IMDT_FullReport.LearningWeatherReport.cards.0.description'),
          },
          {
            icon: <Earth />,
            title: t('IMDT_FullReport.LearningWeatherReport.cards.1.title'),
            subtitle: t('IMDT_FullReport.LearningWeatherReport.cards.1.subtitle'),
            description: t('IMDT_FullReport.LearningWeatherReport.cards.1.description'),
          },
          {
            icon: <Storm />,
            title: t('IMDT_FullReport.LearningWeatherReport.cards.2.title'),
            subtitle: t('IMDT_FullReport.LearningWeatherReport.cards.2.subtitle'),
            description: t('IMDT_FullReport.LearningWeatherReport.cards.2.description'),
          },
          {
            icon: <Sunlight />,
            title: t('IMDT_FullReport.LearningWeatherReport.cards.3.title'),
            subtitle: t('IMDT_FullReport.LearningWeatherReport.cards.3.subtitle'),
            description: t('IMDT_FullReport.LearningWeatherReport.cards.3.description'),
          },
          {
            icon: <Pinwheel />,
            title: t('IMDT_FullReport.LearningWeatherReport.cards.4.title'),
            subtitle: t('IMDT_FullReport.LearningWeatherReport.cards.4.subtitle'),
            description: t('IMDT_FullReport.LearningWeatherReport.cards.4.description'),
          },
        ],
      },

      GrowthForecast: {
        titleColor: '#004699',
        forecastTitle: t('IMDT_FullReport.GrowthForecast.forecastTitle'),
        forecastText: t('IMDT_FullReport.GrowthForecast.forecastText'),
        famousTitle: t('IMDT_FullReport.GrowthForecast.famousTitle'),
        people: [
          {
            image: '/images/Análisedofilme.svg',
            name: t('IMDT_FullReport.GrowthForecast.people.0.name'),
            description: t('IMDT_FullReport.GrowthForecast.people.0.description'),
          },
          {
            image: '/images/Gandalf.svg',
            name: t('IMDT_FullReport.GrowthForecast.people.1.name'),
            description: t('IMDT_FullReport.GrowthForecast.people.1.description'),
          },
        ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
        title: t('IMDT_FullReport.Inspired.title'),
        projects: [
          {
            title: t('IMDT_FullReport.Inspired.projects.0.title'),
            forLabel: t('IMDT_FullReport.Inspired.projects.0.forLabel'),
            forTarget: t('IMDT_FullReport.Inspired.projects.0.forTarget'),
            description: t('IMDT_FullReport.Inspired.projects.0.description'),
            tags: t('IMDT_FullReport.Inspired.projects.0.tags'),
            inspiredBy: t('IMDT_FullReport.Inspired.projects.0.inspiredBy'),
            backgroundImage: '/images/MapImage.png',
          },
          {
            title: t('IMDT_FullReport.Inspired.projects.1.title'),
            forLabel: t('IMDT_FullReport.Inspired.projects.1.forLabel'),
            forTarget: t('IMDT_FullReport.Inspired.projects.1.forTarget'),
            description: t('IMDT_FullReport.Inspired.projects.1.description'),
            tags: t('IMDT_FullReport.Inspired.projects.1.tags'),
            inspiredBy: t('IMDT_FullReport.Inspired.projects.1.inspiredBy'),
            backgroundImage: '/images/coffee.png',
          },
          {
            title: t('IMDT_FullReport.Inspired.projects.2.title'),
            forLabel: t('IMDT_FullReport.Inspired.projects.2.forLabel'),
            forTarget: t('IMDT_FullReport.Inspired.projects.2.forTarget'),
            description: t('IMDT_FullReport.Inspired.projects.2.description'),
            tags: t('IMDT_FullReport.Inspired.projects.2.tags'),
            inspiredBy: t('IMDT_FullReport.Inspired.projects.2.inspiredBy'),
            backgroundImage: '/images/eyeImage.png',
          },
        ],
        action: {
          message: t('IMDT_FullReport.Inspired.action.message'),
          button1: t('IMDT_FullReport.Inspired.action.button1'),
          button2: t('IMDT_FullReport.Inspired.action.button2'),
        },
      },
    },

    EMDT: {
      titleColor: '#3DB0CB',
      image: {
        female: '/images/SimpleReport-EMDT-Female.png',
        male: '/images/SimpleReport-EMDT-Male.png',
      },
      bg: "/images/fullReport3.jpg",
      colorPaletteImage: '',
      title: t('EMDT_FullReport.title'),
      badges: t('EMDT_FullReport.badges', { returnObjects: true }) as string[],
      famousPerson: {
        female: {
          name: t('EMDT_FullReport.famousPerson.female.name'),
          image: '/home/amrood-labs/Downloads/FamousEMDTFemale',
        },
        male: {
          name: t('EMDT_FullReport.famousPerson.male.name'),
          image: '/home/amrood-labs/Downloads/FamousEMDMale',
        },
      },
      quote: t('EMDT_FullReport.quote'),
      quoteAuthor: t('EMDT_FullReport.quoteAuthor'),
      strengths: t('EMDT_FullReport.strengths', { returnObjects: true }) as string[],
      detail: t('EMDT_FullReport.detail'),

      motivation: {
        label: t('EMDT_FullReport.motivation.label'),
        value: t('EMDT_FullReport.motivation.value'),
        description: t('EMDT_FullReport.motivation.description'),
      },
      cognition: {
        label: t('EMDT_FullReport.cognition.label'),
        value: t('EMDT_FullReport.cognition.value'),
        description: t('EMDT_FullReport.cognition.description'),
      },
      environment: {
        label: t('EMDT_FullReport.environment.label'),
        value: t('EMDT_FullReport.environment.value'),
        description: t('EMDT_FullReport.environment.description'),
      },
      approach: {
        label: t('EMDT_FullReport.approach.label'),
        value: t('EMDT_FullReport.approach.value'),
        description: t('EMDT_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#3DB0CB'} />,
          title: t('EMDT_FullReport.DeepInsight.left.title'),
          titleColor: '#3DB0CB',
          highlight: t('EMDT_FullReport.DeepInsight.left.highlight'),
          description: t('EMDT_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#3DB0CB'} />,
          subtitle: t('EMDT_FullReport.DeepInsight.right.subtitle'),
          titleColor: '#3DB0CB',
          intro: t('EMDT_FullReport.DeepInsight.right.intro'),
          strategies: [
            { color: '#1E1E1E', title: t('EMDT_FullReport.DeepInsight.right.strategies.0.title'), text: t('EMDT_FullReport.DeepInsight.right.strategies.0.text') },
            { color: '#1E1E1E', title: t('EMDT_FullReport.DeepInsight.right.strategies.1.title'), text: t('EMDT_FullReport.DeepInsight.right.strategies.1.text') },
            { color: '#1E1E1E', title: t('EMDT_FullReport.DeepInsight.right.strategies.2.title'), text: t('EMDT_FullReport.DeepInsight.right.strategies.2.text') },
          ],
          tools: [
            { name: t('EMDT_FullReport.DeepInsight.right.tools.0.name'), description: t('EMDT_FullReport.DeepInsight.right.tools.0.description') },
            { name: t('EMDT_FullReport.DeepInsight.right.tools.1.name'), description: t('EMDT_FullReport.DeepInsight.right.tools.1.description') },
            { name: t('EMDT_FullReport.DeepInsight.right.tools.2.name'), description: t('EMDT_FullReport.DeepInsight.right.tools.2.description') },
            { name: t('EMDT_FullReport.DeepInsight.right.tools.3.name'), description: t('EMDT_FullReport.DeepInsight.right.tools.3.description') },
          ],
        },
      },

      LearningEnvironment: {
        icon: <Workplace />,
        title: t('EMDT_FullReport.LearningEnvironment.title'),
        titleColor: '#3DB0CB',
        subTitleColor: '#1E1E1E',
        subtitle: t('EMDT_FullReport.LearningEnvironment.subtitle'),
        visualClarity: {
          description: t('EMDT_FullReport.LearningEnvironment.visualClarity.description'),
        },
        zones: [
          {
            icon: <Candle />,
            title: t('EMDT_FullReport.LearningEnvironment.zones.0.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            verb: t('EMDT_FullReport.LearningEnvironment.zones.0.verb'),
            description: t('EMDT_FullReport.LearningEnvironment.zones.0.description'),
          },
          {
            icon: <Lamp />,
            title: t('EMDT_FullReport.LearningEnvironment.zones.1.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            verb: t('EMDT_FullReport.LearningEnvironment.zones.1.verb'),
            description: t('EMDT_FullReport.LearningEnvironment.zones.1.description'),
          },
          {
            icon: <Magicball />,
            title: t('EMDT_FullReport.LearningEnvironment.zones.2.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            verb: t('EMDT_FullReport.LearningEnvironment.zones.2.verb'),
            description: t('EMDT_FullReport.LearningEnvironment.zones.2.description'),
          },
          {
            icon: <Magicwand />,
            title: t('EMDT_FullReport.LearningEnvironment.zones.3.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            verb: t('EMDT_FullReport.LearningEnvironment.zones.3.verb'),
            description: t('EMDT_FullReport.LearningEnvironment.zones.3.description'),
          },
        ],
        tools: [
          {
            title: t('EMDT_FullReport.LearningEnvironment.tools.0.title'),
            description: t('EMDT_FullReport.LearningEnvironment.tools.0.description'),
            result: t('EMDT_FullReport.LearningEnvironment.tools.0.result'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
          },
          {
            title: t('EMDT_FullReport.LearningEnvironment.tools.1.title'),
            description: t('EMDT_FullReport.LearningEnvironment.tools.1.description'),
            result: t('EMDT_FullReport.LearningEnvironment.tools.1.result'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
          },
          {
            title: t('EMDT_FullReport.LearningEnvironment.tools.2.title'),
            description: t('EMDT_FullReport.LearningEnvironment.tools.2.description'),
            result: t('EMDT_FullReport.LearningEnvironment.tools.2.result'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
          },
          {
            title: t('EMDT_FullReport.LearningEnvironment.tools.3.title'),
            description: t('EMDT_FullReport.LearningEnvironment.tools.3.description'),
            result: t('EMDT_FullReport.LearningEnvironment.tools.3.result'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
          },
        ],
        sensoryFlow: {
          left: {
            title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            subtitle: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
            zones: [
              {
                icon: <EyeCare />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: '',
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description'),
              },
              {
                icon: <Ear />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: '',
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description'),
              },
              {
                icon: <Nose />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: '',
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description'),
              },
              {
                icon: <Reach />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: '',
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description'),
              },
            ],
          },
          right: {
            title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            subtitle: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
            anchors: [
              {
                icon: <Anchor />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'),
                descriptionTitle: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'),
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description'),
              },
              {
                icon: <Bell />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'),
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description'),
              },
              {
                icon: <Push />,
                title: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'),
                titleColor: '#3DB0CB',
                subTitleColor: 'rgba(61, 176, 203, 0.60)',
                verb: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'),
                description: t('EMDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description'),
              },
            ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#3DB0CB',
        title: t('EMDT_FullReport.MentorMatch.title'),
        description: t('EMDT_FullReport.MentorMatch.description'),
        benefits: [
          { color: 'rgba(61, 176, 203, 0.50)', text: t('EMDT_FullReport.MentorMatch.benefits.0.text') },
          { color: 'rgba(61, 176, 203, 0.80)', text: t('EMDT_FullReport.MentorMatch.benefits.1.text') },
          { color: '#3DB0CB', text: t('EMDT_FullReport.MentorMatch.benefits.2.text') },
        ],
        mentorTypes: [
          {
            image: '/images/PGSEMCT.png',
            name: t('EMDT_FullReport.MentorMatch.mentorTypes.0.name'),
            description: t('EMDT_FullReport.MentorMatch.mentorTypes.0.description'),
          },
          {
            image: '/images/Mentortype2EMDT.png',
            name: t('EMDT_FullReport.MentorMatch.mentorTypes.1.name'),
            description: t('EMDT_FullReport.MentorMatch.mentorTypes.1.description'),
          },
        ],
      },

      ProjectSuggestion: {
        titleColor: '#3DB0CB',
        suggestionTitle: t('EMDT_FullReport.ProjectSuggestion.suggestionTitle'),
        suggestionSubtitle: t('EMDT_FullReport.ProjectSuggestion.suggestionSubtitle'),
        suggestionDescription: t('EMDT_FullReport.ProjectSuggestion.suggestionDescription'),
        suggestionList: t('EMDT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
        suggestionFooter: t('EMDT_FullReport.ProjectSuggestion.suggestionFooter'),
        growthEdgesTitle: t('EMDT_FullReport.ProjectSuggestion.growthEdgesTitle'),
        growthEdgesSubtitle: t('EMDT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
        growthPoints: t('EMDT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('EMDT_FullReport.LearningWeatherReport.title'),
        titleColor: '#3DB0CB',
        subTitleColor: 'rgba(61, 176, 203, 0.60)',
        cards: [
          {
            icon: <Atmosphere />,
            title: t('EMDT_FullReport.LearningWeatherReport.cards.0.title'),
            subtitle: t('EMDT_FullReport.LearningWeatherReport.cards.0.subtitle'),
            description: t('EMDT_FullReport.LearningWeatherReport.cards.0.description'),
          },
          {
            icon: <Earth />,
            title: t('EMDT_FullReport.LearningWeatherReport.cards.1.title'),
            subtitle: t('EMDT_FullReport.LearningWeatherReport.cards.1.subtitle'),
            description: t('EMDT_FullReport.LearningWeatherReport.cards.1.description'),
          },
          {
            icon: <Storm />,
            title: t('EMDT_FullReport.LearningWeatherReport.cards.2.title'),
            subtitle: t('EMDT_FullReport.LearningWeatherReport.cards.2.subtitle'),
            description: t('EMDT_FullReport.LearningWeatherReport.cards.2.description'),
          },
          {
            icon: <Sunlight />,
            title: t('EMDT_FullReport.LearningWeatherReport.cards.3.title'),
            subtitle: t('EMDT_FullReport.LearningWeatherReport.cards.3.subtitle'),
            description: t('EMDT_FullReport.LearningWeatherReport.cards.3.description'),
          },
          {
            icon: <Pinwheel />,
            title: t('EMDT_FullReport.LearningWeatherReport.cards.4.title'),
            subtitle: t('EMDT_FullReport.LearningWeatherReport.cards.4.subtitle'),
            description: t('EMDT_FullReport.LearningWeatherReport.cards.4.description'),
          },
        ],
      },

      GrowthForecast: {
        titleColor: '#3DB0CB',
        forecastTitle: t('EMDT_FullReport.GrowthForecast.forecastTitle'),
        forecastText: t('EMDT_FullReport.GrowthForecast.forecastText'),
        famousTitle: t('EMDT_FullReport.GrowthForecast.famousTitle'),
        people: [
          {
            image: '/home/amrood-labs/Downloads/peoplemale1',
            name: t('EMDT_FullReport.GrowthForecast.people.0.name'),
            description: t('EMDT_FullReport.GrowthForecast.people.0.description'),
          },
          {
            image: '/home/amrood-labs/Downloads/peoplemale2',
            name: t('EMDT_FullReport.GrowthForecast.people.1.name'),
            description: t('EMDT_FullReport.GrowthForecast.people.1.description'),
          },
        ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
        title: t('EMDT_FullReport.Inspired.title'),
        projects: [
          {
            title: t('EMDT_FullReport.Inspired.projects.0.title'),
            forLabel: t('EMDT_FullReport.Inspired.projects.0.forLabel'),
            forTarget: t('EMDT_FullReport.Inspired.projects.0.forTarget'),
            description: t('EMDT_FullReport.Inspired.projects.0.description'),
            tags: t('EMDT_FullReport.Inspired.projects.0.tags'),
            inspiredBy: t('EMDT_FullReport.Inspired.projects.0.inspiredBy'),
            backgroundImage: '/home/amrood-labs/Downloads/inspiredmale1',
          },
          {
            title: t('EMDT_FullReport.Inspired.projects.1.title'),
            forLabel: t('EMDT_FullReport.Inspired.projects.1.forLabel'),
            forTarget: t('EMDT_FullReport.Inspired.projects.1.forTarget'),
            description: t('EMDT_FullReport.Inspired.projects.1.description'),
            tags: t('EMDT_FullReport.Inspired.projects.1.tags'),
            inspiredBy: t('EMDT_FullReport.Inspired.projects.1.inspiredBy'),
            backgroundImage: '/home/amrood-labs/Downloads/inspiredmale2',
          },
          {
            title: t('EMDT_FullReport.Inspired.projects.2.title'),
            forLabel: t('EMDT_FullReport.Inspired.projects.2.forLabel'),
            forTarget: t('EMDT_FullReport.Inspired.projects.2.forTarget'),
            description: t('EMDT_FullReport.Inspired.projects.2.description'),
            tags: t('EMDT_FullReport.Inspired.projects.2.tags'),
            inspiredBy: t('EMDT_FullReport.Inspired.projects.2.inspiredBy'),
            backgroundImage: '/home/amrood-labs/Downloads/inspiredmale3',
          },
        ],
        action: {
          message: t('EMDT_FullReport.Inspired.action.message'),
          button1: t('EMDT_FullReport.Inspired.action.button1'),
          button2: t('EMDT_FullReport.Inspired.action.button2'),
        },
      },
    },
    
    EMDX: {
      titleColor: '#3DB0CB',
      image: {
        female: '/images/SimpleReport-EMDX-Female.png',
        male: '/images/SimpleReport-EMDX-Male.png',
      },
      bg: "/images/fullReport3.jpg",
      colorPaletteImage: '',
      title: t('EMDX_FullReport.title'),
      badges: t('EMDX_FullReport.badges', { returnObjects: true }) as string[],
      famousPerson: {
        female: { name: t('EMDX_FullReport.famousPerson.female.name'), image: '' },
        male: { name: t('EMDX_FullReport.famousPerson.male.name'), image: '' },
      },
      quote: t('EMDX_FullReport.quote'),
      quoteAuthor: t('EMDX_FullReport.quoteAuthor'),
      strengths: t('EMDX_FullReport.strengths', { returnObjects: true }) as string[],
      detail: t('EMDX_FullReport.detail'),

      motivation: {
        label: t('EMDX_FullReport.motivation.label'),
        value: t('EMDX_FullReport.motivation.value'),
        description: t('EMDX_FullReport.motivation.description'),
      },
      cognition: {
        label: t('EMDX_FullReport.cognition.label'),
        value: t('EMDX_FullReport.cognition.value'),
        description: t('EMDX_FullReport.cognition.description'),
      },
      environment: {
        label: t('EMDX_FullReport.environment.label'),
        value: t('EMDX_FullReport.environment.value'),
        description: t('EMDX_FullReport.environment.description'),
      },
      approach: {
        label: t('EMDX_FullReport.approach.label'),
        value: t('EMDX_FullReport.approach.value'),
        description: t('EMDX_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#3DB0CB'} />,
          title: t('EMDX_FullReport.DeepInsight.left.title'),
          titleColor: '#3DB0CB',
          highlight: t('EMDX_FullReport.DeepInsight.left.highlight'),
          description: t('EMDX_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#3DB0CB'} />,
          subtitle: t('EMDX_FullReport.DeepInsight.right.subtitle'),
          titleColor: '#3DB0CB',
          intro: t('EMDX_FullReport.DeepInsight.right.intro'),
          strategies: [
            { color: 'rgba(61, 176, 203, 0.50)', title: t('EMDX_FullReport.DeepInsight.right.strategies.0.title'), text: t('EMDX_FullReport.DeepInsight.right.strategies.0.text') },
            { color: 'rgba(61, 176, 203, 0.80)', title: t('EMDX_FullReport.DeepInsight.right.strategies.1.title'), text: t('EMDX_FullReport.DeepInsight.right.strategies.1.text') },
            { color: '#3DB0CB', title: t('EMDX_FullReport.DeepInsight.right.strategies.2.title'), text: t('EMDX_FullReport.DeepInsight.right.strategies.2.text') },
          ],
          tools: [
            { name: t('EMDX_FullReport.DeepInsight.right.tools.0.name'), description: t('EMDX_FullReport.DeepInsight.right.tools.0.description') },
            { name: t('EMDX_FullReport.DeepInsight.right.tools.1.name'), description: t('EMDX_FullReport.DeepInsight.right.tools.1.description') },
            { name: t('EMDX_FullReport.DeepInsight.right.tools.2.name'), description: t('EMDX_FullReport.DeepInsight.right.tools.2.description') },
            { name: t('EMDX_FullReport.DeepInsight.right.tools.3.name'), description: t('EMDX_FullReport.DeepInsight.right.tools.3.description') },
          ],
        },
      },

      LearningEnvironment: {
        icon: <Workplace />,
        title: t('EMDX_FullReport.LearningEnvironment.title'),
        titleColor: '#3DB0CB',
        subTitleColor: 'rgba(61, 176, 203, 0.60)',
        subtitle: t('EMDX_FullReport.LearningEnvironment.subtitle'),
        visualClarity: { description: t('EMDX_FullReport.LearningEnvironment.visualClarity.description') },
        zones: [
          { icon: <Candle />, title: t('EMDX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.zones.0.verb'), description: t('EMDX_FullReport.LearningEnvironment.zones.0.description') },
          { icon: <Lamp />, title: t('EMDX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.zones.1.verb'), description: t('EMDX_FullReport.LearningEnvironment.zones.1.description') },
          { icon: <Magicball />, title: t('EMDX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.zones.2.verb'), description: t('EMDX_FullReport.LearningEnvironment.zones.2.description') },
          { icon: <Magicwand />, title: t('EMDX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.zones.3.verb'), description: t('EMDX_FullReport.LearningEnvironment.zones.3.description') },
        ],
        tools: [
          { title: t('EMDX_FullReport.LearningEnvironment.tools.0.title'), description: t('EMDX_FullReport.LearningEnvironment.tools.0.description'), result: t('EMDX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMDX_FullReport.LearningEnvironment.tools.1.title'), description: t('EMDX_FullReport.LearningEnvironment.tools.1.description'), result: t('EMDX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMDX_FullReport.LearningEnvironment.tools.2.title'), description: t('EMDX_FullReport.LearningEnvironment.tools.2.description'), result: t('EMDX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMDX_FullReport.LearningEnvironment.tools.3.title'), description: t('EMDX_FullReport.LearningEnvironment.tools.3.description'), result: t('EMDX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
        ],
        sensoryFlow: {
          left: {
            title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            subtitle: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
            zones: [
              { icon: <EyeCare />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
              { icon: <Ear />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
              { icon: <Nose />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
              { icon: <Reach />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
            ],
          },
          right: {
            title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
            subtitle: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
            anchors: [
              { icon: <Anchor />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
              { icon: <Bell />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
              { icon: <Push />, title: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('EMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
            ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#3DB0CB',
        title: t('EMDX_FullReport.MentorMatch.title'),
        description: t('EMDX_FullReport.MentorMatch.description'),
        benefits: [
          { color: 'rgba(61, 176, 203, 0.50)', text: t('EMDX_FullReport.MentorMatch.benefits.0.text') },
          { color: 'rgba(61, 176, 203, 0.80)', text: t('EMDX_FullReport.MentorMatch.benefits.1.text') },
          { color: '#3DB0CB', text: t('EMDX_FullReport.MentorMatch.benefits.2.text') },
        ],
        mentorTypes: [
          { image: '/images/DGEIMCX.png', name: t('EMDX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('EMDX_FullReport.MentorMatch.mentorTypes.0.description') },
          { image: '/images/DPSEMDX.png', name: t('EMDX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('EMDX_FullReport.MentorMatch.mentorTypes.1.description') },
        ],
      },

      ProjectSuggestion: {
        titleColor: '#3DB0CB',
        suggestionTitle: t('EMDX_FullReport.ProjectSuggestion.suggestionTitle'),
        suggestionSubtitle: t('EMDX_FullReport.ProjectSuggestion.suggestionSubtitle'),
        suggestionDescription: t('EMDX_FullReport.ProjectSuggestion.suggestionDescription'),
        suggestionList: t('EMDX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
        suggestionFooter: t('EMDX_FullReport.ProjectSuggestion.suggestionFooter'),
        growthEdgesTitle: t('EMDX_FullReport.ProjectSuggestion.growthEdgesTitle'),
        growthEdgesSubtitle: t('EMDX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
        growthPoints: t('EMDX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('EMDX_FullReport.LearningWeatherReport.title'),
        titleColor: '#3DB0CB',
        subTitleColor: 'rgba(61, 176, 203, 0.60)',
        cards: [
          { icon: <Atmosphere />, title: t('EMDX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('EMDX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('EMDX_FullReport.LearningWeatherReport.cards.0.description') },
          { icon: <Earth />, title: t('EMDX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('EMDX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('EMDX_FullReport.LearningWeatherReport.cards.1.description') },
          { icon: <Storm />, title: t('EMDX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('EMDX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('EMDX_FullReport.LearningWeatherReport.cards.2.description') },
          { icon: <Sunlight />, title: t('EMDX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('EMDX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('EMDX_FullReport.LearningWeatherReport.cards.3.description') },
          { icon: <Pinwheel />, title: t('EMDX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('EMDX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('EMDX_FullReport.LearningWeatherReport.cards.4.description') },
        ],
      },

      GrowthForecast: {
        titleColor: '#3DB0CB',
        forecastTitle: t('EMDX_FullReport.GrowthForecast.forecastTitle'),
        forecastText: t('EMDX_FullReport.GrowthForecast.forecastText'),
        famousTitle: t('EMDX_FullReport.GrowthForecast.famousTitle'),
        people: [
          { image: '/images/JudyHopps.svg', name: t('EMDX_FullReport.GrowthForecast.people.0.name'), description: t('EMDX_FullReport.GrowthForecast.people.0.description') },
          { image: '/images/ThomasShelby.svg', name: t('EMDX_FullReport.GrowthForecast.people.1.name'), description: t('EMDX_FullReport.GrowthForecast.people.1.description') },
        ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
        title: t('EMDX_FullReport.Inspired.title'),
        projects: [
          { title: t('EMDX_FullReport.Inspired.projects.0.title'), forLabel: t('EMDX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('EMDX_FullReport.Inspired.projects.0.forTarget'), description: t('EMDX_FullReport.Inspired.projects.0.description'), tags: t('EMDX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('EMDX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/CompleteEMDX.svg' },
          { title: t('EMDX_FullReport.Inspired.projects.1.title'), forLabel: t('EMDX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('EMDX_FullReport.Inspired.projects.1.forTarget'), description: t('EMDX_FullReport.Inspired.projects.1.description'), tags: t('EMDX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('EMDX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/ContentEMDX.svg' },
          { title: t('EMDX_FullReport.Inspired.projects.2.title'), forLabel: t('EMDX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('EMDX_FullReport.Inspired.projects.2.forTarget'), description: t('EMDX_FullReport.Inspired.projects.2.description'), tags: t('EMDX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('EMDX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/DisciplinesEMDX.png' },
        ],
        action: {
          message: t('EMDX_FullReport.Inspired.action.message'),
          button1: t('EMDX_FullReport.Inspired.action.button1'),
          button2: t('EMDX_FullReport.Inspired.action.button2'),
        },
      },
    },

    IMCT: {
      titleColor: '#004699',
      image: {
        female: '/images/SimpleReport-IMCT-Female.png',
        male: '/images/SimpleReport-IMCT-Male.png',
      },
      bg: "/images/fullReport1.jpg",
      colorPaletteImage: '',
      title: t('IMCT_FullReport.title'),
      badges: t('IMCT_FullReport.badges', { returnObjects: true }) as string[],

      famousPerson: {
        female: { name: t('IMCT_FullReport.famousPerson.female.name'), image: 'HermioneGranger.svg' },
        male: { name: t('IMCT_FullReport.famousPerson.male.name'), image: 'WalterWhite.svg' },
      },

      quote: t('IMCT_FullReport.quote'),
      quoteAuthor: t('IMCT_FullReport.quoteAuthor'),
      strengths: t('IMCT_FullReport.strengths', { returnObjects: true }) as string[],
      detail: t('IMCT_FullReport.detail'),

      motivation: {
        label: t('IMCT_FullReport.motivation.label'),
        value: t('IMCT_FullReport.motivation.value'),
        description: t('IMCT_FullReport.motivation.description'),
      },
      cognition: {
        label: t('IMCT_FullReport.cognition.label'),
        value: t('IMCT_FullReport.cognition.value'),
        description: t('IMCT_FullReport.cognition.description'),
      },
      environment: {
        label: t('IMCT_FullReport.environment.label'),
        value: t('IMCT_FullReport.environment.value'),
        description: t('IMCT_FullReport.environment.description'),
      },
      approach: {
        label: t('IMCT_FullReport.approach.label'),
        value: t('IMCT_FullReport.approach.value'),
        description: t('IMCT_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#004699'} />,
          title: t('IMCT_FullReport.DeepInsight.left.title'),
          titleColor: '#004699',
          highlight: t('IMCT_FullReport.DeepInsight.left.highlight'),
          description: t('IMCT_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#004699'} />,
          subtitle: t('IMCT_FullReport.DeepInsight.right.subtitle'),
          titleColor: '#004699',
          intro: t('IMCT_FullReport.DeepInsight.right.intro'),
          strategies: [
            { color: 'rgba(0, 70, 153, 0.50)', title: t('IMCT_FullReport.DeepInsight.right.strategies.0.title'), text: t('IMCT_FullReport.DeepInsight.right.strategies.0.text') },
            { color: 'rgba(0, 70, 153, 0.80)', title: t('IMCT_FullReport.DeepInsight.right.strategies.1.title'), text: t('IMCT_FullReport.DeepInsight.right.strategies.1.text') },
            { color: '#004699', title: t('IMCT_FullReport.DeepInsight.right.strategies.2.title'), text: t('IMCT_FullReport.DeepInsight.right.strategies.2.text') },
          ],
          tools: [
            { name: t('IMCT_FullReport.DeepInsight.right.tools.0.name'), description: t('IMCT_FullReport.DeepInsight.right.tools.0.description') },
            { name: t('IMCT_FullReport.DeepInsight.right.tools.1.name'), description: t('IMCT_FullReport.DeepInsight.right.tools.1.description') },
            { name: t('IMCT_FullReport.DeepInsight.right.tools.2.name'), description: t('IMCT_FullReport.DeepInsight.right.tools.2.description') },
            { name: t('IMCT_FullReport.DeepInsight.right.tools.3.name'), description: t('IMCT_FullReport.DeepInsight.right.tools.3.description') },
          ],
        },
      },

      LearningEnvironment: {
        icon: <Workplace />,
        title: t('IMCT_FullReport.LearningEnvironment.title'),
        titleColor: '#004699',
        subTitleColor: 'rgba(0, 70, 153, 0.60)',
        subtitle: t('IMCT_FullReport.LearningEnvironment.subtitle'),
        visualClarity: { description: t('IMCT_FullReport.LearningEnvironment.visualClarity.description') },
        zones: [
          { icon: <Candle />, title: t('IMCT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.zones.0.verb'), description: t('IMCT_FullReport.LearningEnvironment.zones.0.description') },
          { icon: <Lamp />, title: t('IMCT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.zones.1.verb'), description: t('IMCT_FullReport.LearningEnvironment.zones.1.description') },
          { icon: <Magicball />, title: t('IMCT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.zones.2.verb'), description: t('IMCT_FullReport.LearningEnvironment.zones.2.description') },
          { icon: <Magicwand />, title: t('IMCT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.zones.3.verb'), description: t('IMCT_FullReport.LearningEnvironment.zones.3.description') },
        ],
        tools: [
          { title: t('IMCT_FullReport.LearningEnvironment.tools.0.title'), description: t('IMCT_FullReport.LearningEnvironment.tools.0.description'), result: t('IMCT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
          { title: t('IMCT_FullReport.LearningEnvironment.tools.1.title'), description: t('IMCT_FullReport.LearningEnvironment.tools.1.description'), result: t('IMCT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
          { title: t('IMCT_FullReport.LearningEnvironment.tools.2.title'), description: t('IMCT_FullReport.LearningEnvironment.tools.2.description'), result: t('IMCT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
          { title: t('IMCT_FullReport.LearningEnvironment.tools.3.title'), description: t('IMCT_FullReport.LearningEnvironment.tools.3.description'), result: t('IMCT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
        ],
        sensoryFlow: {
          left: {
            title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0, 70, 153, 0.60)',
            subtitle: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
            zones: [
              { icon: <EyeCare />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
              { icon: <Ear />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
              { icon: <Nose />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
              { icon: <Reach />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
            ],
          },
          right: {
            title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#004699',
            subTitleColor: 'rgba(0, 70, 153, 0.60)',
            subtitle: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
            anchors: [
              { icon: <Anchor />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
              { icon: <Bell />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
              { icon: <Push />, title: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('IMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
            ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#004699',
        title: t('IMCT_FullReport.MentorMatch.title'),
        description: t('IMCT_FullReport.MentorMatch.description'),
        benefits: [
          { color: 'rgba(0, 70, 153, 0.50)', text: t('IMCT_FullReport.MentorMatch.benefits.0.text') },
          { color: 'rgba(0, 70, 153, 0.50)', text: t('IMCT_FullReport.MentorMatch.benefits.1.text') },
          { color: '#004699', text: t('IMCT_FullReport.MentorMatch.benefits.2.text') },
        ],
        mentorTypes: [
          { image: '/images/DGSIMCT.png', name: t('IMCT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('IMCT_FullReport.MentorMatch.mentorTypes.0.description') },
          { image: '/images/Ellipse 3.png', name: t('IMCT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('IMCT_FullReport.MentorMatch.mentorTypes.1.description') },
        ],
      },

      ProjectSuggestion: {
        titleColor: '#004699',
        suggestionTitle: t('IMCT_FullReport.ProjectSuggestion.suggestionTitle'),
        suggestionSubtitle: t('IMCT_FullReport.ProjectSuggestion.suggestionSubtitle'),
        suggestionDescription: t('IMCT_FullReport.ProjectSuggestion.suggestionDescription'),
        suggestionList: t('IMCT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
        suggestionFooter: t('IMCT_FullReport.ProjectSuggestion.suggestionFooter'),
        growthEdgesTitle: t('IMCT_FullReport.ProjectSuggestion.growthEdgesTitle'),
        growthEdgesSubtitle: t('IMCT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
        growthPoints: t('IMCT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('IMCT_FullReport.LearningWeatherReport.title'),
        titleColor: '#004699',
        subTitleColor: 'rgba(0, 70, 153, 0.60)',
        cards: [
          { icon: <Atmosphere />, title: t('IMCT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('IMCT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('IMCT_FullReport.LearningWeatherReport.cards.0.description') },
          { icon: <Earth />, title: t('IMCT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('IMCT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('IMCT_FullReport.LearningWeatherReport.cards.1.description') },
          { icon: <Storm />, title: t('IMCT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('IMCT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('IMCT_FullReport.LearningWeatherReport.cards.2.description') },
          { icon: <Sunlight />, title: t('IMCT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('IMCT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('IMCT_FullReport.LearningWeatherReport.cards.3.description') },
          { icon: <Pinwheel />, title: t('IMCT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('IMCT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('IMCT_FullReport.LearningWeatherReport.cards.4.description') },
        ],
      },

      GrowthForecast: {
        titleColor: '#004699',
        forecastTitle: t('IMCT_FullReport.GrowthForecast.forecastTitle'),
        forecastText: t('IMCT_FullReport.GrowthForecast.forecastText'),
        famousTitle: t('IMCT_FullReport.GrowthForecast.famousTitle'),
        people: [
          { image: '/images/HermioneGranger.svg', name: t('IMCT_FullReport.GrowthForecast.people.0.name'), description: t('IMCT_FullReport.GrowthForecast.people.0.description') },
          { image: '/images/WalterWhite.svg', name: t('IMCT_FullReport.GrowthForecast.people.1.name'), description: t('IMCT_FullReport.GrowthForecast.people.1.description') },
        ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
        title: t('IMCT_FullReport.Inspired.title'),
        projects: [
          { title: t('IMCT_FullReport.Inspired.projects.0.title'), forLabel: t('IMCT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('IMCT_FullReport.Inspired.projects.0.forTarget'), description: t('IMCT_FullReport.Inspired.projects.0.description'), tags: t('IMCT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('IMCT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/DesignIMCT.svg' },
          { title: t('IMCT_FullReport.Inspired.projects.1.title'), forLabel: t('IMCT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('IMCT_FullReport.Inspired.projects.1.forTarget'), description: t('IMCT_FullReport.Inspired.projects.1.description'), tags: t('IMCT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('IMCT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/CreateIMCT.svg' },
          { title: t('IMCT_FullReport.Inspired.projects.2.title'), forLabel: t('IMCT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('IMCT_FullReport.Inspired.projects.2.forTarget'), description: t('IMCT_FullReport.Inspired.projects.2.description'), tags: t('IMCT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('IMCT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/OrganizeIMCT.svg' },
        ],
        action: {
          message: t('IMCT_FullReport.Inspired.action.message'),
          button1: t('IMCT_FullReport.Inspired.action.button1'),
          button2: t('IMCT_FullReport.Inspired.action.button2'),
        },
      },
    },
  
    IMCX: {
      titleColor: '#004699',
        image: {
          female: '/images/SimpleReport-IMCX-Female.png',
          male: '/images/SimpleReport-IMCX-Male.png',
      },
      bg: "/images/fullReport1.jpg",
      colorPaletteImage: '',
        title: t('IMCX_FullReport.title'),
          badges: t('IMCX_FullReport.badges', { returnObjects: true }) as string[],
            famousPerson: {
        female: { name: t('IMCX_FullReport.famousPerson.female.name'), image: '/images/PhoebeBuffay.svg' },
        male: { name: t('IMCX_FullReport.famousPerson.male.name'), image: '/images/TonyStark.svg' },
      },
      quote: t('IMCX_FullReport.quote'),
        quoteAuthor: t('IMCX_FullReport.quoteAuthor'),
          strengths: t('IMCX_FullReport.strengths', { returnObjects: true }) as string[],
            detail: t('IMCX_FullReport.detail'),

              motivation: {
        label: t('IMCX_FullReport.motivation.label'),
          value: t('IMCX_FullReport.motivation.value'),
            description: t('IMCX_FullReport.motivation.description'),
      },
      cognition: {
        label: t('IMCX_FullReport.cognition.label'),
          value: t('IMCX_FullReport.cognition.value'),
            description: t('IMCX_FullReport.cognition.description'),
      },
      environment: {
        label: t('IMCX_FullReport.environment.label'),
          value: t('IMCX_FullReport.environment.value'),
            description: t('IMCX_FullReport.environment.description'),
      },
      approach: {
        label: t('IMCX_FullReport.approach.label'),
          value: t('IMCX_FullReport.approach.value'),
            description: t('IMCX_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#004699'} />,
            title: t('IMCX_FullReport.DeepInsight.left.title'),
              titleColor: '#004699',
                highlight: t('IMCX_FullReport.DeepInsight.left.highlight'),
                  description: t('IMCX_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#004699'} />,
            subtitle: t('IMCX_FullReport.DeepInsight.right.subtitle'),
              titleColor: '#004699',
                intro: t('IMCX_FullReport.DeepInsight.right.intro'),
                  strategies: [
                    { color: 'rgba(0, 70, 153, 0.50)', title: t('IMCX_FullReport.DeepInsight.right.strategies.0.title'), text: t('IMCX_FullReport.DeepInsight.right.strategies.0.text') },
                    { color: 'rgba(0, 70, 153, 0.80)', title: t('IMCX_FullReport.DeepInsight.right.strategies.1.title'), text: t('IMCX_FullReport.DeepInsight.right.strategies.1.text') },
                    { color: '#004699', title: t('IMCX_FullReport.DeepInsight.right.strategies.2.title'), text: t('IMCX_FullReport.DeepInsight.right.strategies.2.text') },
                  ],
                    tools: [
                      { name: t('IMCX_FullReport.DeepInsight.right.tools.0.name'), description: t('IMCX_FullReport.DeepInsight.right.tools.0.description') },
                      { name: t('IMCX_FullReport.DeepInsight.right.tools.1.name'), description: t('IMCX_FullReport.DeepInsight.right.tools.1.description') },
                      { name: t('IMCX_FullReport.DeepInsight.right.tools.2.name'), description: t('IMCX_FullReport.DeepInsight.right.tools.2.description') },
                      { name: t('IMCX_FullReport.DeepInsight.right.tools.3.name'), description: t('IMCX_FullReport.DeepInsight.right.tools.3.description') },
                    ],
        },
      },

      LearningEnvironment: {
        icon: <Workplace />,
          title: t('IMCX_FullReport.LearningEnvironment.title'),
            titleColor: '#004699',
              subTitleColor: 'rgba(0, 70, 153, 0.60)',
                subtitle: t('IMCX_FullReport.LearningEnvironment.subtitle'),
                  visualClarity: { description: t('IMCX_FullReport.LearningEnvironment.visualClarity.description') },
        zones: [
          { icon: <Candle />, title: t('IMCX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.zones.0.verb'), description: t('IMCX_FullReport.LearningEnvironment.zones.0.description') },
          { icon: <Lamp />, title: t('IMCX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.zones.1.verb'), description: t('IMCX_FullReport.LearningEnvironment.zones.1.description') },
          { icon: <Magicball />, title: t('IMCX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.zones.2.verb'), description: t('IMCX_FullReport.LearningEnvironment.zones.2.description') },
          { icon: <Magicwand />, title: t('IMCX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.zones.3.verb'), description: t('IMCX_FullReport.LearningEnvironment.zones.3.description') },
        ],
          tools: [
            { title: t('IMCX_FullReport.LearningEnvironment.tools.0.title'), description: t('IMCX_FullReport.LearningEnvironment.tools.0.description'), result: t('IMCX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
            { title: t('IMCX_FullReport.LearningEnvironment.tools.1.title'), description: t('IMCX_FullReport.LearningEnvironment.tools.1.description'), result: t('IMCX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
            { title: t('IMCX_FullReport.LearningEnvironment.tools.2.title'), description: t('IMCX_FullReport.LearningEnvironment.tools.2.description'), result: t('IMCX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
            { title: t('IMCX_FullReport.LearningEnvironment.tools.3.title'), description: t('IMCX_FullReport.LearningEnvironment.tools.3.description'), result: t('IMCX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
          ],
            sensoryFlow: {
          left: {
            title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
              titleColor: '#004699',
                subTitleColor: 'rgba(0, 70, 153, 0.60)',
                  subtitle: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                    zones: [
                      { icon: <EyeCare />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                      { icon: <Ear />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                      { icon: <Nose />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                      { icon: <Reach />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                    ],
          },
          right: {
            title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
              titleColor: '#004699',
                subTitleColor: 'rgba(0, 70, 153, 0.60)',
                  subtitle: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                    anchors: [
                      { icon: <Anchor />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                      { icon: <Bell />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                      { icon: <Push />, title: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('IMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                    ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#004699',
          title: t('IMCX_FullReport.MentorMatch.title'),
            description: t('IMCX_FullReport.MentorMatch.description'),
              benefits: [
                { color: 'rgba(0, 70, 153, 0.50)', text: t('IMCX_FullReport.MentorMatch.benefits.0.text') },
                { color: 'rgba(0, 70, 153, 0.80)', text: t('IMCX_FullReport.MentorMatch.benefits.1.text') },
                { color: '#004699', text: t('IMCX_FullReport.MentorMatch.benefits.2.text') },
              ],
                mentorTypes: [
                  { image: '/images/Mentortype2EMDT.png', name: t('IMCX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('IMCX_FullReport.MentorMatch.mentorTypes.0.description') },
                  { image: '/images/DGEIMCX.png', name: t('IMCX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('IMCX_FullReport.MentorMatch.mentorTypes.1.description') },
                ],
      },

      ProjectSuggestion: {
        titleColor: '#004699',
          suggestionTitle: t('IMCX_FullReport.ProjectSuggestion.suggestionTitle'),
            suggestionSubtitle: t('IMCX_FullReport.ProjectSuggestion.suggestionSubtitle'),
              suggestionDescription: t('IMCX_FullReport.ProjectSuggestion.suggestionDescription'),
                suggestionList: t('IMCX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                  suggestionFooter: t('IMCX_FullReport.ProjectSuggestion.suggestionFooter'),
                    growthEdgesTitle: t('IMCX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                      growthEdgesSubtitle: t('IMCX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                        growthPoints: t('IMCX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('IMCX_FullReport.LearningWeatherReport.title'),
          titleColor: '#004699',
            subTitleColor: 'rgba(0, 70, 153, 0.60)',
              cards: [
                { icon: <Atmosphere />, title: t('IMCX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('IMCX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('IMCX_FullReport.LearningWeatherReport.cards.0.description') },
                { icon: <Earth />, title: t('IMCX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('IMCX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('IMCX_FullReport.LearningWeatherReport.cards.1.description') },
                { icon: <Storm />, title: t('IMCX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('IMCX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('IMCX_FullReport.LearningWeatherReport.cards.2.description') },
                { icon: <Sunlight />, title: t('IMCX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('IMCX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('IMCX_FullReport.LearningWeatherReport.cards.3.description') },
                { icon: <Pinwheel />, title: t('IMCX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('IMCX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('IMCX_FullReport.LearningWeatherReport.cards.4.description') },
              ],
      },

      GrowthForecast: {
        titleColor: '#004699',
          forecastTitle: t('IMCX_FullReport.GrowthForecast.forecastTitle'),
            forecastText: t('IMCX_FullReport.GrowthForecast.forecastText'),
              famousTitle: t('IMCX_FullReport.GrowthForecast.famousTitle'),
                people: [
                  { image: '/images/PhoebeBuffay.svg', name: t('IMCX_FullReport.GrowthForecast.people.0.name'), description: t('IMCX_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/TonyStark.svg', name: t('IMCX_FullReport.GrowthForecast.people.1.name'), description: t('IMCX_FullReport.GrowthForecast.people.1.description') },
                ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
          title: t('IMCX_FullReport.Inspired.title'),
            projects: [
              { title: t('IMCX_FullReport.Inspired.projects.0.title'), forLabel: t('IMCX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('IMCX_FullReport.Inspired.projects.0.forTarget'), description: t('IMCX_FullReport.Inspired.projects.0.description'), tags: t('IMCX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('IMCX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/TestIMCX.svg' },
              { title: t('IMCX_FullReport.Inspired.projects.1.title'), forLabel: t('IMCX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('IMCX_FullReport.Inspired.projects.1.forTarget'), description: t('IMCX_FullReport.Inspired.projects.1.description'), tags: t('IMCX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('IMCX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/StartIMCX.png' },
              { title: t('IMCX_FullReport.Inspired.projects.2.title'), forLabel: t('IMCX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('IMCX_FullReport.Inspired.projects.2.forTarget'), description: t('IMCX_FullReport.Inspired.projects.2.description'), tags: t('IMCX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('IMCX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/RedesignIMCX.svg' },
            ],
              action: {
          message: t('IMCX_FullReport.Inspired.action.message'),
            button1: t('IMCX_FullReport.Inspired.action.button1'),
              button2: t('IMCX_FullReport.Inspired.action.button2'),
        },
      },
    },
    
    EMCX: {
    titleColor: '#3DB0CB',
      image: {
        female: '/images/SimpleReport-EMCX-Female.png',
        male: '/images/SimpleReport-EMCX-Male.png',
    },
      bg: "/images/fullReport3.jpg",
    colorPaletteImage: '',
      title: t('EMCX_FullReport.title'),
        badges: t('EMCX_FullReport.badges', { returnObjects: true }) as string[],
          famousPerson: {
      female: { name: t('EMCX_FullReport.famousPerson.female.name'), image: '/images/AnnaliseKeating.svg' },
      male: { name: t('EMCX_FullReport.famousPerson.male.name'), image: '/images/Deadpool.svg' },
    },
    quote: t('EMCX_FullReport.quote'),
      quoteAuthor: t('EMCX_FullReport.quoteAuthor'),
        strengths: t('EMCX_FullReport.strengths', { returnObjects: true }) as string[],
          detail: t('EMCX_FullReport.detail'),

            motivation: {
      label: t('EMCX_FullReport.motivation.label'),
        value: t('EMCX_FullReport.motivation.value'),
          description: t('EMCX_FullReport.motivation.description'),
    },
    cognition: {
      label: t('EMCX_FullReport.cognition.label'),
        value: t('EMCX_FullReport.cognition.value'),
          description: t('EMCX_FullReport.cognition.description'),
    },
    environment: {
      label: t('EMCX_FullReport.environment.label'),
        value: t('EMCX_FullReport.environment.value'),
          description: t('EMCX_FullReport.environment.description'),
    },
    approach: {
      label: t('EMCX_FullReport.approach.label'),
        value: t('EMCX_FullReport.approach.value'),
          description: t('EMCX_FullReport.approach.description'),
    },

    DeepInsight: {
      left: {
        icon: <Discovery fill={'#3DB0CB'} />,
          title: t('EMCX_FullReport.DeepInsight.left.title'),
            titleColor: '#3DB0CB',
              highlight: t('EMCX_FullReport.DeepInsight.left.highlight'),
                description: t('EMCX_FullReport.DeepInsight.left.description'),
      },
      right: {
        icon: <Compass fill={'#3DB0CB'} />,
          subtitle: t('EMCX_FullReport.DeepInsight.right.subtitle'),
            titleColor: '#3DB0CB',
              intro: t('EMCX_FullReport.DeepInsight.right.intro'),
                strategies: [
                  { color: 'rgba(61, 176, 203, 0.50)', title: t('EMCX_FullReport.DeepInsight.right.strategies.0.title'), text: t('EMCX_FullReport.DeepInsight.right.strategies.0.text') },
                  { color: 'rgba(61, 176, 203, 0.80)', title: t('EMCX_FullReport.DeepInsight.right.strategies.1.title'), text: t('EMCX_FullReport.DeepInsight.right.strategies.1.text') },
                  { color: '#3DB0CB', title: t('EMCX_FullReport.DeepInsight.right.strategies.2.title'), text: t('EMCX_FullReport.DeepInsight.right.strategies.2.text') },
                ],
                  tools: [
                    { name: t('EMCX_FullReport.DeepInsight.right.tools.0.name'), description: t('EMCX_FullReport.DeepInsight.right.tools.0.description') },
                    { name: t('EMCX_FullReport.DeepInsight.right.tools.1.name'), description: t('EMCX_FullReport.DeepInsight.right.tools.1.description') },
                    { name: t('EMCX_FullReport.DeepInsight.right.tools.2.name'), description: t('EMCX_FullReport.DeepInsight.right.tools.2.description') },
                    { name: t('EMCX_FullReport.DeepInsight.right.tools.3.name'), description: t('EMCX_FullReport.DeepInsight.right.tools.3.description') },
                  ],
      },
    },

    LearningEnvironment: {
      icon: <Workplace />,
        title: t('EMCX_FullReport.LearningEnvironment.title'),
          titleColor: '#3DB0CB',
            subTitleColor: 'rgba(61, 176, 203, 0.60)',
              subtitle: t('EMCX_FullReport.LearningEnvironment.subtitle'),
                visualClarity: { description: t('EMCX_FullReport.LearningEnvironment.visualClarity.description') },
      zones: [
        { icon: <Candle />, title: t('EMCX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.zones.0.verb'), description: t('EMCX_FullReport.LearningEnvironment.zones.0.description') },
        { icon: <Lamp />, title: t('EMCX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.zones.1.verb'), description: t('EMCX_FullReport.LearningEnvironment.zones.1.description') },
        { icon: <Magicball />, title: t('EMCX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.zones.2.verb'), description: t('EMCX_FullReport.LearningEnvironment.zones.2.description') },
        { icon: <Magicwand />, title: t('EMCX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.zones.3.verb'), description: t('EMCX_FullReport.LearningEnvironment.zones.3.description') },
      ],
        tools: [
          { title: t('EMCX_FullReport.LearningEnvironment.tools.0.title'), description: t('EMCX_FullReport.LearningEnvironment.tools.0.description'), result: t('EMCX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMCX_FullReport.LearningEnvironment.tools.1.title'), description: t('EMCX_FullReport.LearningEnvironment.tools.1.description'), result: t('EMCX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMCX_FullReport.LearningEnvironment.tools.2.title'), description: t('EMCX_FullReport.LearningEnvironment.tools.2.description'), result: t('EMCX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
          { title: t('EMCX_FullReport.LearningEnvironment.tools.3.title'), description: t('EMCX_FullReport.LearningEnvironment.tools.3.description'), result: t('EMCX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
        ],
          sensoryFlow: {
        left: {
          title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#3DB0CB',
              subTitleColor: 'rgba(61, 176, 203, 0.60)',
                subtitle: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                  zones: [
                    { icon: <EyeCare />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                    { icon: <Ear />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                    { icon: <Nose />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                    { icon: <Reach />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                  ],
        },
        right: {
          title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#3DB0CB',
              subTitleColor: 'rgba(61, 176, 203, 0.60)',
                subtitle: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                  anchors: [
                    { icon: <Anchor />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                    { icon: <Bell />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                    { icon: <Push />, title: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('EMCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                  ],
        },
      },
    },

    MentorMatch: {
      titleColor: '#3DB0CB',
        title: t('EMCX_FullReport.MentorMatch.title'),
          description: t('EMCX_FullReport.MentorMatch.description'),
            benefits: [
              { color: 'rgba(61, 176, 203, 0.50)', text: t('EMCX_FullReport.MentorMatch.benefits.0.text') },
              { color: 'rgba(61, 176, 203, 0.80)', text: t('EMCX_FullReport.MentorMatch.benefits.1.text') },
              { color: '#3DB0CB', text: t('EMCX_FullReport.MentorMatch.benefits.2.text') },
            ],
              mentorTypes: [
                { image: '/images/Mentortype2EMDT.png', name: t('EMCX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('EMCX_FullReport.MentorMatch.mentorTypes.0.description') },
                { image: '/images/DPEIMDX.svg', name: t('EMCX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('EMCX_FullReport.MentorMatch.mentorTypes.1.description') },
              ],
    },

    ProjectSuggestion: {
      titleColor: '#3DB0CB',
        suggestionTitle: t('EMCX_FullReport.ProjectSuggestion.suggestionTitle'),
          suggestionSubtitle: t('EMCX_FullReport.ProjectSuggestion.suggestionSubtitle'),
            suggestionDescription: t('EMCX_FullReport.ProjectSuggestion.suggestionDescription'),
              suggestionList: t('EMCX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                suggestionFooter: t('EMCX_FullReport.ProjectSuggestion.suggestionFooter'),
                  growthEdgesTitle: t('EMCX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                    growthEdgesSubtitle: t('EMCX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                      growthPoints: t('EMCX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
    },

    LearningWeatherReport: {
      title: t('EMCX_FullReport.LearningWeatherReport.title'),
        titleColor: '#3DB0CB',
          subTitleColor: 'rgba(61, 176, 203, 0.60)',
            cards: [
              { icon: <Atmosphere />, title: t('EMCX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('EMCX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('EMCX_FullReport.LearningWeatherReport.cards.0.description') },
              { icon: <Earth />, title: t('EMCX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('EMCX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('EMCX_FullReport.LearningWeatherReport.cards.1.description') },
              { icon: <Storm />, title: t('EMCX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('EMCX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('EMCX_FullReport.LearningWeatherReport.cards.2.description') },
              { icon: <Sunlight />, title: t('EMCX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('EMCX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('EMCX_FullReport.LearningWeatherReport.cards.3.description') },
              { icon: <Pinwheel />, title: t('EMCX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('EMCX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('EMCX_FullReport.LearningWeatherReport.cards.4.description') },
            ],
    },

    GrowthForecast: {
      titleColor: '#3DB0CB',
        forecastTitle: t('EMCX_FullReport.GrowthForecast.forecastTitle'),
          forecastText: t('EMCX_FullReport.GrowthForecast.forecastText'),
            people: [
              { image: '/images/AnnaliseKeating.svg', name: t('EMCX_FullReport.GrowthForecast.people.0.name'), description: t('EMCX_FullReport.GrowthForecast.people.0.description') },
              { image: '/images/Deadpool.svg', name: t('EMCX_FullReport.GrowthForecast.people.1.name'), description: t('EMCX_FullReport.GrowthForecast.people.1.description') },
            ],
    },

    Inspired: {
      titleColor: 'rgba(0, 70, 153, 1)',
        title: t('EMCX_FullReport.Inspired.title'),
          projects: [
            { title: t('EMCX_FullReport.Inspired.projects.0.title'), forLabel: t('EMCX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('EMCX_FullReport.Inspired.projects.0.forTarget'), description: t('EMCX_FullReport.Inspired.projects.0.description'), tags: t('EMCX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('EMCX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/CreateEMCX.svg' },
            { title: t('EMCX_FullReport.Inspired.projects.1.title'), forLabel: t('EMCX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('EMCX_FullReport.Inspired.projects.1.forTarget'), description: t('EMCX_FullReport.Inspired.projects.1.description'), tags: t('EMCX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('EMCX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/RunEMCX.svg' },
            { title: t('EMCX_FullReport.Inspired.projects.2.title'), forLabel: t('EMCX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('EMCX_FullReport.Inspired.projects.2.forTarget'), description: t('EMCX_FullReport.Inspired.projects.2.description'), tags: t('EMCX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('EMCX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/LaunchEMCX.svg' },
          ],
            action: {
        message: t('EMCX_FullReport.Inspired.action.message'),
          button1: t('EMCX_FullReport.Inspired.action.button1'),
            button2: t('EMCX_FullReport.Inspired.action.button2'),
      },
    },
    },  

    ISDT: {
        titleColor: '#F25D90',
      image: {
        female: '/images/SimpleReport-ISDT-Female.png',
        male: '/images/SimpleReport-ISDT-Male.png',
      },
      bg: "/images/fullReport2.jpg",
        colorPaletteImage: '',
          title: t('ISDT_FullReport.title'),
            badges: t('ISDT_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ISDT_FullReport.famousPerson.female.name'), image: '/images/BethHarmon.svg' },
          male: { name: t('ISDT_FullReport.famousPerson.male.name'), image: '/images/SheldonCooper.svg' },
        },
        quote: t('ISDT_FullReport.quote'),
          quoteAuthor: t('ISDT_FullReport.quoteAuthor'),
            strengths: t('ISDT_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ISDT_FullReport.detail'),

                motivation: {
          label: t('ISDT_FullReport.motivation.label'),
            value: t('ISDT_FullReport.motivation.value'),
              description: t('ISDT_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ISDT_FullReport.cognition.label'),
            value: t('ISDT_FullReport.cognition.value'),
              description: t('ISDT_FullReport.cognition.description'),
  },
        environment: {
          label: t('ISDT_FullReport.environment.label'),
            value: t('ISDT_FullReport.environment.value'),
              description: t('ISDT_FullReport.environment.description'),
  },
        approach: {
          label: t('ISDT_FullReport.approach.label'),
            value: t('ISDT_FullReport.approach.value'),
              description: t('ISDT_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#F25D90'} />,
              title: t('ISDT_FullReport.DeepInsight.left.title'),
                titleColor: '#F25D90',
                  highlight: t('ISDT_FullReport.DeepInsight.left.highlight'),
                    description: t('ISDT_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#F25D90'} />,
              subtitle: t('ISDT_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#F25D90',
                  intro: t('ISDT_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(242, 93, 144, 0.50)', title: t('ISDT_FullReport.DeepInsight.right.strategies.0.title'), text: t('ISDT_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(242, 93, 144, 0.80)', title: t('ISDT_FullReport.DeepInsight.right.strategies.1.title'), text: t('ISDT_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: '#F25D90', title: t('ISDT_FullReport.DeepInsight.right.strategies.2.title'), text: t('ISDT_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ISDT_FullReport.DeepInsight.right.tools.0.name'), description: t('ISDT_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ISDT_FullReport.DeepInsight.right.tools.1.name'), description: t('ISDT_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ISDT_FullReport.DeepInsight.right.tools.2.name'), description: t('ISDT_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ISDT_FullReport.DeepInsight.right.tools.3.name'), description: t('ISDT_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ISDT_FullReport.LearningEnvironment.title'),
              titleColor: '#F25D90',
                subTitleColor: 'rgba(242, 93, 144, 0.60)',
                  subtitle: t('ISDT_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: { description: t('ISDT_FullReport.LearningEnvironment.visualClarity.description') },
          zones: [
            { icon: <Candle />, title: t('ISDT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.zones.0.verb'), description: t('ISDT_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ISDT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.zones.1.verb'), description: t('ISDT_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ISDT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.zones.2.verb'), description: t('ISDT_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ISDT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.zones.3.verb'), description: t('ISDT_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ISDT_FullReport.LearningEnvironment.tools.0.title'), description: t('ISDT_FullReport.LearningEnvironment.tools.0.description'), result: t('ISDT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDT_FullReport.LearningEnvironment.tools.1.title'), description: t('ISDT_FullReport.LearningEnvironment.tools.1.description'), result: t('ISDT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDT_FullReport.LearningEnvironment.tools.2.title'), description: t('ISDT_FullReport.LearningEnvironment.tools.2.description'), result: t('ISDT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDT_FullReport.LearningEnvironment.tools.3.title'), description: t('ISDT_FullReport.LearningEnvironment.tools.3.description'), result: t('ISDT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ISDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#F25D90',
            title: t('ISDT_FullReport.MentorMatch.title'),
              description: t('ISDT_FullReport.MentorMatch.description'),
                benefits: [
                  { color: 'rgba(242, 93, 144, 0.50)', text: t('ISDT_FullReport.MentorMatch.benefits.0.text') },
                  { color: 'rgba(242, 93, 144, 0.80)', text: t('ISDT_FullReport.MentorMatch.benefits.1.text') },
                  { color: '#F25D90', text: t('ISDT_FullReport.MentorMatch.benefits.2.text') },
                ],
                  mentorTypes: [
                    { image: '/images/Ellipse 3.png', name: t('ISDT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ISDT_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/DPSEMDX.png', name: t('ISDT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ISDT_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#F25D90',
            suggestionTitle: t('ISDT_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ISDT_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ISDT_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ISDT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ISDT_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ISDT_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ISDT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ISDT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ISDT_FullReport.LearningWeatherReport.title'),
            titleColor: '#F25D90',
              subTitleColor: 'rgba(242, 93, 144, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ISDT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ISDT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ISDT_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ISDT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ISDT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ISDT_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ISDT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ISDT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ISDT_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ISDT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ISDT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ISDT_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ISDT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ISDT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ISDT_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#F25D90',
            forecastTitle: t('ISDT_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ISDT_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/BethHarmon.svg', name: t('ISDT_FullReport.GrowthForecast.people.0.name'), description: t('ISDT_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/SheldonCooper.svg', name: t('ISDT_FullReport.GrowthForecast.people.1.name'), description: t('ISDT_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ISDT_FullReport.Inspired.title'),
              projects: [
                { title: t('ISDT_FullReport.Inspired.projects.0.title'), forLabel: t('ISDT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ISDT_FullReport.Inspired.projects.0.forTarget'), description: t('ISDT_FullReport.Inspired.projects.0.description'), tags: t('ISDT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ISDT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/CompareISDT.png' },
                { title: t('ISDT_FullReport.Inspired.projects.1.title'), forLabel: t('ISDT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ISDT_FullReport.Inspired.projects.1.forTarget'), description: t('ISDT_FullReport.Inspired.projects.1.description'), tags: t('ISDT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ISDT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/BuildISDT.svg' },
                { title: t('ISDT_FullReport.Inspired.projects.2.title'), forLabel: t('ISDT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ISDT_FullReport.Inspired.projects.2.forTarget'), description: t('ISDT_FullReport.Inspired.projects.2.description'), tags: t('ISDT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ISDT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/StudyISDT.png' },
              ],
                action: { message: t('ISDT_FullReport.Inspired.action.message'), button1: t('ISDT_FullReport.Inspired.action.button1'), button2: t('ISDT_FullReport.Inspired.action.button2') },
        },
    },

    ESDT: {
        titleColor: '#FFA72D',
          image: {
            female: '/images/SimpleReport-ESDT-Female.png',
            male: '/images/SimpleReport-ESDT-Male.png',
  },
      bg: "/images/fullReport4.jpg",
        colorPaletteImage: '',
          title: t('ESDT_FullReport.title'),
            badges: t('ESDT_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ESDT_FullReport.famousPerson.female.name'), image: '/images/Nikita.svg' },
          male: { name: t('ESDT_FullReport.famousPerson.male.name'), image: '/images/FrankUnderwood.svg' },
        },
        quote: t('ESDT_FullReport.quote'),
          quoteAuthor: t('ESDT_FullReport.quoteAuthor'),
            strengths: t('ESDT_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ESDT_FullReport.detail'),

                motivation: {
          label: t('ESDT_FullReport.motivation.label'),
            value: t('ESDT_FullReport.motivation.value'),
              description: t('ESDT_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ESDT_FullReport.cognition.label'),
            value: t('ESDT_FullReport.cognition.value'),
              description: t('ESDT_FullReport.cognition.description'),
  },
        environment: {
          label: t('ESDT_FullReport.environment.label'),
            value: t('ESDT_FullReport.environment.value'),
              description: t('ESDT_FullReport.environment.description'),
  },
        approach: {
          label: t('ESDT_FullReport.approach.label'),
            value: t('ESDT_FullReport.approach.value'),
              description: t('ESDT_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#FFA72D'} />,
              title: t('ESDT_FullReport.DeepInsight.left.title'),
                titleColor: '#FFA72D',
                  highlight: t('ESDT_FullReport.DeepInsight.left.highlight'),
                    description: t('ESDT_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#FFA72D'} />,
              subtitle: t('ESDT_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#FFA72D',
                  intro: t('ESDT_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(255, 167, 45, 0.50)', title: t('ESDT_FullReport.DeepInsight.right.strategies.0.title'), text: t('ESDT_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(255, 167, 45, 0.80)', title: t('ESDT_FullReport.DeepInsight.right.strategies.1.title'), text: t('ESDT_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: '#FFA72D', title: t('ESDT_FullReport.DeepInsight.right.strategies.2.title'), text: t('ESDT_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ESDT_FullReport.DeepInsight.right.tools.0.name'), description: t('ESDT_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ESDT_FullReport.DeepInsight.right.tools.1.name'), description: t('ESDT_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ESDT_FullReport.DeepInsight.right.tools.2.name'), description: t('ESDT_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ESDT_FullReport.DeepInsight.right.tools.3.name'), description: t('ESDT_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ESDT_FullReport.LearningEnvironment.title'),
              titleColor: '#FFA72D',
                subTitleColor: 'rgba(255, 167, 45, 0.60)',
                  subtitle: t('ESDT_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: { description: t('ESDT_FullReport.LearningEnvironment.visualClarity.description') },
          zones: [
            { icon: <Candle />, title: t('ESDT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.zones.0.verb'), description: t('ESDT_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ESDT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.zones.1.verb'), description: t('ESDT_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ESDT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.zones.2.verb'), description: t('ESDT_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ESDT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.zones.3.verb'), description: t('ESDT_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ESDT_FullReport.LearningEnvironment.tools.0.title'), description: t('ESDT_FullReport.LearningEnvironment.tools.0.description'), result: t('ESDT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDT_FullReport.LearningEnvironment.tools.1.title'), description: t('ESDT_FullReport.LearningEnvironment.tools.1.description'), result: t('ESDT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDT_FullReport.LearningEnvironment.tools.2.title'), description: t('ESDT_FullReport.LearningEnvironment.tools.2.description'), result: t('ESDT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDT_FullReport.LearningEnvironment.tools.3.title'), description: t('ESDT_FullReport.LearningEnvironment.tools.3.description'), result: t('ESDT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ESDT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#FFA72D',
            title: t('ESDT_FullReport.MentorMatch.title'),
              description: t('ESDT_FullReport.MentorMatch.description'),
                benefits: [
                  { color: 'rgba(255, 167, 45, 0.50)', text: t('ESDT_FullReport.MentorMatch.benefits.0.text') },
                  { color: 'rgba(255, 167, 45, 0.80)', text: t('ESDT_FullReport.MentorMatch.benefits.1.text') },
                  { color: '#FFA72D', text: t('ESDT_FullReport.MentorMatch.benefits.2.text') },
                ],
                  mentorTypes: [
                    { image: '/images/PPEESDT.png', name: t('ESDT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ESDT_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/Ellipse 3.png', name: t('ESDT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ESDT_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#FFA72D',
            suggestionTitle: t('ESDT_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ESDT_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ESDT_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ESDT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ESDT_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ESDT_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ESDT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ESDT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ESDT_FullReport.LearningWeatherReport.title'),
            titleColor: '#FFA72D',
              subTitleColor: 'rgba(255, 167, 45, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ESDT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ESDT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ESDT_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ESDT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ESDT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ESDT_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ESDT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ESDT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ESDT_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ESDT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ESDT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ESDT_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ESDT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ESDT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ESDT_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#FFA72D',
            forecastTitle: t('ESDT_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ESDT_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/Nikita.svg', name: t('ESDT_FullReport.GrowthForecast.people.0.name'), description: t('ESDT_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/FrankUnderwood.svg', name: t('ESDT_FullReport.GrowthForecast.people.1.name'), description: t('ESDT_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ESDT_FullReport.Inspired.title'),
              projects: [
                { title: t('ESDT_FullReport.Inspired.projects.0.title'), forLabel: t('ESDT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ESDT_FullReport.Inspired.projects.0.forTarget'), description: t('ESDT_FullReport.Inspired.projects.0.description'), tags: t('ESDT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ESDT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/FilmESDT.svg' },
                { title: t('ESDT_FullReport.Inspired.projects.1.title'), forLabel: t('ESDT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ESDT_FullReport.Inspired.projects.1.forTarget'), description: t('ESDT_FullReport.Inspired.projects.1.description'), tags: t('ESDT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ESDT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/BuildESDT.svg' },
                { title: t('ESDT_FullReport.Inspired.projects.2.title'), forLabel: t('ESDT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ESDT_FullReport.Inspired.projects.2.forTarget'), description: t('ESDT_FullReport.Inspired.projects.2.description'), tags: t('ESDT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ESDT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/ReverseESDT.svg' },
              ],
                action: { message: t('ESDT_FullReport.Inspired.action.message'), button1: t('ESDT_FullReport.Inspired.action.button1'), button2: t('ESDT_FullReport.Inspired.action.button2') },
        },
    },
    
    ISDX: {
        titleColor: '#F25D90',
      image: {
        female: '/images/SimpleReport-ISDX-Female.png',
        male: '/images/SimpleReport-ISDX-Male.png',
      },
      bg: "/images/fullReport2.jpg",
        colorPaletteImage: '',
          title: t('ISDX_FullReport.title'),
            badges: t('ISDX_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ISDX_FullReport.famousPerson.female.name'), image: '/images/Shuri.svg' },
          male: { name: t('ISDX_FullReport.famousPerson.male.name'), image: '/images/HiroHamada&Baymax.svg' },
        },
        quote: t('ISDX_FullReport.quote'),
          quoteAuthor: t('ISDX_FullReport.quoteAuthor'),
            strengths: t('ISDX_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ISDX_FullReport.detail'),

                motivation: {
          label: t('ISDX_FullReport.motivation.label'),
            value: t('ISDX_FullReport.motivation.value'),
              description: t('ISDX_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ISDX_FullReport.cognition.label'),
            value: t('ISDX_FullReport.cognition.value'),
              description: t('ISDX_FullReport.cognition.description'),
  },
        environment: {
          label: t('ISDX_FullReport.environment.label'),
            value: t('ISDX_FullReport.environment.value'),
              description: t('ISDX_FullReport.environment.description'),
  },
        approach: {
          label: t('ISDX_FullReport.approach.label'),
            value: t('ISDX_FullReport.approach.value'),
              description: t('ISDX_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#F25D90'} />,
              title: t('ISDX_FullReport.DeepInsight.left.title'),
                titleColor: '#F25D90',
                  highlight: t('ISDX_FullReport.DeepInsight.left.highlight'),
                    description: t('ISDX_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#F25D90'} />,
              subtitle: t('ISDX_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#F25D90',
                  intro: t('ISDX_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(242, 93, 144, 0.50)', title: t('ISDX_FullReport.DeepInsight.right.strategies.0.title'), text: t('ISDX_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(242, 93, 144, 0.80)', title: t('ISDX_FullReport.DeepInsight.right.strategies.1.title'), text: t('ISDX_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: '#F25D90', title: t('ISDX_FullReport.DeepInsight.right.strategies.2.title'), text: t('ISDX_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ISDX_FullReport.DeepInsight.right.tools.0.name'), description: t('ISDX_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ISDX_FullReport.DeepInsight.right.tools.1.name'), description: t('ISDX_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ISDX_FullReport.DeepInsight.right.tools.2.name'), description: t('ISDX_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ISDX_FullReport.DeepInsight.right.tools.3.name'), description: t('ISDX_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ISDX_FullReport.LearningEnvironment.title'),
              titleColor: '#F25D90',
                subTitleColor: 'rgba(242, 93, 144, 0.60)',
                  subtitle: t('ISDX_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: { description: t('ISDX_FullReport.LearningEnvironment.visualClarity.description') },
          zones: [
            { icon: <Candle />, title: t('ISDX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.zones.0.verb'), description: t('ISDX_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ISDX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.zones.1.verb'), description: t('ISDX_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ISDX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.zones.2.verb'), description: t('ISDX_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ISDX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.zones.3.verb'), description: t('ISDX_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ISDX_FullReport.LearningEnvironment.tools.0.title'), description: t('ISDX_FullReport.LearningEnvironment.tools.0.description'), result: t('ISDX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDX_FullReport.LearningEnvironment.tools.1.title'), description: t('ISDX_FullReport.LearningEnvironment.tools.1.description'), result: t('ISDX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDX_FullReport.LearningEnvironment.tools.2.title'), description: t('ISDX_FullReport.LearningEnvironment.tools.2.description'), result: t('ISDX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISDX_FullReport.LearningEnvironment.tools.3.title'), description: t('ISDX_FullReport.LearningEnvironment.tools.3.description'), result: t('ISDX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ISDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#F25D90',
            title: t('ISDX_FullReport.MentorMatch.title'),
              description: t('ISDX_FullReport.MentorMatch.description'),
                benefits: [
                  { color: 'rgba(242, 93, 144, 0.50)', text: t('ISDX_FullReport.MentorMatch.benefits.0.text') },
                  { color: 'rgba(242, 93, 144, 0.80)', text: t('ISDX_FullReport.MentorMatch.benefits.1.text') },
                  { color: '#F25D90', text: t('ISDX_FullReport.MentorMatch.benefits.2.text') },
                ],
                  mentorTypes: [
                    { image: '/images/PPEESDT.png', name: t('ISDX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ISDX_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/DPSEMDX.png', name: t('ISDX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ISDX_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#F25D90',
            suggestionTitle: t('ISDX_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ISDX_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ISDX_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ISDX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ISDX_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ISDX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ISDX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ISDX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ISDX_FullReport.LearningWeatherReport.title'),
            titleColor: '#F25D90',
              subTitleColor: 'rgba(242, 93, 144, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ISDX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ISDX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ISDX_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ISDX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ISDX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ISDX_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ISDX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ISDX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ISDX_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ISDX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ISDX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ISDX_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ISDX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ISDX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ISDX_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#F25D90',
            forecastTitle: t('ISDX_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ISDX_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/Shuri.svg', name: t('ISDX_FullReport.GrowthForecast.people.0.name'), description: t('ISDX_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/HiroHamada&Baymax.svg', name: t('ISDX_FullReport.GrowthForecast.people.1.name'), description: t('ISDX_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ISDX_FullReport.Inspired.title'),
              projects: [
                { title: t('ISDX_FullReport.Inspired.projects.0.title'), forLabel: t('ISDX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ISDX_FullReport.Inspired.projects.0.forTarget'), description: t('ISDX_FullReport.Inspired.projects.0.description'), tags: t('ISDX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ISDX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/FindISDX.svg' },
                { title: t('ISDX_FullReport.Inspired.projects.1.title'), forLabel: t('ISDX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ISDX_FullReport.Inspired.projects.1.forTarget'), description: t('ISDX_FullReport.Inspired.projects.1.description'), tags: t('ISDX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ISDX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/BuildISDX.svg' },
                { title: t('ISDX_FullReport.Inspired.projects.2.title'), forLabel: t('ISDX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ISDX_FullReport.Inspired.projects.2.forTarget'), description: t('ISDX_FullReport.Inspired.projects.2.description'), tags: t('ISDX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ISDX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/TestISDX.png' },
              ],
                action: { message: t('ISDX_FullReport.Inspired.action.message'), button1: t('ISDX_FullReport.Inspired.action.button1'), button2: t('ISDX_FullReport.Inspired.action.button2') },
        },
    },

    ESDX: {
        titleColor: '#FFA72D',
          image: {
            female: '/images/SimpleReport-ESDX-Female.png',
            male: '/images/SimpleReport-ESDX-Male.png',
  },
      bg: "/images/fullReport4.jpg",
        colorPaletteImage: '',
          title: t('ESDX_FullReport.title'),
            badges: t('ESDX_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ESDX_FullReport.famousPerson.female.name'), image: '/images/HarleyQuinn.svg' },
          male: { name: t('ESDX_FullReport.famousPerson.male.name'), image: '/images/Gru.svg' },
        },
        quote: t('ESDX_FullReport.quote'),
          quoteAuthor: t('ESDX_FullReport.quoteAuthor'),
            strengths: t('ESDX_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ESDX_FullReport.detail'),

                motivation: {
          label: t('ESDX_FullReport.motivation.label'),
            value: t('ESDX_FullReport.motivation.value'),
              description: t('ESDX_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ESDX_FullReport.cognition.label'),
            value: t('ESDX_FullReport.cognition.value'),
              description: t('ESDX_FullReport.cognition.description'),
  },
        environment: {
          label: t('ESDX_FullReport.environment.label'),
            value: t('ESDX_FullReport.environment.value'),
              description: t('ESDX_FullReport.environment.description'),
  },
        approach: {
          label: t('ESDX_FullReport.approach.label'),
            value: t('ESDX_FullReport.approach.value'),
              description: t('ESDX_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#FFA72D'} />,
              title: t('ESDX_FullReport.DeepInsight.left.title'),
                titleColor: '#FFA72D',
                  highlight: t('ESDX_FullReport.DeepInsight.left.highlight'),
                    description: t('ESDX_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#FFA72D'} />,
              subtitle: t('ESDX_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#FFA72D',
                  intro: t('ESDX_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(255, 167, 45, 0.50)', title: t('ESDX_FullReport.DeepInsight.right.strategies.0.title'), text: t('ESDX_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(255, 167, 45, 0.80)', title: t('ESDX_FullReport.DeepInsight.right.strategies.1.title'), text: t('ESDX_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: '#FFA72D', title: t('ESDX_FullReport.DeepInsight.right.strategies.2.title'), text: t('ESDX_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ESDX_FullReport.DeepInsight.right.tools.0.name'), description: t('ESDX_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ESDX_FullReport.DeepInsight.right.tools.1.name'), description: t('ESDX_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ESDX_FullReport.DeepInsight.right.tools.2.name'), description: t('ESDX_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ESDX_FullReport.DeepInsight.right.tools.3.name'), description: t('ESDX_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ESDX_FullReport.LearningEnvironment.title'),
              titleColor: '#FFA72D',
                subTitleColor: 'rgba(255, 167, 45, 0.60)',
                  subtitle: t('ESDX_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: { description: t('ESDX_FullReport.LearningEnvironment.visualClarity.description') },
          zones: [
            { icon: <Candle />, title: t('ESDX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.zones.0.verb'), description: t('ESDX_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ESDX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.zones.1.verb'), description: t('ESDX_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ESDX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.zones.2.verb'), description: t('ESDX_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ESDX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.zones.3.verb'), description: t('ESDX_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ESDX_FullReport.LearningEnvironment.tools.0.title'), description: t('ESDX_FullReport.LearningEnvironment.tools.0.description'), result: t('ESDX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDX_FullReport.LearningEnvironment.tools.1.title'), description: t('ESDX_FullReport.LearningEnvironment.tools.1.description'), result: t('ESDX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDX_FullReport.LearningEnvironment.tools.2.title'), description: t('ESDX_FullReport.LearningEnvironment.tools.2.description'), result: t('ESDX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESDX_FullReport.LearningEnvironment.tools.3.title'), description: t('ESDX_FullReport.LearningEnvironment.tools.3.description'), result: t('ESDX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ESDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#FFA72D',
            title: t('ESDX_FullReport.MentorMatch.title'),
              description: t('ESDX_FullReport.MentorMatch.description'),
                benefits: [
                  { color: 'rgba(255, 167, 45, 0.50)', text: t('ESDX_FullReport.MentorMatch.benefits.0.text') },
                  { color: 'rgba(255, 167, 45, 0.80)', text: t('ESDX_FullReport.MentorMatch.benefits.1.text') },
                  { color: '#FFA72D', text: t('ESDX_FullReport.MentorMatch.benefits.2.text') },
                ],
                  mentorTypes: [
                    { image: '/images/DGEIMCX.png', name: t('ESDX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ESDX_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/Mentortype2EMDT.png', name: t('ESDX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ESDX_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#FFA72D',
            suggestionTitle: t('ESDX_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ESDX_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ESDX_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ESDX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ESDX_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ESDX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ESDX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ESDX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ESDX_FullReport.LearningWeatherReport.title'),
            titleColor: '#FFA72D',
              subTitleColor: 'rgba(255, 167, 45, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ESDX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ESDX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ESDX_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ESDX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ESDX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ESDX_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ESDX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ESDX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ESDX_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ESDX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ESDX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ESDX_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ESDX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ESDX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ESDX_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#FFA72D',
            forecastTitle: t('ESDX_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ESDX_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/HarleyQuinn.svg', name: t('ESDX_FullReport.GrowthForecast.people.0.name'), description: t('ESDX_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/Gru.svg', name: t('ESDX_FullReport.GrowthForecast.people.1.name'), description: t('ESDX_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ESDX_FullReport.Inspired.title'),
              projects: [
                { title: t('ESDX_FullReport.Inspired.projects.0.title'), forLabel: t('ESDX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ESDX_FullReport.Inspired.projects.0.forTarget'), description: t('ESDX_FullReport.Inspired.projects.0.description'), tags: t('ESDX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ESDX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/MapESDX.svg' },
                { title: t('ESDX_FullReport.Inspired.projects.1.title'), forLabel: t('ESDX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ESDX_FullReport.Inspired.projects.1.forTarget'), description: t('ESDX_FullReport.Inspired.projects.1.description'), tags: t('ESDX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ESDX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/AuditESDX.png' },
                { title: t('ESDX_FullReport.Inspired.projects.2.title'), forLabel: t('ESDX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ESDX_FullReport.Inspired.projects.2.forTarget'), description: t('ESDX_FullReport.Inspired.projects.2.description'), tags: t('ESDX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ESDX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/CreateESDX.svg' },
              ],
                action: { message: t('ESDX_FullReport.Inspired.action.message'), button1: t('ESDX_FullReport.Inspired.action.button1'), button2: t('ESDX_FullReport.Inspired.action.button2') },
        },
    },
    
    ISCT: {
        titleColor: '#F25D90',
      image: {
        female: '/images/SimpleReport-ISCT-Female.png',
        male: '/images/SimpleReport-ISCT-Male.png',
      },
      bg: "/images/fullReport2.jpg",
        colorPaletteImage: '',
          title: t('ISCT_FullReport.title'),
            badges: t('ISCT_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ISCT_FullReport.famousPerson.female.name'), image: '/images/AryaStark.svg' },
          male: { name: t('ISCT_FullReport.famousPerson.male.name'), image: '/images/MichaelScofield.svg' },
        },
        quote: t('ISCT_FullReport.quote'),
          quoteAuthor: t('ISCT_FullReport.quoteAuthor'),
            strengths: t('ISCT_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ISCT_FullReport.detail'),

                motivation: {
          label: t('ISCT_FullReport.motivation.label'),
            value: t('ISCT_FullReport.motivation.value'),
              description: t('ISCT_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ISCT_FullReport.cognition.label'),
            value: t('ISCT_FullReport.cognition.value'),
              description: t('ISCT_FullReport.cognition.description'),
  },
        environment: {
          label: t('ISCT_FullReport.environment.label'),
            value: t('ISCT_FullReport.environment.value'),
              description: t('ISCT_FullReport.environment.description'),
  },
        approach: {
          label: t('ISCT_FullReport.approach.label'),
            value: t('ISCT_FullReport.approach.value'),
              description: t('ISCT_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#F25D90'} />,
              title: t('ISCT_FullReport.DeepInsight.left.title'),
                titleColor: '#F25D90',
                  highlight: t('ISCT_FullReport.DeepInsight.left.highlight'),
                    description: t('ISCT_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#F25D90'} />,
              subtitle: t('ISCT_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#F25D90',
                  intro: t('ISCT_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(242, 93, 144, 0.5)', title: t('ISCT_FullReport.DeepInsight.right.strategies.0.title'), text: t('ISCT_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(242, 93, 144, 0.8)', title: t('ISCT_FullReport.DeepInsight.right.strategies.1.title'), text: t('ISCT_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: 'rgba(242, 93, 144, 1)', title: t('ISCT_FullReport.DeepInsight.right.strategies.2.title'), text: t('ISCT_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ISCT_FullReport.DeepInsight.right.tools.0.name'), description: t('ISCT_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ISCT_FullReport.DeepInsight.right.tools.1.name'), description: t('ISCT_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ISCT_FullReport.DeepInsight.right.tools.2.name'), description: t('ISCT_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ISCT_FullReport.DeepInsight.right.tools.3.name'), description: t('ISCT_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ISCT_FullReport.LearningEnvironment.title'),
              titleColor: '#F25D90',
                subTitleColor: 'rgba(242, 93, 144, 0.60)',
                  subtitle: t('ISCT_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: { description: t('ISCT_FullReport.LearningEnvironment.visualClarity.description') },
          zones: [
            { icon: <Candle />, title: t('ISCT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.zones.0.verb'), description: t('ISCT_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ISCT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.zones.1.verb'), description: t('ISCT_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ISCT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.zones.2.verb'), description: t('ISCT_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ISCT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.zones.3.verb'), description: t('ISCT_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ISCT_FullReport.LearningEnvironment.tools.0.title'), description: t('ISCT_FullReport.LearningEnvironment.tools.0.description'), result: t('ISCT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCT_FullReport.LearningEnvironment.tools.1.title'), description: t('ISCT_FullReport.LearningEnvironment.tools.1.description'), result: t('ISCT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCT_FullReport.LearningEnvironment.tools.2.title'), description: t('ISCT_FullReport.LearningEnvironment.tools.2.description'), result: t('ISCT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCT_FullReport.LearningEnvironment.tools.3.title'), description: t('ISCT_FullReport.LearningEnvironment.tools.3.description'), result: t('ISCT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ISCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#F25D90',
            title: t('ISCT_FullReport.MentorMatch.title'),
              description: t('ISCT_FullReport.MentorMatch.description'),
                benefits: t('ISCT_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
                  mentorTypes: [
                    { image: '/images/DGSIMCT.png', name: t('ISCT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ISCT_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/PGSEMCT.png', name: t('ISCT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ISCT_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#F25D90',
            suggestionTitle: t('ISCT_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ISCT_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ISCT_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ISCT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ISCT_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ISCT_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ISCT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ISCT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ISCT_FullReport.LearningWeatherReport.title'),
            titleColor: '#F25D90',
              subTitleColor: 'rgba(242, 93, 144, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ISCT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ISCT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ISCT_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ISCT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ISCT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ISCT_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ISCT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ISCT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ISCT_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ISCT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ISCT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ISCT_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ISCT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ISCT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ISCT_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#F25D90',
            forecastTitle: t('ISCT_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ISCT_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/AryaStark.svg', name: t('ISCT_FullReport.GrowthForecast.people.0.name'), description: t('ISCT_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/MichaelScofield.svg', name: t('ISCT_FullReport.GrowthForecast.people.1.name'), description: t('ISCT_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ISCT_FullReport.Inspired.title'),
              projects: [
                { title: t('ISCT_FullReport.Inspired.projects.0.title'), forLabel: t('ISCT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ISCT_FullReport.Inspired.projects.0.forTarget'), description: t('ISCT_FullReport.Inspired.projects.0.description'), tags: t('ISCT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ISCT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/SolveISCT.svg' },
                { title: t('ISCT_FullReport.Inspired.projects.1.title'), forLabel: t('ISCT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ISCT_FullReport.Inspired.projects.1.forTarget'), description: t('ISCT_FullReport.Inspired.projects.1.description'), tags: t('ISCT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ISCT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/BuildISCT.png' },
                { title: t('ISCT_FullReport.Inspired.projects.2.title'), forLabel: t('ISCT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ISCT_FullReport.Inspired.projects.2.forTarget'), description: t('ISCT_FullReport.Inspired.projects.2.description'), tags: t('ISCT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ISCT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/CompareISCT.png' },
              ],
                action: { message: t('ISCT_FullReport.Inspired.action.message'), button1: t('ISCT_FullReport.Inspired.action.button1'), button2: t('ISCT_FullReport.Inspired.action.button2') },
        },
    },
    
    ISCX: {
        titleColor: '#F25D90',
          image: {
            female: '/images/SimpleReport-ISCX-Female.png',
            male: '/images/SimpleReport-ISCX-Male.png',
  },
      bg:"/images/fullReport2.jpg",
        colorPaletteImage: '',
          title: t('ISCX_FullReport.title'),
            badges: t('ISCX_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ISCX_FullReport.famousPerson.female.name'), image: '/images/AméliePoulain.svg' },
          male: { name: t('ISCX_FullReport.famousPerson.male.name'), image: '/images/EthanHunt.svg' },
        },
        quote: t('ISCX_FullReport.quote'),
          quoteAuthor: t('ISCX_FullReport.quoteAuthor'),
            strengths: t('ISCX_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ISCX_FullReport.detail'),

                motivation: {
          label: t('ISCX_FullReport.motivation.label'),
            value: t('ISCX_FullReport.motivation.value'),
              description: t('ISCX_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ISCX_FullReport.cognition.label'),
            value: t('ISCX_FullReport.cognition.value'),
              description: t('ISCX_FullReport.cognition.description'),
  },
        environment: {
          label: t('ISCX_FullReport.environment.label'),
            value: t('ISCX_FullReport.environment.value'),
              description: t('ISCX_FullReport.environment.description'),
  },
        approach: {
          label: t('ISCX_FullReport.approach.label'),
            value: t('ISCX_FullReport.approach.value'),
              description: t('ISCX_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#F25D90'} />,
              title: t('ISCX_FullReport.DeepInsight.left.title'),
                titleColor: '#F25D90',
                  highlight: t('ISCX_FullReport.DeepInsight.left.highlight'),
                    description: t('ISCX_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#F25D90'} />,
              subtitle: t('ISCX_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#F25D90',
                  intro: t('ISCX_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(242, 93, 144, 0.5)', title: t('ISCX_FullReport.DeepInsight.right.strategies.0.title'), text: t('ISCX_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(242, 93, 144, 0.8)', title: t('ISCX_FullReport.DeepInsight.right.strategies.1.title'), text: t('ISCX_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: 'rgba(242, 93, 144, 1)', title: t('ISCX_FullReport.DeepInsight.right.strategies.2.title'), text: t('ISCX_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ISCX_FullReport.DeepInsight.right.tools.0.name'), description: t('ISCX_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ISCX_FullReport.DeepInsight.right.tools.1.name'), description: t('ISCX_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ISCX_FullReport.DeepInsight.right.tools.2.name'), description: t('ISCX_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ISCX_FullReport.DeepInsight.right.tools.3.name'), description: t('ISCX_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        // ✅ Learning Environment Block
        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ISCX_FullReport.LearningEnvironment.title'),
              titleColor: '#F25D90',
                subTitleColor: 'rgba(242, 93, 144, 0.60)',
                  subtitle: t('ISCX_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: {
            description: t('ISCX_FullReport.LearningEnvironment.visualClarity.description'),
    },
          zones: [
            { icon: <Candle />, title: t('ISCX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.zones.0.verb'), description: t('ISCX_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ISCX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.zones.1.verb'), description: t('ISCX_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ISCX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.zones.2.verb'), description: t('ISCX_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ISCX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.zones.3.verb'), description: t('ISCX_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ISCX_FullReport.LearningEnvironment.tools.0.title'), description: t('ISCX_FullReport.LearningEnvironment.tools.0.description'), result: t('ISCX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCX_FullReport.LearningEnvironment.tools.1.title'), description: t('ISCX_FullReport.LearningEnvironment.tools.1.description'), result: t('ISCX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCX_FullReport.LearningEnvironment.tools.2.title'), description: t('ISCX_FullReport.LearningEnvironment.tools.2.description'), result: t('ISCX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
              { title: t('ISCX_FullReport.LearningEnvironment.tools.3.title'), description: t('ISCX_FullReport.LearningEnvironment.tools.3.description'), result: t('ISCX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: '', description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#F25D90',
                  subTitleColor: 'rgba(242, 93, 144, 0.60)',
                    subtitle: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#F25D90', subTitleColor: 'rgba(242, 93, 144, 0.60)', verb: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ISCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#F25D90',
            title: t('ISCX_FullReport.MentorMatch.title'),
              description: t('ISCX_FullReport.MentorMatch.description'),
                benefits: t('ISCX_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
                  mentorTypes: [
                    { image: '/images/PPSISCX.svg', name: t('ISCX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ISCX_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/DPEISCX.svg', name: t('ISCX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ISCX_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#F25D90',
            suggestionTitle: t('ISCX_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ISCX_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ISCX_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ISCX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ISCX_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ISCX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ISCX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ISCX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ISCX_FullReport.LearningWeatherReport.title'),
            titleColor: '#F25D90',
              subTitleColor: 'rgba(242, 93, 144, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ISCX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ISCX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ISCX_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ISCX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ISCX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ISCX_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ISCX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ISCX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ISCX_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ISCX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ISCX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ISCX_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ISCX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ISCX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ISCX_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#F25D90',
            forecastTitle: t('ISCX_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ISCX_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/AméliePoulain.svg', name: t('ISCX_FullReport.GrowthForecast.people.0.name'), description: t('ISCX_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/EthanHunt.svg', name: t('ISCX_FullReport.GrowthForecast.people.1.name'), description: t('ISCX_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ISCX_FullReport.Inspired.title'),
              projects: [
                { title: t('ISCX_FullReport.Inspired.projects.0.title'), forLabel: t('ISCX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ISCX_FullReport.Inspired.projects.0.forTarget'), description: t('ISCX_FullReport.Inspired.projects.0.description'), tags: t('ISCX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ISCX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/StreamlineISCX.svg' },
                { title: t('ISCX_FullReport.Inspired.projects.1.title'), forLabel: t('ISCX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ISCX_FullReport.Inspired.projects.1.forTarget'), description: t('ISCX_FullReport.Inspired.projects.1.description'), tags: t('ISCX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ISCX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/LearnISCX.svg' },
                { title: t('ISCX_FullReport.Inspired.projects.2.title'), forLabel: t('ISCX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ISCX_FullReport.Inspired.projects.2.forTarget'), description: t('ISCX_FullReport.Inspired.projects.2.description'), tags: t('ISCX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ISCX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/MasterISCX.svg' },
              ],
                action: { message: t('ISCX_FullReport.Inspired.action.message'), button1: t('ISCX_FullReport.Inspired.action.button1'), button2: t('ISCX_FullReport.Inspired.action.button2') },
        },
    },

    ESCX: {
        titleColor: '#FFA72D',
          image: {
            female: '/images/SimpleReport-ESCX-Female.png',
            male: '/images/SimpleReport-ESCX-Male.png',
  },
      bg: "/images/fullReport4.jpg",
        colorPaletteImage: '',
          title: t('ESCX_FullReport.title'),
            badges: t('ESCX_FullReport.badges', { returnObjects: true }) as string[],
              famousPerson: {
          female: { name: t('ESCX_FullReport.famousPerson.female.name'), image: '/images/Atlanna.svg' },
          male: { name: t('ESCX_FullReport.famousPerson.male.name'), image: '/images/HarryPotter.svg' },
        },
        quote: t('ESCX_FullReport.quote'),
          quoteAuthor: t('ESCX_FullReport.quoteAuthor'),
            strengths: t('ESCX_FullReport.strengths', { returnObjects: true }) as string[],
              detail: t('ESCX_FullReport.detail'),

                motivation: {
          label: t('ESCX_FullReport.motivation.label'),
            value: t('ESCX_FullReport.motivation.value'),
              description: t('ESCX_FullReport.motivation.description'),
  },
        cognition: {
          label: t('ESCX_FullReport.cognition.label'),
            value: t('ESCX_FullReport.cognition.value'),
              description: t('ESCX_FullReport.cognition.description'),
  },
        environment: {
          label: t('ESCX_FullReport.environment.label'),
            value: t('ESCX_FullReport.environment.value'),
              description: t('ESCX_FullReport.environment.description'),
  },
        approach: {
          label: t('ESCX_FullReport.approach.label'),
            value: t('ESCX_FullReport.approach.value'),
              description: t('ESCX_FullReport.approach.description'),
  },

        DeepInsight: {
          left: {
            icon: <Discovery fill={'#FFA72D'} />,
              title: t('ESCX_FullReport.DeepInsight.left.title'),
                titleColor: '#FFA72D',
                  highlight: t('ESCX_FullReport.DeepInsight.left.highlight'),
                    description: t('ESCX_FullReport.DeepInsight.left.description'),
    },
          right: {
            icon: <Compass fill={'#FFA72D'} />,
              subtitle: t('ESCX_FullReport.DeepInsight.right.subtitle'),
                titleColor: '#FFA72D',
                  intro: t('ESCX_FullReport.DeepInsight.right.intro'),
                    strategies: [
                      { color: 'rgba(255, 167, 45, 0.5)', title: t('ESCX_FullReport.DeepInsight.right.strategies.0.title'), text: t('ESCX_FullReport.DeepInsight.right.strategies.0.text') },
                      { color: 'rgba(255, 167, 45, 0.8)', title: t('ESCX_FullReport.DeepInsight.right.strategies.1.title'), text: t('ESCX_FullReport.DeepInsight.right.strategies.1.text') },
                      { color: 'rgba(255, 167, 45, 1)', title: t('ESCX_FullReport.DeepInsight.right.strategies.2.title'), text: t('ESCX_FullReport.DeepInsight.right.strategies.2.text') },
                    ],
                      tools: [
                        { name: t('ESCX_FullReport.DeepInsight.right.tools.0.name'), description: t('ESCX_FullReport.DeepInsight.right.tools.0.description') },
                        { name: t('ESCX_FullReport.DeepInsight.right.tools.1.name'), description: t('ESCX_FullReport.DeepInsight.right.tools.1.description') },
                        { name: t('ESCX_FullReport.DeepInsight.right.tools.2.name'), description: t('ESCX_FullReport.DeepInsight.right.tools.2.description') },
                        { name: t('ESCX_FullReport.DeepInsight.right.tools.3.name'), description: t('ESCX_FullReport.DeepInsight.right.tools.3.description') },
                      ],
    },
        },

        // ✅ Learning Environment Block
        LearningEnvironment: {
          icon: <Workplace />,
            title: t('ESCX_FullReport.LearningEnvironment.title'),
              titleColor: '#FFA72D',
                subTitleColor: 'rgba(255, 167, 45, 0.60)',
                  subtitle: t('ESCX_FullReport.LearningEnvironment.subtitle'),
                    visualClarity: {
            description: t('ESCX_FullReport.LearningEnvironment.visualClarity.description'),
    },
          zones: [
            { icon: <Candle />, title: t('ESCX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.zones.0.verb'), description: t('ESCX_FullReport.LearningEnvironment.zones.0.description') },
            { icon: <Lamp />, title: t('ESCX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.zones.1.verb'), description: t('ESCX_FullReport.LearningEnvironment.zones.1.description') },
            { icon: <Magicball />, title: t('ESCX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.zones.2.verb'), description: t('ESCX_FullReport.LearningEnvironment.zones.2.description') },
            { icon: <Magicwand />, title: t('ESCX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.zones.3.verb'), description: t('ESCX_FullReport.LearningEnvironment.zones.3.description') },
          ],
            tools: [
              { title: t('ESCX_FullReport.LearningEnvironment.tools.0.title'), description: t('ESCX_FullReport.LearningEnvironment.tools.0.description'), result: t('ESCX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESCX_FullReport.LearningEnvironment.tools.1.title'), description: t('ESCX_FullReport.LearningEnvironment.tools.1.description'), result: t('ESCX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESCX_FullReport.LearningEnvironment.tools.2.title'), description: t('ESCX_FullReport.LearningEnvironment.tools.2.description'), result: t('ESCX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
              { title: t('ESCX_FullReport.LearningEnvironment.tools.3.title'), description: t('ESCX_FullReport.LearningEnvironment.tools.3.description'), result: t('ESCX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
            ],
              sensoryFlow: {
            left: {
              title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                      zones: [
                        { icon: <EyeCare />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                        { icon: <Ear />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                        { icon: <Nose />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                        { icon: <Reach />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                      ],
      },
            right: {
              title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                titleColor: '#FFA72D',
                  subTitleColor: 'rgba(255, 167, 45, 0.60)',
                    subtitle: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                      anchors: [
                        { icon: <Anchor />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                        { icon: <Bell />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                        { icon: <Push />, title: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ESCX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                      ],
      },
          },
        },

        MentorMatch: {
          titleColor: '#FFA72D',
            title: t('ESCX_FullReport.MentorMatch.title'),
              description: t('ESCX_FullReport.MentorMatch.description'),
                benefits: t('ESCX_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
                  mentorTypes: [
                    { image: '/images/DPEIMDX.svg', name: t('ESCX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ESCX_FullReport.MentorMatch.mentorTypes.0.description') },
                    { image: '/images/DGSIMCT.png', name: t('ESCX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ESCX_FullReport.MentorMatch.mentorTypes.1.description') },
                  ],
  },

        ProjectSuggestion: {
          titleColor: '#FFA72D',
            suggestionTitle: t('ESCX_FullReport.ProjectSuggestion.suggestionTitle'),
              suggestionSubtitle: t('ESCX_FullReport.ProjectSuggestion.suggestionSubtitle'),
                suggestionDescription: t('ESCX_FullReport.ProjectSuggestion.suggestionDescription'),
                  suggestionList: t('ESCX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                    suggestionFooter: t('ESCX_FullReport.ProjectSuggestion.suggestionFooter'),
                      growthEdgesTitle: t('ESCX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                        growthEdgesSubtitle: t('ESCX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                          growthPoints: t('ESCX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

        LearningWeatherReport: {
          title: t('ESCX_FullReport.LearningWeatherReport.title'),
            titleColor: '#FFA72D',
              subTitleColor: 'rgba(255, 167, 45, 0.60)',
                cards: [
                  { icon: <Atmosphere />, title: t('ESCX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ESCX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ESCX_FullReport.LearningWeatherReport.cards.0.description') },
                  { icon: <Earth />, title: t('ESCX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ESCX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ESCX_FullReport.LearningWeatherReport.cards.1.description') },
                  { icon: <Storm />, title: t('ESCX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ESCX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ESCX_FullReport.LearningWeatherReport.cards.2.description') },
                  { icon: <Sunlight />, title: t('ESCX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ESCX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ESCX_FullReport.LearningWeatherReport.cards.3.description') },
                  { icon: <Pinwheel />, title: t('ESCX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ESCX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ESCX_FullReport.LearningWeatherReport.cards.4.description') },
                ],
  },

        GrowthForecast: {
          titleColor: '#FFA72D',
            forecastTitle: t('ESCX_FullReport.GrowthForecast.forecastTitle'),
              forecastText: t('ESCX_FullReport.GrowthForecast.forecastText'),
                people: [
                  { image: '/images/Atlanna.svg', name: t('ESCX_FullReport.GrowthForecast.people.0.name'), description: t('ESCX_FullReport.GrowthForecast.people.0.description') },
                  { image: '/images/HarryPotter.svg', name: t('ESCX_FullReport.GrowthForecast.people.1.name'), description: t('ESCX_FullReport.GrowthForecast.people.1.description') },
                ],
  },

        Inspired: {
          titleColor: 'rgba(0, 70, 153, 1)',
            title: t('ESCX_FullReport.Inspired.title'),
              projects: [
                { title: t('ESCX_FullReport.Inspired.projects.0.title'), forLabel: t('ESCX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ESCX_FullReport.Inspired.projects.0.forTarget'), description: t('ESCX_FullReport.Inspired.projects.0.description'), tags: t('ESCX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ESCX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/StartESCX.png' },
                { title: t('ESCX_FullReport.Inspired.projects.1.title'), forLabel: t('ESCX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ESCX_FullReport.Inspired.projects.1.forTarget'), description: t('ESCX_FullReport.Inspired.projects.1.description'), tags: t('ESCX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ESCX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/DesignESCX.png' },
                { title: t('ESCX_FullReport.Inspired.projects.2.title'), forLabel: t('ESCX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ESCX_FullReport.Inspired.projects.2.forTarget'), description: t('ESCX_FullReport.Inspired.projects.2.description'), tags: t('ESCX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ESCX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/CreateESCX.svg' },
              ],
                action: { message: t('ESCX_FullReport.Inspired.action.message'), button1: t('ESCX_FullReport.Inspired.action.button1'), button2: t('ESCX_FullReport.Inspired.action.button2') },
        },
    },

    IMDX: {
            titleColor: '#004699',
      image: {
        female: '/images/SimpleReport-IMDX-Female.png',
        male: '/images/SimpleReport-IMDX-Male.png',
      },
      bg: "/images/fullReport1.jpg",
            colorPaletteImage: '',
              title: t('IMDX_FullReport.title'),
                badges: t('IMDX_FullReport.badges', { returnObjects: true }) as string[],
                  famousPerson: {
              female: { name: t('IMDX_FullReport.famousPerson.female.name'), image: '/images/Moana.svg' },
              male: { name: t('IMDX_FullReport.famousPerson.male.name'), image: '/images/NewtScamander.svg' },
            },
            quote: t('IMDX_FullReport.quote'),
              quoteAuthor: t('IMDX_FullReport.quoteAuthor'),
                strengths: t('IMDX_FullReport.strengths', { returnObjects: true }) as string[],
                  detail: t('IMDX_FullReport.detail'),

                    motivation: {
              label: t('IMDX_FullReport.motivation.label'),
                value: t('IMDX_FullReport.motivation.value'),
                  description: t('IMDX_FullReport.motivation.description'),
  },
            cognition: {
              label: t('IMDX_FullReport.cognition.label'),
                value: t('IMDX_FullReport.cognition.value'),
                  description: t('IMDX_FullReport.cognition.description'),
  },
            environment: {
              label: t('IMDX_FullReport.environment.label'),
                value: t('IMDX_FullReport.environment.value'),
                  description: t('IMDX_FullReport.environment.description'),
  },
            approach: {
              label: t('IMDX_FullReport.approach.label'),
                value: t('IMDX_FullReport.approach.value'),
                  description: t('IMDX_FullReport.approach.description'),
  },

            DeepInsight: {
              left: {
                icon: <Discovery fill={'#004699'} />,
                  title: t('IMDX_FullReport.DeepInsight.left.title'),
                    titleColor: '#004699',
                      highlight: t('IMDX_FullReport.DeepInsight.left.highlight'),
                        description: t('IMDX_FullReport.DeepInsight.left.description'),
    },
              right: {
                icon: <Compass fill={'#004699'} />,
                  subtitle: t('IMDX_FullReport.DeepInsight.right.subtitle'),
                    titleColor: '#004699',
                      intro: t('IMDX_FullReport.DeepInsight.right.intro'),
                        strategies: [
                          { color: 'rgba(0, 70, 153, 0.5)', title: t('IMDX_FullReport.DeepInsight.right.strategies.0.title'), text: t('IMDX_FullReport.DeepInsight.right.strategies.0.text') },
                          { color: 'rgba(0, 70, 153, 0.8)', title: t('IMDX_FullReport.DeepInsight.right.strategies.1.title'), text: t('IMDX_FullReport.DeepInsight.right.strategies.1.text') },
                          { color: 'rgba(0, 70, 153, 1)', title: t('IMDX_FullReport.DeepInsight.right.strategies.2.title'), text: t('IMDX_FullReport.DeepInsight.right.strategies.2.text') },
                        ],
                          tools: [
                            { name: t('IMDX_FullReport.DeepInsight.right.tools.0.name'), description: t('IMDX_FullReport.DeepInsight.right.tools.0.description') },
                            { name: t('IMDX_FullReport.DeepInsight.right.tools.1.name'), description: t('IMDX_FullReport.DeepInsight.right.tools.1.description') },
                            { name: t('IMDX_FullReport.DeepInsight.right.tools.2.name'), description: t('IMDX_FullReport.DeepInsight.right.tools.2.description') },
                            { name: t('IMDX_FullReport.DeepInsight.right.tools.3.name'), description: t('IMDX_FullReport.DeepInsight.right.tools.3.description') },
                          ],
    },
            },

            // ✅ Learning Environment Block
            LearningEnvironment: {
              icon: <Workplace />,
                title: t('IMDX_FullReport.LearningEnvironment.title'),
                  titleColor: '#004699',
                    subTitleColor: 'rgba(0, 70, 153, 0.60)',
                      subtitle: t('IMDX_FullReport.LearningEnvironment.subtitle'),
                        visualClarity: {
                description: t('IMDX_FullReport.LearningEnvironment.visualClarity.description'),
    },
              zones: [
                { icon: <Candle />, title: t('IMDX_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.zones.0.verb'), description: t('IMDX_FullReport.LearningEnvironment.zones.0.description') },
                { icon: <Lamp />, title: t('IMDX_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.zones.1.verb'), description: t('IMDX_FullReport.LearningEnvironment.zones.1.description') },
                { icon: <Magicball />, title: t('IMDX_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.zones.2.verb'), description: t('IMDX_FullReport.LearningEnvironment.zones.2.description') },
                { icon: <Magicwand />, title: t('IMDX_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.zones.3.verb'), description: t('IMDX_FullReport.LearningEnvironment.zones.3.description') },
              ],
                tools: [
                  { title: t('IMDX_FullReport.LearningEnvironment.tools.0.title'), description: t('IMDX_FullReport.LearningEnvironment.tools.0.description'), result: t('IMDX_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
                  { title: t('IMDX_FullReport.LearningEnvironment.tools.1.title'), description: t('IMDX_FullReport.LearningEnvironment.tools.1.description'), result: t('IMDX_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
                  { title: t('IMDX_FullReport.LearningEnvironment.tools.2.title'), description: t('IMDX_FullReport.LearningEnvironment.tools.2.description'), result: t('IMDX_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
                  { title: t('IMDX_FullReport.LearningEnvironment.tools.3.title'), description: t('IMDX_FullReport.LearningEnvironment.tools.3.description'), result: t('IMDX_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)' },
                ],
                  sensoryFlow: {
                left: {
                  title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                    titleColor: '#004699',
                      subTitleColor: 'rgba(0, 70, 153, 0.60)',
                        subtitle: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                          zones: [
                            { icon: <EyeCare />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                            { icon: <Ear />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                            { icon: <Nose />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                            { icon: <Reach />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: '', description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                          ],
      },
                right: {
                  title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                    titleColor: '#004699',
                      subTitleColor: 'rgba(0, 70, 153, 0.60)',
                        subtitle: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                          anchors: [
                            { icon: <Anchor />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                            { icon: <Bell />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                            { icon: <Push />, title: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#004699', subTitleColor: 'rgba(0, 70, 153, 0.60)', verb: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('IMDX_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                          ],
      },
              },
            },

            MentorMatch: {
              titleColor: '#004699',
                title: t('IMDX_FullReport.MentorMatch.title'),
                  description: t('IMDX_FullReport.MentorMatch.description'),
                    benefits: t('IMDX_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
                      mentorTypes: [
                        { image: '/images/DGEIMCX.png', name: t('IMDX_FullReport.MentorMatch.mentorTypes.0.name'), description: t('IMDX_FullReport.MentorMatch.mentorTypes.0.description') },
                        { image: '/images/DPEIMDX.svg', name: t('IMDX_FullReport.MentorMatch.mentorTypes.1.name'), description: t('IMDX_FullReport.MentorMatch.mentorTypes.1.description') },
                      ],
  },

            ProjectSuggestion: {
              titleColor: '#004699',
                suggestionTitle: t('IMDX_FullReport.ProjectSuggestion.suggestionTitle'),
                  suggestionSubtitle: t('IMDX_FullReport.ProjectSuggestion.suggestionSubtitle'),
                    suggestionDescription: t('IMDX_FullReport.ProjectSuggestion.suggestionDescription'),
                      suggestionList: t('IMDX_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                        suggestionFooter: t('IMDX_FullReport.ProjectSuggestion.suggestionFooter'),
                          growthEdgesTitle: t('IMDX_FullReport.ProjectSuggestion.growthEdgesTitle'),
                            growthEdgesSubtitle: t('IMDX_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                              growthPoints: t('IMDX_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

            LearningWeatherReport: {
              title: t('IMDX_FullReport.LearningWeatherReport.title'),
                titleColor: '#004699',
                  subTitleColor: 'rgba(0, 70, 153, 0.60)',
                    cards: [
                      { icon: <Atmosphere />, title: t('IMDX_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('IMDX_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('IMDX_FullReport.LearningWeatherReport.cards.0.description') },
                      { icon: <Earth />, title: t('IMDX_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('IMDX_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('IMDX_FullReport.LearningWeatherReport.cards.1.description') },
                      { icon: <Storm />, title: t('IMDX_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('IMDX_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('IMDX_FullReport.LearningWeatherReport.cards.2.description') },
                      { icon: <Sunlight />, title: t('IMDX_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('IMDX_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('IMDX_FullReport.LearningWeatherReport.cards.3.description') },
                      { icon: <Pinwheel />, title: t('IMDX_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('IMDX_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('IMDX_FullReport.LearningWeatherReport.cards.4.description') },
                    ],
  },

            GrowthForecast: {
              titleColor: '#004699',
                forecastTitle: t('IMDX_FullReport.GrowthForecast.forecastTitle'),
                  forecastText: t('IMDX_FullReport.GrowthForecast.forecastText'),
                    people: [
                      { image: '/images/Moana.svg', name: t('IMDX_FullReport.GrowthForecast.people.0.name'), description: t('IMDX_FullReport.GrowthForecast.people.0.description') },
                      { image: '/images/NewtScamander.svg', name: t('IMDX_FullReport.GrowthForecast.people.1.name'), description: t('IMDX_FullReport.GrowthForecast.people.1.description') },
                    ],
  },

            Inspired: {
              titleColor: 'rgba(0, 70, 153, 1)',
                title: t('IMDX_FullReport.Inspired.title'),
                  projects: [
                    { title: t('IMDX_FullReport.Inspired.projects.0.title'), forLabel: t('IMDX_FullReport.Inspired.projects.0.forLabel'), forTarget: t('IMDX_FullReport.Inspired.projects.0.forTarget'), description: t('IMDX_FullReport.Inspired.projects.0.description'), tags: t('IMDX_FullReport.Inspired.projects.0.tags'), inspiredBy: t('IMDX_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/RunIMDX.png' },
                    { title: t('IMDX_FullReport.Inspired.projects.1.title'), forLabel: t('IMDX_FullReport.Inspired.projects.1.forLabel'), forTarget: t('IMDX_FullReport.Inspired.projects.1.forTarget'), description: t('IMDX_FullReport.Inspired.projects.1.description'), tags: t('IMDX_FullReport.Inspired.projects.1.tags'), inspiredBy: t('IMDX_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/CreateIMDX.png' },
                    { title: t('IMDX_FullReport.Inspired.projects.2.title'), forLabel: t('IMDX_FullReport.Inspired.projects.2.forLabel'), forTarget: t('IMDX_FullReport.Inspired.projects.2.forTarget'), description: t('IMDX_FullReport.Inspired.projects.2.description'), tags: t('IMDX_FullReport.Inspired.projects.2.tags'), inspiredBy: t('IMDX_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/InterviewIMDX.svg' },
                  ],
                    action: { message: t('IMDX_FullReport.Inspired.action.message'), button1: t('IMDX_FullReport.Inspired.action.button1'), button2: t('IMDX_FullReport.Inspired.action.button2') },
            },
    },

    EMCT: {
            titleColor: '#3DB0CB',
              image: {
                female: '/images/SimpleReport-EMCT-Female.png',
                male: '/images/SimpleReport-EMCT-Male.png',
  },
      bg: "/images/fullReport3.jpg",
            colorPaletteImage: '',
              title: t('EMCT_FullReport.title'),
                badges: t('EMCT_FullReport.badges', { returnObjects: true }) as string[],
                  famousPerson: {
              female: { name: t('EMCT_FullReport.famousPerson.female.name'), image: '/images/DaenerysTargaryen.svg' },
              male: { name: t('EMCT_FullReport.famousPerson.male.name'), image: '/images/ProfessorX.svg' },
            },
            quote: t('EMCT_FullReport.quote'),
              quoteAuthor: t('EMCT_FullReport.quoteAuthor'),
                strengths: t('EMCT_FullReport.strengths', { returnObjects: true }) as string[],
                  detail: t('EMCT_FullReport.detail'),

                    motivation: {
              label: t('EMCT_FullReport.motivation.label'),
                value: t('EMCT_FullReport.motivation.value'),
                  description: t('EMCT_FullReport.motivation.description'),
  },
            cognition: {
              label: t('EMCT_FullReport.cognition.label'),
                value: t('EMCT_FullReport.cognition.value'),
                  description: t('EMCT_FullReport.cognition.description'),
  },
            environment: {
              label: t('EMCT_FullReport.environment.label'),
                value: t('EMCT_FullReport.environment.value'),
                  description: t('EMCT_FullReport.environment.description'),
  },
            approach: {
              label: t('EMCT_FullReport.approach.label'),
                value: t('EMCT_FullReport.approach.value'),
                  description: t('EMCT_FullReport.approach.description'),
  },

            DeepInsight: {
              left: {
                icon: <Discovery fill={'#3DB0CB'} />,
                  title: t('EMCT_FullReport.DeepInsight.left.title'),
                    titleColor: '#3DB0CB',
                      highlight: t('EMCT_FullReport.DeepInsight.left.highlight'),
                        description: t('EMCT_FullReport.DeepInsight.left.description'),
    },
              right: {
                icon: <Compass fill={'#3DB0CB'} />,
                  subtitle: t('EMCT_FullReport.DeepInsight.right.subtitle'),
                    titleColor: '#3DB0CB',
                      intro: t('EMCT_FullReport.DeepInsight.right.intro'),
                        strategies: [
                          { color: 'rgba(61, 176, 203, 0.5)', title: t('EMCT_FullReport.DeepInsight.right.strategies.0.title'), text: t('EMCT_FullReport.DeepInsight.right.strategies.0.text') },
                          { color: 'rgba(61, 176, 203, 0.8)', title: t('EMCT_FullReport.DeepInsight.right.strategies.1.title'), text: t('EMCT_FullReport.DeepInsight.right.strategies.1.text') },
                          { color: 'rgba(61, 176, 203, 1)', title: t('EMCT_FullReport.DeepInsight.right.strategies.2.title'), text: t('EMCT_FullReport.DeepInsight.right.strategies.2.text') },
                        ],
                          tools: [
                            { name: t('EMCT_FullReport.DeepInsight.right.tools.0.name'), description: t('EMCT_FullReport.DeepInsight.right.tools.0.description') },
                            { name: t('EMCT_FullReport.DeepInsight.right.tools.1.name'), description: t('EMCT_FullReport.DeepInsight.right.tools.1.description') },
                            { name: t('EMCT_FullReport.DeepInsight.right.tools.2.name'), description: t('EMCT_FullReport.DeepInsight.right.tools.2.description') },
                            { name: t('EMCT_FullReport.DeepInsight.right.tools.3.name'), description: t('EMCT_FullReport.DeepInsight.right.tools.3.description') },
                          ],
    },
            },

            // ✅ Learning Environment Block
            LearningEnvironment: {
              icon: <Workplace />,
                title: t('EMCT_FullReport.LearningEnvironment.title'),
                  titleColor: '#3DB0CB',
                    subTitleColor: 'rgba(61, 176, 203, 0.60)',
                      subtitle: t('EMCT_FullReport.LearningEnvironment.subtitle'),
                        visualClarity: {
                description: t('EMCT_FullReport.LearningEnvironment.visualClarity.description'),
    },
              zones: [
                { icon: <Candle />, title: t('EMCT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.zones.0.verb'), description: t('EMCT_FullReport.LearningEnvironment.zones.0.description') },
                { icon: <Lamp />, title: t('EMCT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.zones.1.verb'), description: t('EMCT_FullReport.LearningEnvironment.zones.1.description') },
                { icon: <Magicball />, title: t('EMCT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.zones.2.verb'), description: t('EMCT_FullReport.LearningEnvironment.zones.2.description') },
                { icon: <Magicwand />, title: t('EMCT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.zones.3.verb'), description: t('EMCT_FullReport.LearningEnvironment.zones.3.description') },
              ],
                tools: [
                  { title: t('EMCT_FullReport.LearningEnvironment.tools.0.title'), description: t('EMCT_FullReport.LearningEnvironment.tools.0.description'), result: t('EMCT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
                  { title: t('EMCT_FullReport.LearningEnvironment.tools.1.title'), description: t('EMCT_FullReport.LearningEnvironment.tools.1.description'), result: t('EMCT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
                  { title: t('EMCT_FullReport.LearningEnvironment.tools.2.title'), description: t('EMCT_FullReport.LearningEnvironment.tools.2.description'), result: t('EMCT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
                  { title: t('EMCT_FullReport.LearningEnvironment.tools.3.title'), description: t('EMCT_FullReport.LearningEnvironment.tools.3.description'), result: t('EMCT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)' },
                ],
                  sensoryFlow: {
                left: {
                  title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
                    titleColor: '#3DB0CB',
                      subTitleColor: 'rgba(61, 176, 203, 0.60)',
                        subtitle: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
                          zones: [
                            { icon: <EyeCare />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
                            { icon: <Ear />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
                            { icon: <Nose />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
                            { icon: <Reach />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: '', description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
                          ],
      },
                right: {
                  title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
                    titleColor: '#3DB0CB',
                      subTitleColor: 'rgba(61, 176, 203, 0.60)',
                        subtitle: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
                          anchors: [
                            { icon: <Anchor />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
                            { icon: <Bell />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
                            { icon: <Push />, title: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#3DB0CB', subTitleColor: 'rgba(61, 176, 203, 0.60)', verb: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('EMCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
                          ],
      },
              },
            },

            MentorMatch: {
              titleColor: '#3DB0CB',
                title: t('EMCT_FullReport.MentorMatch.title'),
                  description: t('EMCT_FullReport.MentorMatch.description'),
                    benefits: t('EMCT_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
                      mentorTypes: [
                        { image: '/images/PGSEMCT.png', name: t('EMCT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('EMCT_FullReport.MentorMatch.mentorTypes.0.description') },
                        { image: '/images/PPEESDT.png', name: t('EMCT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('EMCT_FullReport.MentorMatch.mentorTypes.1.description') },
                      ],
  },

            ProjectSuggestion: {
              titleColor: '#3DB0CB',
                suggestionTitle: t('EMCT_FullReport.ProjectSuggestion.suggestionTitle'),
                  suggestionSubtitle: t('EMCT_FullReport.ProjectSuggestion.suggestionSubtitle'),
                    suggestionDescription: t('EMCT_FullReport.ProjectSuggestion.suggestionDescription'),
                      suggestionList: t('EMCT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
                        suggestionFooter: t('EMCT_FullReport.ProjectSuggestion.suggestionFooter'),
                          growthEdgesTitle: t('EMCT_FullReport.ProjectSuggestion.growthEdgesTitle'),
                            growthEdgesSubtitle: t('EMCT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
                              growthPoints: t('EMCT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
  },

            LearningWeatherReport: {
              title: t('EMCT_FullReport.LearningWeatherReport.title'),
                titleColor: '#3DB0CB',
                  subTitleColor: 'rgba(61, 176, 203, 0.60)',
                    cards: [
                      { icon: <Atmosphere />, title: t('EMCT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('EMCT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('EMCT_FullReport.LearningWeatherReport.cards.0.description') },
                      { icon: <Earth />, title: t('EMCT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('EMCT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('EMCT_FullReport.LearningWeatherReport.cards.1.description') },
                      { icon: <Storm />, title: t('EMCT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('EMCT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('EMCT_FullReport.LearningWeatherReport.cards.2.description') },
                      { icon: <Sunlight />, title: t('EMCT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('EMCT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('EMCT_FullReport.LearningWeatherReport.cards.3.description') },
                      { icon: <Pinwheel />, title: t('EMCT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('EMCT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('EMCT_FullReport.LearningWeatherReport.cards.4.description') },
                    ],
  },

            GrowthForecast: {
              titleColor: '#3DB0CB',
                forecastTitle: t('EMCT_FullReport.GrowthForecast.forecastTitle'),
                  forecastText: t('EMCT_FullReport.GrowthForecast.forecastText'),
                    people: [
                      { image: '/images/DaenerysTargaryen.svg', name: t('EMCT_FullReport.GrowthForecast.people.0.name'), description: t('EMCT_FullReport.GrowthForecast.people.0.description') },
                      { image: '/images/ProfessorX.svg', name: t('EMCT_FullReport.GrowthForecast.people.1.name'), description: t('EMCT_FullReport.GrowthForecast.people.1.description') },
                    ],
  },

            Inspired: {
              titleColor: 'rgba(0, 70, 153, 1)',
                title: t('EMCT_FullReport.Inspired.title'),
                  projects: [
                    { title: t('EMCT_FullReport.Inspired.projects.0.title'), forLabel: t('EMCT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('EMCT_FullReport.Inspired.projects.0.forTarget'), description: t('EMCT_FullReport.Inspired.projects.0.description'), tags: t('EMCT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('EMCT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/RunEMCT.svg' },
                    { title: t('EMCT_FullReport.Inspired.projects.1.title'), forLabel: t('EMCT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('EMCT_FullReport.Inspired.projects.1.forTarget'), description: t('EMCT_FullReport.Inspired.projects.1.description'), tags: t('EMCT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('EMCT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/OrganizeEMCT.svg' },
                    { title: t('EMCT_FullReport.Inspired.projects.2.title'), forLabel: t('EMCT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('EMCT_FullReport.Inspired.projects.2.forTarget'), description: t('EMCT_FullReport.Inspired.projects.2.description'), tags: t('EMCT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('EMCT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/BuildEMCT.svg' },
                  ],
                    action: { message: t('EMCT_FullReport.Inspired.action.message'), button1: t('EMCT_FullReport.Inspired.action.button1'), button2: t('EMCT_FullReport.Inspired.action.button2') },
            },
    },
    ESCT: {
      titleColor: '#FFA72D',
      image: {
        female: '/images/SimpleReport-ESCT-Female.png',
        male: '/images/SimpleReport-ESCT-Male.png',
      },
      bg: "/images/fullReport4.jpg",
      colorPaletteImage: '',
      title: t('ESCT_FullReport.title'),
      badges: t('ESCT_FullReport.badges', { returnObjects: true }) as string[],
      famousPerson: {
        female: {
          name: t('ESCT_FullReport.famousPerson.female.name'),
          image: '/images/Mulan.svg',
        },
        male: {
          name: t('ESCT_FullReport.famousPerson.male.name'),
          image: '/images/JohnWick.svg',
        },
      },
      quote: t('ESCT_FullReport.quote'),
      quoteAuthor: t('ESCT_FullReport.quoteAuthor'),
      strengths: t('ESCT_FullReport.strengths', { returnObjects: true }) as string[],
      detail: t('ESCT_FullReport.detail'),

      motivation: {
        label: t('ESCT_FullReport.motivation.label'),
        value: t('ESCT_FullReport.motivation.value'),
        description: t('ESCT_FullReport.motivation.description'),
      },
      cognition: {
        label: t('ESCT_FullReport.cognition.label'),
        value: t('ESCT_FullReport.cognition.value'),
        description: t('ESCT_FullReport.cognition.description'),
      },
      environment: {
        label: t('ESCT_FullReport.environment.label'),
        value: t('ESCT_FullReport.environment.value'),
        description: t('ESCT_FullReport.environment.description'),
      },
      approach: {
        label: t('ESCT_FullReport.approach.label'),
        value: t('ESCT_FullReport.approach.value'),
        description: t('ESCT_FullReport.approach.description'),
      },

      DeepInsight: {
        left: {
          icon: <Discovery fill={'#FFA72D'} />,
          title: t('ESCT_FullReport.DeepInsight.left.title'),
          titleColor: '#FFA72D',
          highlight: t('ESCT_FullReport.DeepInsight.left.highlight'),
          description: t('ESCT_FullReport.DeepInsight.left.description'),
        },
        right: {
          icon: <Compass fill={'#FFA72D'} />,
          subtitle: t('ESCT_FullReport.DeepInsight.right.subtitle'),
          titleColor: '#FFA72D',
          intro: t('ESCT_FullReport.DeepInsight.right.intro'),
          strategies: [
            { color: 'rgba(255, 167, 45, 0.5)', title: t('ESCT_FullReport.DeepInsight.right.strategies.0.title'), text: t('ESCT_FullReport.DeepInsight.right.strategies.0.text') },
            { color: 'rgba(255, 167, 45, 0.8)', title: t('ESCT_FullReport.DeepInsight.right.strategies.1.title'), text: t('ESCT_FullReport.DeepInsight.right.strategies.1.text') },
            { color: 'rgba(255, 167, 45, 1)', title: t('ESCT_FullReport.DeepInsight.right.strategies.2.title'), text: t('ESCT_FullReport.DeepInsight.right.strategies.2.text') },
          ],
          tools: [
            { name: t('ESCT_FullReport.DeepInsight.right.tools.0.name'), description: t('ESCT_FullReport.DeepInsight.right.tools.0.description') },
            { name: t('ESCT_FullReport.DeepInsight.right.tools.1.name'), description: t('ESCT_FullReport.DeepInsight.right.tools.1.description') },
            { name: t('ESCT_FullReport.DeepInsight.right.tools.2.name'), description: t('ESCT_FullReport.DeepInsight.right.tools.2.description') },
            { name: t('ESCT_FullReport.DeepInsight.right.tools.3.name'), description: t('ESCT_FullReport.DeepInsight.right.tools.3.description') },
          ],
        },
      },

      // ✅ Learning Environment Block
      LearningEnvironment: {
        icon: <Workplace />,
        title: t('ESCT_FullReport.LearningEnvironment.title'),
        titleColor: '#FFA72D',
        subTitleColor: 'rgba(255, 167, 45, 0.60)',
        subtitle: t('ESCT_FullReport.LearningEnvironment.subtitle'),
        visualClarity: {
          description: t('ESCT_FullReport.LearningEnvironment.visualClarity.description'),
        },
        zones: [
          { icon: <Candle />, title: t('ESCT_FullReport.LearningEnvironment.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.zones.0.verb'), description: t('ESCT_FullReport.LearningEnvironment.zones.0.description') },
          { icon: <Lamp />, title: t('ESCT_FullReport.LearningEnvironment.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.zones.1.verb'), description: t('ESCT_FullReport.LearningEnvironment.zones.1.description') },
          { icon: <Magicball />, title: t('ESCT_FullReport.LearningEnvironment.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.zones.2.verb'), description: t('ESCT_FullReport.LearningEnvironment.zones.2.description') },
          { icon: <Magicwand />, title: t('ESCT_FullReport.LearningEnvironment.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.zones.3.verb'), description: t('ESCT_FullReport.LearningEnvironment.zones.3.description') },
        ],
        tools: [
          { title: t('ESCT_FullReport.LearningEnvironment.tools.0.title'), description: t('ESCT_FullReport.LearningEnvironment.tools.0.description'), result: t('ESCT_FullReport.LearningEnvironment.tools.0.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
          { title: t('ESCT_FullReport.LearningEnvironment.tools.1.title'), description: t('ESCT_FullReport.LearningEnvironment.tools.1.description'), result: t('ESCT_FullReport.LearningEnvironment.tools.1.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
          { title: t('ESCT_FullReport.LearningEnvironment.tools.2.title'), description: t('ESCT_FullReport.LearningEnvironment.tools.2.description'), result: t('ESCT_FullReport.LearningEnvironment.tools.2.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
          { title: t('ESCT_FullReport.LearningEnvironment.tools.3.title'), description: t('ESCT_FullReport.LearningEnvironment.tools.3.description'), result: t('ESCT_FullReport.LearningEnvironment.tools.3.result'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)' },
        ],
        sensoryFlow: {
          left: {
            title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.title'),
            titleColor: '#FFA72D',
            subTitleColor: 'rgba(255, 167, 45, 0.60)',
            subtitle: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.subtitle'),
            zones: [
              { icon: <EyeCare />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.0.description') },
              { icon: <Ear />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.1.description') },
              { icon: <Nose />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.2.description') },
              { icon: <Reach />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: '', description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.left.zones.3.description') },
            ],
          },
          right: {
            title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.title'),
            titleColor: '#FFA72D',
            subTitleColor: 'rgba(255, 167, 45, 0.60)',
            subtitle: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.subtitle'),
            anchors: [
              { icon: <Anchor />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.verb'), descriptionTitle: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.descriptionTitle'), description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.0.description') },
              { icon: <Bell />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.verb'), description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.1.description') },
              { icon: <Push />, title: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.title'), titleColor: '#FFA72D', subTitleColor: 'rgba(255, 167, 45, 0.60)', verb: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.verb'), description: t('ESCT_FullReport.LearningEnvironment.sensoryFlow.right.anchors.2.description') },
            ],
          },
        },
      },

      MentorMatch: {
        titleColor: '#FFA72D',
        title: t('ESCT_FullReport.MentorMatch.title'),
        description: t('ESCT_FullReport.MentorMatch.description'),
        benefits: t('ESCT_FullReport.MentorMatch.benefits', { returnObjects: true }) as { color: string; text: string }[],
        mentorTypes: [
          { image: '/images/DGEIMCX.png', name: t('ESCT_FullReport.MentorMatch.mentorTypes.0.name'), description: t('ESCT_FullReport.MentorMatch.mentorTypes.0.description') },
          { image: '/images/Mentortype2EMDT.png', name: t('ESCT_FullReport.MentorMatch.mentorTypes.1.name'), description: t('ESCT_FullReport.MentorMatch.mentorTypes.1.description') },
        ],
      },

      ProjectSuggestion: {
        titleColor: '#FFA72D',
        suggestionTitle: t('ESCT_FullReport.ProjectSuggestion.suggestionTitle'),
        suggestionSubtitle: t('ESCT_FullReport.ProjectSuggestion.suggestionSubtitle'),
        suggestionDescription: t('ESCT_FullReport.ProjectSuggestion.suggestionDescription'),
        suggestionList: t('ESCT_FullReport.ProjectSuggestion.suggestionList', { returnObjects: true }) as string[],
        suggestionFooter: t('ESCT_FullReport.ProjectSuggestion.suggestionFooter'),
        growthEdgesTitle: t('ESCT_FullReport.ProjectSuggestion.growthEdgesTitle'),
        growthEdgesSubtitle: t('ESCT_FullReport.ProjectSuggestion.growthEdgesSubtitle'),
        growthPoints: t('ESCT_FullReport.ProjectSuggestion.growthPoints', { returnObjects: true }) as { label: string; description: string }[],
      },

      LearningWeatherReport: {
        title: t('ESCT_FullReport.LearningWeatherReport.title'),
        titleColor: '#FFA72D',
        subTitleColor: 'rgba(255, 167, 45, 0.60)',
        cards: [
          { icon: <Atmosphere />, title: t('ESCT_FullReport.LearningWeatherReport.cards.0.title'), subtitle: t('ESCT_FullReport.LearningWeatherReport.cards.0.subtitle'), description: t('ESCT_FullReport.LearningWeatherReport.cards.0.description') },
          { icon: <Earth />, title: t('ESCT_FullReport.LearningWeatherReport.cards.1.title'), subtitle: t('ESCT_FullReport.LearningWeatherReport.cards.1.subtitle'), description: t('ESCT_FullReport.LearningWeatherReport.cards.1.description') },
          { icon: <Storm />, title: t('ESCT_FullReport.LearningWeatherReport.cards.2.title'), subtitle: t('ESCT_FullReport.LearningWeatherReport.cards.2.subtitle'), description: t('ESCT_FullReport.LearningWeatherReport.cards.2.description') },
          { icon: <Sunlight />, title: t('ESCT_FullReport.LearningWeatherReport.cards.3.title'), subtitle: t('ESCT_FullReport.LearningWeatherReport.cards.3.subtitle'), description: t('ESCT_FullReport.LearningWeatherReport.cards.3.description') },
          { icon: <Pinwheel />, title: t('ESCT_FullReport.LearningWeatherReport.cards.4.title'), subtitle: t('ESCT_FullReport.LearningWeatherReport.cards.4.subtitle'), description: t('ESCT_FullReport.LearningWeatherReport.cards.4.description') },
        ],
      },

      GrowthForecast: {
        titleColor: '#FFA72D',
        forecastTitle: t('ESCT_FullReport.GrowthForecast.forecastTitle'),
        forecastText: t('ESCT_FullReport.GrowthForecast.forecastText'),
        people: [
          { image: '/images/Mulan.svg', name: t('ESCT_FullReport.GrowthForecast.people.0.name'), description: t('ESCT_FullReport.GrowthForecast.people.0.description') },
          { image: '/images/JohnWick.svg', name: t('ESCT_FullReport.GrowthForecast.people.1.name'), description: t('ESCT_FullReport.GrowthForecast.people.1.description') },
        ],
      },

      Inspired: {
        titleColor: 'rgba(0, 70, 153, 1)',
        title: t('ESCT_FullReport.Inspired.title'),
        projects: [
          { title: t('ESCT_FullReport.Inspired.projects.0.title'), forLabel: t('ESCT_FullReport.Inspired.projects.0.forLabel'), forTarget: t('ESCT_FullReport.Inspired.projects.0.forTarget'), description: t('ESCT_FullReport.Inspired.projects.0.description'), tags: t('ESCT_FullReport.Inspired.projects.0.tags'), inspiredBy: t('ESCT_FullReport.Inspired.projects.0.inspiredBy'), backgroundImage: '/images/DeclutterESCT.svg' },
          { title: t('ESCT_FullReport.Inspired.projects.1.title'), forLabel: t('ESCT_FullReport.Inspired.projects.1.forLabel'), forTarget: t('ESCT_FullReport.Inspired.projects.1.forTarget'), description: t('ESCT_FullReport.Inspired.projects.1.description'), tags: t('ESCT_FullReport.Inspired.projects.1.tags'), inspiredBy: t('ESCT_FullReport.Inspired.projects.1.inspiredBy'), backgroundImage: '/images/MasterESCT.svg' },
          { title: t('ESCT_FullReport.Inspired.projects.2.title'), forLabel: t('ESCT_FullReport.Inspired.projects.2.forLabel'), forTarget: t('ESCT_FullReport.Inspired.projects.2.forTarget'), description: t('ESCT_FullReport.Inspired.projects.2.description'), tags: t('ESCT_FullReport.Inspired.projects.2.tags'), inspiredBy: t('ESCT_FullReport.Inspired.projects.2.inspiredBy'), backgroundImage: '/images/DesignESCT.png' },
        ],
        action: { message: t('ESCT_FullReport.Inspired.action.message'), button1: t('ESCT_FullReport.Inspired.action.button1'), button2: t('ESCT_FullReport.Inspired.action.button2') },
      },
    },




};
  };
