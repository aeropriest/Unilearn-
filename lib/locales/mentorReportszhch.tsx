export const mentorReports: Record<string, string> = {
  Q1: "我成为导师是因为我被个人使命或目标所驱动。",
  Q2: "我的辅导风格会根据每位学习者不断变化的需求进行调整。",
  Q3: "帮助他人与更大的愿景保持一致，比解决短期问题更有意义。",
  Q4: "我会提出问题，引导学习者自己找到答案。",
  Q5: "我喜欢找出问题的根源，并引导学习者找到具体的解决方案。",
  Q6: "我的课程更注重激发洞察力和好奇心，而不是提供固定的答案。",
  Q7: "我在辅导时会使用循序渐进的计划、模板或清晰的里程碑。",
  Q8: "我更喜欢与学习者共同创造旅程，并实时适应。",
  Q9: "清晰和结构能够让我的学习者感到踏实，并不断进步。",
};

// 发现你的导师类型
export const mentorDetails: Record<string, string> = {
  title: "发现你的导师类型",
  button: "开始",
  back_Button: "返回",
  strongly_Disagree: "强烈不同意",
  strongly_Agree: "强烈同意",
  submit_Button: "提交",
  mentor_Essence: "导师本质",
  core_Strengths: "核心优势",
  growth_Edges: "成长边缘",
  uni_Mentor_Type: "Uni 导师类型",
  header: "© 2025 Uni 教育科技有限公司",
};


export const PGS = {
  subtitle: "PGS | 峰顶",
  traits: ["战略性", "有目的", "脚踏实地"],
  description:
    "一位有远见和结构化的导师，帮助学习者迈向清晰、目标和长期方向。",

  elementalSelf: {
    title: "元素自我",
    elements: [
      {
        type: "根源能量",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "目标驱动",
        description:
          "峰顶型导师深深扎根于自己的价值观。他们以坚定的内心指南针行动，确保每一个决定和行为都与有意义的目标保持一致。",
      },
      {
        type: "风之方向",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "引导式探索",
        description:
          "他们通过引导而非控制来带领。借助引导式探索，他们帮助学习者以清晰和自我觉察的方式定位长期目标。",
      },
      {
        type: "河流路径",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "结构化",
        description:
          "他们的指导沿着明确的路线流淌。通过结构化的方法，他们支持稳步进展，把宏大的愿景转化为切实的动力。",
      },
    ],
  },

  mentorCard: {
    coreStrengths: [
      { title: "清晰制造者", desc: "将宏大的想法拆解为清晰、结构化的路径" },
      { title: "目标守护者", desc: "在变化中始终保持学习者的愿景稳定" },
      { title: "战略构建者", desc: "设计深度且可持续学习的系统" },
    ],
    essenceText:
      "峰顶型导师是以愿景为驱动的引导者，为复杂带来清晰。他们为学习者照亮更高的道路，把宏大的梦想锚定在可执行的框架中。既脚踏实地又具备远见，他们擅长帮助他人将价值观与方向统一起来，从混乱稳步走向目标。",
    quote: "没有目标和方向，单靠努力和勇气是不够的。",
    author: "约翰·F·肯尼迪",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    forecastTitle: "成长预测",
    forecastText:
      "你的清晰驱动着转变。\n随着你的成长，把复杂转化为清晰的能力将成为你的标志性优势。你不仅仅是在积累知识——你在构建他人可以依赖的系统、框架和洞察。当你通过结构化思维来精炼想法时，你会成长为一位能够看见更深层规律并设计更好前进方式的战略家。\n成长不是靠急躁，而是通过有纪律的探究、逻辑的精确和恰到好处的行动。随着时间的推移，你安静的专注会成为一种强大而可持续的影响力。",
    shineDescription:
      "那些需要远见、系统思维和长期转变的学习旅程。当学习者不仅仅需要技能，还需要一份通往他们自己高山的地图时，他们会来找你。",
    projectTitle: "项目建议",
    projectDescription:
      "峰顶型导师会设计结构化、目标驱动的项目，帮助学习者将价值观与长期目标相连接。他们以清晰和战略性规划引导，提供稳定的框架以实现深度且变革性的成长。",
    growthEdges: [
      { title: "过度结构化陷阱", description: "可能过分执着于框架，牺牲灵活性和创造力。" },
      { title: "远离现实漂移", description: "可能过于理想化或抽象，脱离当下的需求。" },
      { title: "高期望偏差", description: "可能假设学习者能够在缺乏足够引导的情况下对齐复杂目标。" },
    ],
  },
};

export const PGE = {
  titleColor: "#004699",
  subtitle: "PGE | 极光",
  traits: ["鼓舞人心", "好奇", "有远见"],
  description:
    "一位光辉而探索型的导师，激发好奇和洞察，引导学习者走向惊奇、连接和内在发现。",
  backgroundImage: "/images/HeroPGE.svg",
  saperaterImage: "/images/PGEColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "目标驱动",
        description:
          "极光型导师由深刻的意义感和内在好奇心驱动。他们的动力不来自确定性，而是来自惊奇——一种通过洞察、启发和目标引导的反思为他人照亮道路的渴望。",
      },
      {
        type: "风之方向",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "引导式探索",
        description:
          "他们通过引发问题而非给出答案来引导。以轻盈却有意图的方式，他们帮助学习者自由探索，同时保持与内心指南针和个人成长轨迹一致。",
      },
      {
        type: "河流路径",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "探索型",
        description:
          "他们的指导像闪耀的水流般流动——不是僵硬的，而是有回应的。他们创造空间让成长自然展开，在那里结构化工具让位于创造性的火花，每一步都是重新发现世界的邀请。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPGE.svg",
    coreStrengths: [
      {
        title: "洞察火花者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "看见他人忽略的模式并激发新的思考",
      },
      {
        title: "好奇守护者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "鼓励大胆提问和开放探索",
      },
      {
        title: "流动引导者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "调整引导以契合每位学习者的节奏",
      },
    ],
    essenceText:
      "极光型导师是光辉的引导者，他们通过惊奇和洞察唤醒好奇。他们带领学习者超越表面，帮助他们以扩展且深刻个人化的方式连接想法、情感和意义。以诗意的清晰和温柔的智慧，他们邀请的是发现而不是指令，是启发而不是教学。",
    essenceTextColor: "rgba(49, 99, 131, 1)",
    quote: "某个地方，总有某种不可思议的东西正等待被发现。",
    quoteColor: "rgba(126, 72, 158, 1)",
    svgColor: "rgba(135, 110, 165, 0.6)",
    author: "卡尔·萨根",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "#004699",
    growthTitleColor: "#004699",
    subTitleColor: "#56606C",
    forecastTitle: "成长预测",
    forecastText:
      "你的清晰驱动着转变。\n随着你的成长，把复杂转化为清晰的能力将成为你的标志性优势。你不仅仅是在积累知识——你在构建他人可以依赖的系统、框架和洞察。当你通过结构化思维来精炼想法时，你会成长为一位能够看见更深层规律并设计更好前进方式的战略家。\n成长不是靠急躁，而是通过有纪律的探究、逻辑的精确和恰到好处的行动。随着时间的推移，你安静的专注会成为一种强大而可持续的影响力。",
    shineDescription:
      "那些以好奇心、洞察力和意义建构为中心的学习旅程。当学习者渴望的不仅仅是答案，而是一种惊奇感和回归自我问题的路径时，他们会来找你。",
    projectTitle: "项目建议",
    projectDescription:
      "极光型导师会设计开放式、洞察引导的项目，邀请学习者以创造性的方式反思、探索和连接想法。他们通过启发和隐喻来引导，帮助学习者通过个人发现来塑造意义。",
    growthEdges: [
      {
        title: "抽象漂移",
        description: "可能过度依赖隐喻或洞察，从而失去与学习者具体需求的联系。",
      },
      {
        title: "情感过度消耗",
        description: "可能过多地投入自身能量去激励他人，导致精力透支。",
      },
      {
        title: "清晰假设",
        description: "可能认为自己的信息已经很清晰，但学习者实际上需要更多落地的支持。",
      },
    ],
  },
};

export const PPS = {
  titleColor: "#004699",
  subtitle: "PPS | 峡谷",
  traits: ["结构化", "分析型", "深度思考"],
  description:
    "一位脚踏实地、善于分析的导师，通过稳定的结构和洞察力，引导学习者探索深层问题空间。",
  backgroundImage: "/images/HeroPPS.svg",
  saperaterImage: "/images/PPSColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "目标驱动",
        description:
          "峡谷型导师由安静而坚定的目标感支撑。他们怀有深刻的责任感，以洞察力和关怀引导他人穿越复杂性。",
      },
      {
        type: "风之方向",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "基于问题",
        description:
          "他们的引导以结构化探究和分析为中心。他们通过批判性思维和逻辑推进，帮助学习者面对真实挑战。",
      },
      {
        type: "河流路径",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "结构化",
        description:
          "峡谷型导师通过稳定、有条理的步骤支持成长。就像峡谷层层叠叠的岩壁，他们的方法提供了稳定性、清晰度和长期深度。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPPS.svg",
    coreStrengths: [
      {
        title: "深度绘图者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "帮助学习者看清表面之下并整理复杂性。",
      },
      {
        title: "清晰带来者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "将思维引导至清晰而有目的的方向。",
      },
      {
        title: "锚定守护者",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "在学习的每个阶段提供稳定的支持。",
      },
    ],
    essenceText:
      "峡谷型导师是稳健的引导者，他们以清晰和深度带领学习者穿越复杂性。他们提供脚踏实地的支持和结构化思维，帮助学习者以平静的专注和长期的清晰面对挑战。通过深思熟虑的节奏和深刻的问题，他们为探索和渐进掌握创造空间。",
    essenceTextColor: "rgba(49, 99, 131, 1)",
    quote: "只有当你能凝视自己的内心时，你的愿景才会变得清晰。",
    quoteColor: "rgba(163, 118, 97, 1)",
    svgColor: "rgba(225, 206, 188, 1)",
    author: "卡尔·荣格",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "#004699",
    growthTitleColor: "rgba(0, 31, 116, 1)",
    subTitleColor: "rgba(49, 99, 131, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的清晰驱动着转变。\n随着你的成长，把复杂转化为清晰的能力将成为你的标志性优势。你不仅仅是在积累知识——你在构建他人可以依赖的系统、框架和洞察。当你通过结构化思维来精炼想法时，你会成长为一位能够看见更深层规律并设计更好前进方式的战略家。\n成长不是靠急躁，而是通过有纪律的探究、逻辑的精确和恰到好处的行动。随着时间的推移，你安静的专注会成为一种强大而可持续的影响力。",
    shineDescription:
      "那些强调结构、反思和问题解决的学习体验。当学习者因复杂性而感到不知所措时，你就是他们寻找的冷静而有条理的导师，帮助他们以清晰的方式前行。",
    projectTitle: "项目建议",
    projectDescription:
      "峡谷型导师会设计脚踏实地、基于探究的项目，支持循序渐进的学习。他们帮助学习者解构重大问题，将挑战分解成部分，并通过结构化探索和批判性思维获得持久洞察。",
    growthEdges: [
      { title: "过度结构化", description: "可能创造出僵化的路径，留给学习者的灵活性或创造力空间不足。" },
      { title: "情感保留", description: "可能显得疏远或过于专注于任务，使学习者难以在情感上产生连接。" },
      { title: "深度过载", description: "可能因过早或过深进入复杂概念而让学习者感到不堪重负。" },
    ],
  },
};

export const PPE = {
  titleColor: "#004699",
  subtitle: "PPE | 冰川",
  traits: ["共鸣", "持久", "稳健"],
  description:
    "一位通过平静的存在、使命驱动的意图和强大的耐心来孕育深度转变的导师。",
  backgroundImage: "/images/HeroPPE.svg",
  saperaterImage: "/images/PPEColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "目标驱动",
        description:
          "冰川型导师扎根于深刻的信念和安静的决心。他们不是出于急迫，而是凭借长久的信念来引导有目的、持久的转变。",
      },
      {
        type: "风之方向",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "基于问题",
        description:
          "他们的指导通过反思性探究和深思熟虑的问题解决展开。他们支持学习者以耐心、脚踏实地的逻辑面对挑战。",
      },
      {
        type: "河流路径",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "结构化",
        description:
          "冰川型导师并非遵循僵化的步骤，而是为有机的成长留出空间。他们的方法鼓励缓慢而深思的探索——就像水随着时间雕刻出路径。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPPE.svg",
    coreStrengths: [
      { title: "深度采集者", titleColor: "rgba(30, 74, 121, 1)", desc: "通过平静的反思挖掘内在真相。" },
      { title: "路径稳定者", titleColor: "rgba(30, 74, 121, 1)", desc: "帮助学习者在变化中保持脚踏实地。" },
      { title: "静力推动者", titleColor: "rgba(30, 74, 121, 1)", desc: "通过安静而稳定的存在激发成长。" },
    ],
    essenceText:
      "冰川型导师是安静的转变力量。他们以耐心、稳定和情感深度引导学习者完成内在的改变。他们的存在令人踏实——不是快速指引，而是为缓慢展开留出空间，帮助学习者从内而外地重塑。通过时间与信任，他们帮助构建持久的成果。",
    essenceTextColor: "rgba(69, 95, 132, 1)",
    quote: "与他人建立联系最基本且最有力量的方式就是倾听。只是倾听。",
    quoteColor: "rgba(100, 150, 187, 1)",
    svgColor: "rgba(181, 207, 224, 1)",
    author: "雷切尔·娜奥米·雷曼",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(30, 74, 121, 1)",
    subTitleColor: "rgba(69, 95, 132, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的清晰驱动着转变。\n随着你的成长，把复杂转化为清晰的能力将成为你的标志性优势。你不仅仅是在积累知识——你在构建他人可以依赖的系统、框架和洞察。当你通过结构化思维来精炼想法时，你会成长为一位能够看见更深层规律并设计更好前进方式的战略家。\n成长不是靠急躁，而是通过有纪律的探究、逻辑的精确和恰到好处的行动。随着时间的推移，你安静的专注会成为一种强大而可持续的影响力。",
    shineDescription:
      "那些优先关注深度、反思和情感稳定的学习项目。当学习者感到迷失、分散或不确定时，你就是他们寻求的人——一个能够守护空间、放慢节奏，并耐心地帮助他们从内而外转变的导师。",
    projectTitle: "项目建议",
    projectDescription:
      "冰川型导师会设计宽松、内省的项目，这些项目随着时间展开。他们引导学习者进行身份探索、价值观反思或长期习惯养成——强调情感洞察、写日记和深度的个人探究，而不是急促的产出。",
    growthEdges: [
      { title: "过度稳固", description: "可能让学习者在反思中停留过久，从而减缓动力或清晰度。" },
      { title: "情感饱和", description: "可能过度吸收学习者的情绪——需要界限以避免精力透支。" },
      { title: "抗拒改变", description: "当学习者需要灵活性时，可能难以及时适应或转向。" },
    ],
  },
};

export const DGS = {
  titleColor: "#004699",
  subtitle: "DGS | 森林",
  traits: ["关怀", "和谐", "滋养"],
  description:
    "一位通过平静的存在、使命驱动的意图和强大的耐心来孕育深度转变的导师。",
  backgroundImage: "/images/HeroDGS.svg",
  saperaterImage: "/images/DGSColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "目标驱动",
        description:
          "森林型导师汲取于内在的稳定与扎实的价值观。他们不是为名望或紧迫而引导，而是出于对关怀、归属与有意义的个人成长的安静投入。",
      },
      {
        type: "风之方向",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "引导式探索",
        description:
          "你的指导通过轻柔的提醒与反思性问题，邀请学习者进行深思探索。你不强塞答案——你以优雅与专注，帮助他人抵达他们自己的洞见。",
      },
      {
        type: "河流路径",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "结构化",
        description:
          "森林型导师通过可靠的节奏与温和的步调塑造成长。就像林间小径缓缓显现，你的指导一层层展开——稳定、可信且极具意图性。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDGS.svg",
    coreStrengths: [
      {
        title: "可靠的在场",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "提供长期、稳定、值得信赖的指导关系。",
      },
      {
        title: "敏察的倾听者",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "能感知学习者未言明的需要与感受。",
      },
      {
        title: "滋养式引导",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "鼓励反思、自我信任与渐进成长。",
      },
    ],
    essenceText:
      "森林型导师以平和的存在感提供支持，力量源自内在的宁静与深切的共情。他们营造情感安全的环境，让学习者被看见、被支持。在耐心与直觉的引领下，他们帮助他人在生命的转折与内在成长中，重拾节奏与韧性。",
    essenceTextColor: "rgba(78, 53, 15, 1)",
    quote:
      "与他人建立联系最基本且最有力量的方式就是倾听。只是倾听。",
    quoteColor: "rgba(100, 133, 5, 1)",
    svgColor: "rgba(212, 196, 58, 1)",
    author: "奥黛丽·赫本",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(43, 66, 6, 1)",
    subTitleColor: "rgba(78, 53, 15, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的清晰驱动着转变。\n随着你的成长，把复杂转化为清晰的能力将成为你的标志性优势。你不仅仅是在积累知识——你在构建他人可以依赖的系统、框架和洞察。当你通过结构化思维来精炼想法时，你会成长为一位能够看见更深层规律并设计更好前进方式的战略家。\n成长不是靠急躁，而是通过有纪律的探究、逻辑的精确和恰到好处的行动。随着时间的推移，你安静的专注会成为一种强大而可持续的影响力。",
    shineDescription:
      "那些强调关怀、归属、反思与情感稳定的学习项目。当学习者感到分散或不确定时，他们会来找你——因为你能守护空间、放慢节奏，并从内而外地帮助他们完成转变。",
    projectTitle: "项目建议",
    projectDescription:
      "森林型导师会设计以关系为中心、富有反思性的长期项目。你可以期待稳定的跟进、写日记、价值观探索，以及温和的责任机制，以加深根基并建立持久的韧性。",
    growthEdges: [
      { title: "节奏过稳", description: "可能抗拒必要的速度或风险。" },
      { title: "过度托举", description: "有时保护过多，影响自主性发展。" },
      { title: "反馈空白", description: "可能回避直面真相，而错过突破契机。" },
    ],
  },
};

export const DGE = {
  titleColor: "#004699",
  subtitle: "DGE | 海浪",
  traits: ["流动", "响应", "激励"],
  description:
    "一位通过流动的引导、敏锐的在场与温和的适应性来催生稳步成长的导师。",
  backgroundImage: "/images/HeroDGE.svg",
  saperaterImage: "/images/DGEColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle: "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "需求响应",
        description:
          "海浪型导师扎根于敏感与在场。他们不是按照固定议程回应，而是调谐于学习者不断变化的需要——在最需要的地方、以最合适的时机提供支持。",
      },
      {
        type: "风之方向",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle: "你引导的流向——你自然带领学习和探索的方式。",
        label: "引导式探索",
        description:
          "你的指导如潮汐般流动——通过节律、反思与直觉的步调邀请学习者探索。你不强推洞见；你激起好奇，帮助学习者以温和而顺势的方式发掘自己的智慧。",
      },
      {
        type: "河流路径",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle: "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "探索型",
        description:
          "海浪型导师以运动与适应性支持成长。与你其固定路线不同，你的路径会弯折与转向——如同水流顺势而变。你通过保持调谐、流动与开放，帮助学习者在旅途中稳步成长。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDGE.svg",
    coreStrengths: [
      {
        title: "调谐之流",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "感知并映照学习者不断变化的能量。",
      },
      {
        title: "节律支持",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "以稳定的步调与在场感创造安全。",
      },
      {
        title: "转化之潮",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "以温和、流动的调整引导改变。",
      },
    ],
    essenceText:
      "海浪型导师提供源于情感直觉与当下觉察的节律性引导。他们顺应每位学习者的步调灵活调整，营造能量流动而非停滞的环境。以平静却富有动感的在场，他们温柔地帮助他人应对变化、唤起动力，并在不确定的水域中重拾个人的前行之势。",
    essenceTextColor: "rgba(71, 87, 96, 1)",
    quote: "你无法阻止海浪，但你可以学会冲浪。",
    quoteColor: "rgba(56, 80, 53, 1)",
    svgColor: "rgba(252, 195, 60, 0.6)",
    author: "乔恩·卡巴特-辛",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(84, 59, 32, 1)",
    subTitleColor: "rgba(71, 87, 96, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的适应性推动着转变。\n随着你的成长，读懂变化潮汐并以流动的引导作出回应，将成为你的决定性优势。你并非在构建僵硬的系统——你在塑造清晰、节律与动能，让学习者得以乘势而上。当你精进调谐与步调时，你会成长为一位帮助他人在不确定水域中依然稳步前行的引导者。\n成长不是靠强推，而是通过共鸣、时机与温和的校正。随着时间推移，你的在场将化为可持续影响的水流。",
    shineDescription:
      "那些顺应能量、情绪与动能起伏的学习项目。当学习者在变化中航行或感到停滞时，他们会来找你——因为你能读懂潮汐、以关照适应、并在不强迫节奏的情况下帮助他们前行。",
    projectTitle: "项目建议",
    projectDescription:
      "海浪型导师会设计流动、适应性的项目，与学习者的节奏同步演进。这些项目可能包含叙事表达、基于行动的反思，或富有起伏的创意冲刺——更重视情感觉察、步调与自我信任，而非僵化结果。",
    growthEdges: [
      { title: "流而无锚", description: "可能漂移过多，缺乏清晰的结构或目标。" },
      { title: "过度调谐", description: "可能因过度迎合学习者情绪而失去方向。" },
      { title: "回避摩擦", description: "倾向回避紧张或艰难对话，而这些恰能引发真正改变。" },
    ],
  },
};

export const DPS = {
  titleColor: "#004699",
  subtitle: "DPS | 沙漠",
  traits: ["坚韧", "平静", "有分寸"],
  description:
    "一位平静、坚韧且专注的导师，以安静而精准的方式和持久的在场感，扫清混乱。",
  backgroundImage: "/images/HeroDPS.svg",
  saperaterImage: "/images/DPSColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "需求响应",
        description:
          "沙漠型导师扎根于觉察与在场。他们不执着于僵化目标，而是回应学习者的真实需要——在清晰缺失或复杂压倒时提供聚焦支持。他们的力量在于懂得何时不行动，只在时机成熟时给予引导。",
      },
      {
        type: "风之方向",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "你引导的流向——你自然带领学习和探索的方式。",
        label: "基于问题",
        description:
          "你的指导稳健且有意图——以精准切开混乱。你通过帮助学习者简化纠缠的挑战并识别真正需要关注的点，引领他们进入聚焦的问题解决。你重视实用胜于理论，并通过清晰感建立信心。",
      },
      {
        type: "河流路径",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "结构化",
        description:
          "如同被时间塑造的沙漠小径，你的节奏耐心而有目的。你通过帮助学习者设定优先级、清除干扰、一步步前进，创造稳步进展的条件。你的结构是安静的而非僵硬——着眼长久，而非求快。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDPS.svg",
    coreStrengths: [
      {
        title: "持久在场",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "在他人分散时依然保持扎实稳重。",
      },
      {
        title: "清明心智",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "过滤噪音，锐化专注。",
      },
      {
        title: "实用智慧",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "带来凝练的、基于经验的洞见。",
      },
    ],
    essenceText:
      "沙漠型导师体现安静的力量。他们不是通过“增加”来创造清晰，而是剔除不必要之物。其平和而务实的在场，帮助他人放慢节奏、拉远视角，聚焦真正重要的事。他们以精准而非压力给出方向。",
    essenceTextColor: "rgba(100, 66, 38, 1)",
    quote: "压垮你的不是负荷，而是你承载它的方式。",
    quoteColor: "rgba(74, 95, 116, 1)",
    svgColor: "rgba(192, 175, 154, 0.6)",
    author: "莉娜·霍恩",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(76, 48, 23, 1)",
    subTitleColor: "rgba(100, 66, 38, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的平静在场推动着转变。\n随着你的成长，穿透噪音并提炼清晰的能力将成为你的决定性优势。你不只是构建系统——你在帮助他人剔除干扰、聚焦本质并维持动能。当你打磨耐心的节奏时，你会成长为一位以清晰建立信心的引导者。\n成长并非来自匆忙，而是源于自律、视角与务实智慧。随着时间推移，你安静而稳定的力量将持久地塑造可持续的进步。",
    shineDescription:
      "那些能穿透噪音、带来平静、结构与清晰的学习项目。当学习者感到不堪重负或心神涣散时，他们会来找你——因为你能简化旅程、设定扎实的优先级，并帮助他们一步一个清晰地向前。",
    projectTitle: "项目建议",
    projectDescription:
      "沙漠型导师会设计有意图、以清晰为中心的项目，带来聚焦并减少压迫感。这些项目可能包括极简挑战、深度工作日程或结构化反思日志——更看重专注、自律与可持续习惯，而非华丽或速成的结果。",
    growthEdges: [
      {
        title: "过度简化",
        description:
          "可能去除过多细微之处，导致学习体验过于僵硬或乏味。",
      },
      {
        title: "情感距离",
        description:
          "在富有表达力的学习者面前，可能显得过于克制或疏离。",
      },
      {
        title: "稳定胜于灵活",
        description:
          "可能抗拒变化或即兴，错失调整与创新的机会。",
      },
    ],
  },
};

export const DPE = {
  titleColor: "#004699",
  subtitle: "DPE | 微风",
  traits: ["轻松", "响应", "提振"],
  description:
    "一位轻盈、直觉型的导师，为每次学习体验带来从容、清晰与温柔的动能。",
  backgroundImage: "/images/HeroDPE.svg",
  saperaterImage: "/images/DPEColorPallet.svg",

  elementalSelf: {
    title: "元素自我",
    titleColor: "#004699",
    elements: [
      {
        type: "根源能量",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "支撑和驱动你指导的力量——你引导他人的核心动机。",
        label: "需求响应",
        description:
          "微风型导师具有敏锐的情绪智力与调谐力。他们不强加方向，而是温柔回应学习者表达或未言明的需要。他们的力量在于营造情感安全与向上的动能——在恰当时刻以柔和方式出现。",
      },
      {
        type: "风之方向",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "你引导的流向——你自然带领学习和探索的方式。",
        label: "基于问题",
        description:
          "你的引导看似直觉，却不失目的性。你以细腻的清晰度，帮助学习者理清内在疑虑与外部杂乱。你不急于解决——而是轻柔地重构问题，直到学习者能以平静的笃定向前。",
      },
      {
        type: "河流路径",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "你支持成长的节奏和结构——稳定或流动，有规划或随性。",
        label: "探索型",
        description:
          "如同微风穿行于旷野，你的指导节奏轻盈、灵活而探索性强。你创造让想法自由飘荡、回返与自然演化的空间——鼓励学习者以自己的步调发现，无惧失败、无须绩效压力。",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDPE.svg",
    coreStrengths: [
      {
        title: "安抚在场",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "在整个会话中营造平静与情感舒缓。",
      },
      {
        title: "细微引导",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "以温柔、及时的提示与反思带领前行。",
      },
      {
        title: "自适流动",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "灵活贴合每位学习者的当下状态。",
      },
    ],
    essenceText:
      "微风型导师体现温柔的清晰与情感的从容。他们不强推成长，而是通过平静的鼓励、轻盈的在场与直觉的时机邀请成长。他们的天赋在于帮助学习者呼吸、暂停，并在无压力中前行。当他人选择“推动”时，微风型导师会轻轻“打开窗户”。",
    essenceTextColor: "rgba(140, 143, 175, 1)",
    quote:
      "温柔胜于严厉，水胜于岩石，爱胜于强力。",
    quoteColor: "rgba(103, 140, 201, 1)",
    svgColor: "rgba(238, 199, 182, 0.8)",
    author: "赫尔曼·黑塞",
  },

  mentorSupportPanel: {
    shineText: "在 Uni Learn 上，你可以闪耀于",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(105, 128, 176, 1)",
    subTitleColor: "rgba(140, 143, 175, 1)",
    forecastTitle: "成长预测",
    forecastText:
      "你的温柔点燃着转变。\n随着你的成长，缓解紧张、营造安全并以轻柔引导带动他人的能力，将成为你独特的礼物。你不是在设计僵硬的结构——你在为流动、洞见与从容推进打开空间。当你精进直觉与时机感时，你会成长为一位让学习者能自在呼吸、重置并轻松成长的引导者。\n成长不是源于强力，而是来自留白、细腻与鼓励。随着时间推移，你的在场将成为他人所依赖的清晰与安心之风。",
    shineDescription:
      "那些营造情感舒缓与温和前进之流的学习项目。当学习者需要喘息、反思或重启时，他们会来找你——因为你能读懂言外之意、卸下压力，并轻轻引导他们走向清晰与从容的动能。",
    projectTitle: "项目建议",
    projectDescription:
      "微风型导师会设计轻盈、开放式的项目，邀请好奇与从容探索。这些项目可包括正念习惯追踪、情绪反思日志、创意漫步，或“柔性目标”看板——更注重感受而非表现、过程而非完美、洞见而非强度。",
    growthEdges: [
      {
        title: "结构不足",
        description:
          "过于轻盈可能导致漂浮感，让学习者缺乏锚定。",
      },
      {
        title: "表达不足",
        description:
          "可能回避直接表达或期待，从而模糊目标或边界。",
      },
      {
        title: "在场消隐",
        description:
          "当学习者需要更稳的引导时，可能退后过多，造成不确定感。",
      },
    ],
  },
};
