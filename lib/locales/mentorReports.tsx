export const mentorReports: Record<string, string> = {
  Q1: "I mentor because I’m guided by a personal mission or purpose.",
  Q2: "My mentoring style adjusts based on the changing needs of each learner",
  Q3: "Helping someone align with a bigger vision is more rewarding than solving a short-term problem.",
  Q4: "I ask questions that lead learners to discover answers on their own.",
  Q5: "I like to pinpoint the root of a problem and guide learners toward specific solutions.",
  Q6: "My sessions focus on sparking insight and curiosity rather than providing fixed answers.",
  Q7: "I use step-by-step plans, templates, or clear milestones when mentoring.",
  Q8: "I prefer to co-create the journey with my learners, adapting in real time.",
  Q9: "Clarity and structure help my learners feel grounded and make progress.",
};

// Discover your mentor type


export const mentorDetails: Record<string, string> = {
  title: "Discover your mentor type",
  button: "Get Started",
  back_Button: "Go Back",
  strongly_Disagree: "Strongly Disagree",
  strongly_Agree: "Strongly Agree",
  submit_Button: "Submit",
  mentor_Essence: "Mentor Essence",
  core_Strengths: "Core Strengths",
  growth_Edges: "Growth Edges",
  uni_Mentor_Type: "Uni Mentor Type",
  header: "© 2025 Uni Education Technology Co., Ltd."
}


export const PGS = {
      subtitle: "PGS | Summit",
      traits: ["Strategic", "Purposeful", "Grounded"],
      description:
        "A visionary and structured mentor who helps learners ascend toward clarity, purpose, and long-term direction.",

      elementalSelf: {
        title: "Elemental Self",
        elements: [
          {
            type: "Root Energy",
            subtitle:
              "What grounds and fuels your mentorship — your core motivation to guide others.",
            label: "Purpose-Driven",
            description:
              "Summit mentors are deeply grounded in their values. They operate from a strong inner compass, ensuring that every decision and action aligns with a meaningful sense of purpose.",
          },
          {
            type: "Wind Direction",
            subtitle:
              "The way your guidance flows — how you naturally lead learning and exploration.",
            label: "Guided Discovery",
            description:
              "They lead through direction, not control. Using guided discovery, they help learners orient themselves toward long-term goals with clarity and self-awareness.",
          },
          {
            type: "River Path",
            subtitle:
              "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
            label: "Structured",
            description:
              "Their mentorship flows along a well-mapped course. Through structured methods, they support steady progress, turning big visions into tangible momentum.",
          },
        ],
      },

      mentorCard: {
        coreStrengths: [
          { title: "Clarity-Maker", desc: "Breaks down lofty ideas into clear, structured paths" },
          { title: "Purpose-Holder", desc: "Keeps the learner’s vision anchored through change" },
          { title: "Strategic-Builder", desc: "Designs systems for deep, sustainable learning" },
        ],
        essenceText:
          "Summit mentors are vision-driven guides who bring clarity to complexity. They illuminate the higher path for learners, anchoring big dreams into actionable frameworks. Grounded yet far-seeing, they thrive when helping others align values with direction, steadily moving from confusion to purpose.",
        quote: "Efforts and courage are not enough without purpose and direction.",
        author: "John F. Kennedy",
      },

      mentorSupportPanel: {
        shineText: "On Uni Learn, you can shine in",
        forecastTitle: "Growth Forecast",
        forecastText:
          "Your clarity drives transformation.\nAs you grow, your ability to turn complexity into clarity becomes your signature strength. You’re not just collecting knowledge—you’re building systems, frameworks, and insights that others can rely on. When you commit to refining ideas through structured thinking, you evolve into a strategist who sees the deeper patterns and designs better ways forward.\nGrowth happens not through rush, but through disciplined inquiry, logical precision, and well-placed action. Over time, your quiet focus becomes a force for powerful, sustainable impact.",
        shineDescription:
          "learning journeys that require foresight, systems thinking, and long-term transformation. You’re the mentor learners turn to when they want more than just skills—they want a map to their own mountain.",
        projectTitle: "Project Suggestion",
        projectDescription:
          "Summit mentors design structured, purpose-driven projects that help learners connect their values to long-term goals. They guide with clarity and strategic planning, offering stable frameworks for deep, transformational growth.",
        growthEdges: [
          { title: "Overstructure Trap", description: "May overly fixate on frameworks, risking flexibility and creativity." },
          { title: "Distance Drift", description: "Can become too visionary or abstract, disconnecting from immediate needs." },
          { title: "High Expectations Bias", description: "Might assume learners can align with complex goals without enough guidance." },
        ],
      },
};

export const PGE = {
  titleColor: "#004699",
  subtitle: "PGE | Aurora",
  traits: ["Inspiring", "Curious", "Visionary"],
  description:
    "A radiant and exploratory mentor who sparks curiosity and insight, guiding learners toward wonder, connection, and inner discovery.",
  backgroundImage: "/images/HeroPGE.svg",
  saperaterImage: "/images/PGEColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Purpose-Driven",
        description:
          "Aurora mentors are fueled by a deep sense of meaning and inner curiosity. Their drive comes not from certainty, but from wonder — a desire to illuminate paths for others through insight, inspiration, and purpose-led reflection.",
      },
      {
        type: "Wind Direction",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Guided Discovery",
        description:
          "They guide by evoking questions, not giving answers. With a light yet intentional touch, they help learners explore freely while staying aligned to their inner compass and personal growth arc.",
      },
      {
        type: "River Path",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Exploratory",
        description:
          "Their mentorship flows like a shimmering current — not rigid, but responsive. They create space for organic unfolding, where structured tools give way to creative sparks, and every step is an invitation to see the world anew.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPGE.svg",
    coreStrengths: [
      {
        title: "Insight-Sparker",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Sees patterns others miss and sparks new thinking",
      },
      {
        title: "Wonder-Keeper",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Encourages bold questions and open exploration",
      },
      {
        title: "Flow-Guide",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Adapts guidance to match each learner’s rhythm",
      },
    ],
    essenceText:
      "Aurora mentors are radiant guides who awaken curiosity through wonder and insight. They lead learners beyond the surface, helping them connect ideas, emotions, and meaning in a way that feels expansive and deeply personal. With poetic clarity and gentle wisdom, they invite discovery over direction and illumination over instruction.",
    essenceTextColor: "rgba(49, 99, 131, 1)",
    quote: "Somewhere, something incredible is waiting to be known.",
    quoteColor: "rgba(126, 72, 158, 1)",
    svgColor: "rgba(135, 110, 165, 0.6)",
    author: "Carl Sagan"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "#004699",
    growthTitleColor: "#004699",
    subTitleColor: "#56606C",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your clarity drives transformation.\nAs you grow, your ability to turn complexity into clarity becomes your signature strength. You’re not just collecting knowledge—you’re building systems, frameworks, and insights that others can rely on. When you commit to refining ideas through structured thinking, you evolve into a strategist who sees the deeper patterns and designs better ways forward.\nGrowth happens not through rush, but through disciplined inquiry, logical precision, and well-placed action. Over time, your quiet focus becomes a force for powerful, sustainable impact.",
    shineDescription:
      "learning journeys that center on curiosity, insight, and meaning-making. You’re the mentor learners seek when they crave not just answers—but a sense of wonder and a path back to their own questions.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Aurora mentors design open-ended, insight-led projects that invite learners to reflect, explore, and connect ideas in creative ways. They guide through inspiration and metaphor, helping learners shape meaning through personal discovery.",
    growthEdges: [
      {
        title: "Drift into Abstraction",
        description:
          "May lean too heavily on metaphor or insight losing touch with learners concrete needs.",
      },
      {
        title: "Emotional Overexertion",
        description:
          "Can give too much of their own energy to inspire others, leading to burnout.",
      },
      {
        title: "Clarity Assumption",
        description:
          "Might believe their messages are clear when learners actually need more grounding or support.",
      },
    ],
  },
};


export const PPS = {
  titleColor: "#004699",
  subtitle: "PPS | Canyon",
  traits: ["Structured", "Analytical", "Deep-Thinking"],
  description:
    "A grounded and analytical mentor who guides learners through deep problem spaces with steady structure and insight.",
  backgroundImage: "/images/HeroPPS.svg",
  saperaterImage: "/images/PPSColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Purpose-Driven",
        description:
          "Canyon mentors are grounded by a quiet, unwavering sense of purpose. They feel a deep responsibility to guide others through complexity with insight and care.",
      },
      {
        type: "Wind Direction",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Problem-Based",
        description:
          "Their guidance centers on structured inquiry and analysis. They help learners confront real challenges through critical thinking and logical progression.",
      },
      {
        type: "River Path",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "#001F74",
        descriptionColor: "#316383",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Structured",
        description:
          "Canyon mentors support growth through steady, methodical steps. Like the layered walls of a canyon, their approach offers stability, clarity, and long-term depth.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPPS.svg",
    coreStrengths: [
      {
        title: "Depth-Mapper",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Helps learners see beneath the surface and organize complexity.",
      },
      {
        title: "Clarity-Bringer",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Guides thought into clear, purposeful direction.",
      },
      {
        title: "Anchor-Holder",
        titleColor: "rgba(0, 31, 116, 1)",
        desc: "Provides steady support through each learning phase.",
      },
    ],
    essenceText:
      "Canyon mentors are steady guides who lead learners through complexity with clarity and depth. They offer grounded support and structured thinking, helping learners face challenges with calm focus and long-term clarity. Through thoughtful pacing and deep questions, they create space for exploration and gradual mastery.",
    essenceTextColor: "rgba(49, 99, 131, 1)",
    quote: "Your vision will become clear only when you can look into your own heart.",
    quoteColor: "rgba(163, 118, 97, 1)",
    svgColor: "rgba(225, 206, 188, 1)",
    author: "Carl Jung"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "#004699",
    growthTitleColor: "rgba(0, 31, 116, 1)",
    subTitleColor: "rgba(49, 99, 131, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your clarity drives transformation.\nAs you grow, your ability to turn complexity into clarity becomes your signature strength. You’re not just collecting knowledge—you’re building systems, frameworks, and insights that others can rely on. When you commit to refining ideas through structured thinking, you evolve into a strategist who sees the deeper patterns and designs better ways forward.\nGrowth happens not through rush, but through disciplined inquiry, logical precision, and well-placed action. Over time, your quiet focus becomes a force for powerful, sustainable impact.",
    shineDescription:
      "learning experiences that emphasize structure, reflection, and problem-solving. You’re the mentor learners seek when they feel overwhelmed by complexity and need a calm, methodical guide to help them move forward with clarity.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Canyon mentors design grounded, inquiry-based projects that support step-by-step learning. They help learners unpack big questions, map challenges into parts, and gain lasting insight through structured exploration and critical thinking.",
    growthEdges: [
      {
        title: "Overstructuring",
        description:
          "May create rigid paths that leave little room for learner flexibility or creativity.",
      },
      {
        title: "Emotional Reserve",
        description:
          "Might appear distant or overly focused on tasks, making it harder for learners to connect emotionally.",
      },
      {
        title: "Depth Overload",
        description:
          "Could overwhelm learners by diving too deeply or too soon into complex ideas without scaffolding.",
      },
    ],
  },
};

export const PPE = {
  titleColor: "#004699",
  subtitle: "PPE | Glacier",
  traits: ["Resonant", "Enduring", "Steady"],
  description:
    "A mentor who nurtures deep transformation through calm presence, mission-led intention, and powerful patience.",
  backgroundImage: "/images/HeroPPE.svg",
  saperaterImage: "/images/PPEColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Purpose-Driven",
        description:
          "Glacier mentors are anchored in deep conviction and quiet resolve. They guide not from urgency but from a long-held belief in purposeful, lasting transformation.",
      },
      {
        type: "Wind Direction",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Problem-Based",
        description:
          "Their mentorship unfolds through reflective inquiry and thoughtful problem-solving. They support learners in confronting challenges with patient, grounded logic.",
      },
      {
        type: "River Path",
        typeColor: "#004699",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(30, 74, 121, 1)",
        descriptionColor: "rgba(69, 95, 132, 1)",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Structured",
        description:
          "Rather than follow rigid steps, Glacier mentors allow space for organic growth. Their approach encourages slow, thoughtful exploration—like water carving a path through time.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsPPE.svg",
    coreStrengths: [
      {
        title: "Depth-Harvester",
        titleColor: "rgba(30, 74, 121, 1)",
        desc: "Surfaces inner truths through calm reflection.",
      },
      {
        title: "Path-Steadier",
        titleColor: "rgba(30, 74, 121, 1)",
        desc: "Helps learners stay grounded through change.",
      },
      {
        title: "Stillness-Mover",
        titleColor: "rgba(30, 74, 121, 1)",
        desc: "Sparks growth through quiet, steady presence.",
      },
    ],
    essenceText:
      "Glacier mentors are quiet forces of transformation. They guide learners through inner change with patience, steadiness, and emotional depth. Their presence feels grounding—rather than directing quickly, they hold space for slow unfolding, helping learners reshape from the inside out. With time and trust, they help build something enduring.",
    essenceTextColor: "rgba(69, 95, 132, 1)",
    quote:
      "The most basic and powerful way to connect to another person is to listen. Just listen.",
    quoteColor: "rgba(100, 150, 187, 1)",
    svgColor: "rgba(181, 207, 224, 1)",
    author: "Rachel Naomi Remen"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(30, 74, 121, 1)",
    subTitleColor: "rgba(69, 95, 132, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your clarity drives transformation.\nAs you grow, your ability to turn complexity into clarity becomes your signature strength. You’re not just collecting knowledge—you’re building systems, frameworks, and insights that others can rely on. When you commit to refining ideas through structured thinking, you evolve into a strategist who sees the deeper patterns and designs better ways forward.\nGrowth happens not through rush, but through disciplined inquiry, logical precision, and well-placed action. Over time, your quiet focus becomes a force for powerful, sustainable impact.",
    shineDescription:
      "learning projects that prioritize depth, reflection, and emotional grounding. You’re the mentor learners turn to when they feel lost, scattered, or uncertain—someone who holds space, slows the pace, and helps them transform patiently from the inside out.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Glacier mentors design spacious, introspective projects that unfold over time. They guide learners through identity work, values exploration, or long-term habit shifts—emphasizing emotional insight, journaling, and deep personal inquiry rather than rushed outputs.",
    growthEdges: [
      {
        title: "Overgrounding",
        description:
          "May hold learners in reflection too long, slowing momentum or clarity.",
      },
      {
        title: "Emotional Saturation",
        description:
          "Can absorb learners’ emotions deeply—needs boundaries to avoid burnout.",
      },
      {
        title: "Change Resistance",
        description:
          "May struggle to adapt quickly or shift direction when learners need agility.",
      },
    ],
  },
};

export const DGS = {
  titleColor: "#004699",
  subtitle: "DGS | Forest",
  traits: ["Caring", "Harmonious", "Nurturing"],
  description:
    "A mentor who nurtures deep transformation through calm presence, mission-led intention, and powerful patience.",
  backgroundImage: "/images/HeroDGS.svg",
  saperaterImage: "/images/DGSColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Purpose-Driven",
        description:
          "Forest mentors draw from a deep inner steadiness and grounded values. They guide not for acclaim or urgency, but out of a quiet devotion to care, belonging, and meaningful personal growth.",
      },
      {
        type: "Wind Direction",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Guided Discovery",
        description:
          "Your mentorship invites learners into thoughtful exploration through gentle nudges and reflective questions. You don’t push answers — you help others arrive at their own insights with grace and presence.",
      },
      {
        type: "River Path",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(43, 66, 6, 1)",
        descriptionColor: "rgba(78, 53, 15, 1)",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Structured",
        description:
          "Forest mentors shape growth through dependable rhythms and gentle pacing. Like a woodland path that reveals itself slowly, your mentorship unfolds layer by layer — steady, reliable, and deeply intentional.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDGS.svg",
    coreStrengths: [
      {
        title: "Reliable Presence",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "Provides long-term, stable mentorship learners can trust.",
      },
      {
        title: "Attuned Listener",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "Sensitive to learners’ unspoken needs and feelings.",
      },
      {
        title: "Nurturing Guidance",
        titleColor: "rgba(43, 66, 6, 1)",
        desc: "Encourages reflection, self-trust, and gradual growth",
      },
    ],
    essenceText:
      "Forest mentors offer a calming presence, drawing strength from inner stillness and deep empathy. They create emotionally safe environments where learners feel seen and supported. Guided by patience and intuition, they help others rediscover rhythm and resilience through life’s transitions and inner growth.",
    essenceTextColor: "rgba(78, 53, 15, 1)",
    quote:
      "The most basic and powerful way to connect to another person is to listen. Just listen.",
    quoteColor: "rgba(100, 133, 5, 1)",
    svgColor: "rgba(212, 196, 58, 1)",
    author: "Audrey Hepburn"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(43, 66, 6, 1)",
    subTitleColor: "rgba(78, 53, 15, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your clarity drives transformation.\nAs you grow, your ability to turn complexity into clarity becomes your signature strength. You’re not just collecting knowledge—you’re building systems, frameworks, and insights that others can rely on. When you commit to refining ideas through structured thinking, you evolve into a strategist who sees the deeper patterns and designs better ways forward.\nGrowth happens not through rush, but through disciplined inquiry, logical precision, and well-placed action. Over time, your quiet focus becomes a force for powerful, sustainable impact.",
    shineDescription:
      "learning projects that emphasize care, belonging, reflection, and emotional grounding. Learners turn to you when they feel scattered or uncertain—because you hold space, slow the pace, and help them transform from the inside out.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Forest mentors design relationship-centered, reflective projects that unfold over time. Expect steady check-ins, journaling, values exploration, and gentle accountability that deepens roots and builds lasting resilience.",
    growthEdges: [
      { title: "Pacing Overdrive", description: "May resist necessary speed or risk." },
      { title: "Overholding", description: "Sometimes protects too much, hindering autonomy." },
      { title: "Feedback Gaps", description: "May avoid hard truths that could unlock breakthroughs." },
    ],
  },
};

export const DGE = {
  titleColor: "#004699",
  subtitle: "DGE | Wave",
  traits: ["Fluid", "Responsive", "Motivating"],
  description:
    "A mentor who nurtures steady growth through fluid guidance, attuned presence, and momentum sparked by gentle adaptability.",
  backgroundImage: "/images/HeroDGE.svg",
  saperaterImage: "/images/DGEColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Demand-Responsive",
        description:
          "Wave mentors are grounded in sensitivity and presence. They respond not from fixed agendas, but by tuning into learners’ evolving needs—offering support that flows where it’s most needed, when it’s needed most.",
      },
      {
        type: "Wind Direction",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Guided Discovery",
        description:
          "Your mentorship flows like a tide—inviting learners into discovery through rhythm, reflection, and intuitive pacing. You don’t push insight; you ripple curiosity and help learners uncover their own wisdom, gently and with flow.",
      },
      {
        type: "River Path",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(84, 59, 32, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Exploratory",
        description:
          "Wave mentors support growth with movement and adaptability. Rather than fixed routes, your path bends and shifts—like currents adjusting to the terrain. You help learners grow by staying attuned, fluid, and open to where the journey leads.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDGE.svg",
    coreStrengths: [
      {
        title: "Attuned Flow",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "Senses and mirrors learners’ shifting energy.",
      },
      {
        title: "Rhythmic Support",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "Creates safety through steady pacing and presence.",
      },
      {
        title: "Transformational Tides",
        titleColor: "rgba(84, 59, 32, 1)",
        desc: "Guides change through gentle, fluid shifts.",
      },
    ],
    essenceText:
      "Wave mentors offer rhythmic guidance rooted in emotional intuition and present-moment awareness. They adapt fluidly to each learner’s pace, creating an environment where energy flows, not stalls. With a calm yet kinetic presence, they gently help others navigate change, awaken momentum, and rediscover personal movement in uncertain waters.",
    essenceTextColor: "rgba(71, 87, 96, 1)",
    quote: "You can’t stop the waves, but you can learn to surf.",
    quoteColor: "rgba(56, 80, 53, 1)",
    svgColor: "rgba(252, 195, 60, 0.6)",
    author: "Jon Kabat-Zinn"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(84, 59, 32, 1)",
    subTitleColor: "rgba(71, 87, 96, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your adaptability fuels transformation.\nAs you grow, your ability to read the tides of change and respond with fluid guidance becomes your defining strength. You’re not building rigid systems—you’re shaping moments of clarity, rhythm, and momentum learners can ride. When you refine your attunement and pacing, you evolve into a guide who helps others flow steadily forward, even in uncertain waters.\nGrowth happens not through force, but through resonance, timing, and gentle redirection. Over time, your presence becomes a current of sustainable impact.",
    shineDescription:
      "learning projects that ride the waves of energy, emotion, and momentum. You’re the mentor learners turn to when they’re navigating change or feeling stuck—someone who reads the tide, adapts with care, and helps them move forward without forcing the pace.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Wave mentors design fluid, adaptive projects that evolve with the learner’s rhythm. These may involve storytelling, movement-based reflection, or creative sprints that ebb and flow—prioritizing emotional awareness, pacing, and self-trust over fixed outcomes.",
    growthEdges: [
      {
        title: "Flow Without Anchor",
        description:
          "May drift too much without giving clear structure or goals.",
      },
      {
        title: "Over-Attunement",
        description:
          "Can lose direction by adjusting too much to learners' emotions.",
      },
      {
        title: "Avoiding Friction",
        description:
          "Tends to sidestep tension or tough conversations that spark real change.",
      },
    ],
  },
};

export const DPS = {
  titleColor: "#004699",
  subtitle: "DPS | Desert",
  traits: ["Resilient", "Calm", "Measured"],
  description:
    "A calm, resilient, and focused mentor who clears confusion with quiet precision and enduring presence.",
  backgroundImage: "/images/HeroDPS.svg",
  saperaterImage: "/images/DPSColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Demand-Responsive",
        description:
          "Desert mentors are anchored in awareness and presence. They don’t act on rigid goals but respond to what learners truly need—offering focused support when clarity is lacking or complexity overwhelms. Their strength lies in knowing when not to act, and guiding only when the moment calls.",
      },
      {
        type: "Wind Direction",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Problem-Based",
        description:
          "Your mentorship is steady and intentional—cutting through confusion with precision. You lead learners into focused problem-solving by helping them simplify tangled challenges and identify what really needs attention. You value practicality over theory and build confidence through clarity.",
      },
      {
        type: "River Path",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(76, 48, 23, 1)",
        descriptionColor: "rgba(71, 87, 96, 1)",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Structured",
        description:
          "Like desert paths shaped by time, your rhythm is patient and purposeful. You create conditions for steady progress by helping learners set priorities, remove distractions, and move forward step by step. Your structure is quiet, not rigid—built to last, not to rush.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDPS.svg",
    coreStrengths: [
      {
        title: "Lasting Presence",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "Stays grounded when others feel scattered.",
      },
      {
        title: "Clear-Mindedness",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "Filters noise and sharpens focus.",
      },
      {
        title: "Practical Wisdom",
        titleColor: "rgba(76, 48, 23, 1)",
        desc: "Brings distilled, experience-based insight.",
      },
    ],
    essenceText:
      "Desert mentors embody quiet strength. They create clarity not by adding, but by subtracting the unnecessary. Their calm and practical presence helps others slow down, zoom out, and focus on what truly matters. They offer direction with precision, not pressure.",
    essenceTextColor: "rgba(100, 66, 38, 1)",
    quote: "It is not the load that breaks you down, it’s the way you carry it.",
    quoteColor: "rgba(74, 95, 116, 1)",
    svgColor: "rgba(192, 175, 154, 0.6)",
    author: "Lena Horne"
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(76, 48, 23, 1)",
    subTitleColor: "rgba(100, 66, 38, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your calm presence drives transformation.\nAs you grow, your ability to cut through noise and distill clarity becomes your defining strength. You’re not just building systems—you’re helping others strip away distractions, focus on essentials, and sustain momentum. When you refine your patient rhythm, you evolve into a guide who creates confidence through clarity.\nGrowth doesn’t come from rushing, but from discipline, perspective, and practical wisdom. Over time, your quiet steadiness becomes a force that endures, shaping sustainable progress.",
    shineDescription:
      "learning projects that cut through the noise and bring calm, structure, and clarity. You’re the mentor learners turn to when they feel overwhelmed or scattered—someone who simplifies the journey, sets grounded priorities, and helps them move forward one clear step at a time.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Desert mentors design intentional, clarity-centered projects that bring focus and reduce overwhelm. These might include minimalism challenges, deep-work routines, or structured reflection journals—projects that emphasize focus, discipline, and sustainable habits over flashy or fast results.",
    growthEdges: [
      {
        title: "Over-Simplifying",
        description:
          "May remove too much nuance, leading to overly rigid or dry learning experiences.",
      },
      {
        title: "Emotional Distance",
        description:
          "Can come across as too reserved or disengaged, especially with expressive learners.",
      },
      {
        title: "Stability Over Flexibility",
        description:
          "Might resist change or spontaneity, missing chances to adapt and innovate.",
      },
    ],
  },
};

export const DPE = {
  titleColor: "#004699",
  subtitle: "DPE | Breeze",
  traits: ["Effortless", "Responsive", "Uplifting"],
  description:
    "A light, intuitive mentor who brings ease, clarity, and gentle momentum to every learning experience.",
  backgroundImage: "/images/HeroDPE.svg",
  saperaterImage: "/images/DPEColorPallet.svg",

  elementalSelf: {
    title: "Elemental Self",
    titleColor: "#004699",
    elements: [
      {
        type: "Root Energy",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "What grounds and fuels your mentorship — your core motivation to guide others.",
        label: "Demand-Responsive",
        description:
          "Breeze mentors are attuned and emotionally intelligent. They don’t impose direction but respond gently to what learners express or silently need. Their power lies in creating emotional safety and uplifting momentum—showing up softly, exactly when the moment calls for it.",
      },
      {
        type: "Wind Direction",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "The way your guidance flows — how you naturally lead learning and exploration.",
        label: "Problem-Based",
        description:
          "Your guidance feels intuitive but purposeful. You help learners untangle inner doubts and external clutter through subtle clarity. You don’t rush to solve—instead, you gently reframe problems until learners feel empowered to move forward with calm assurance.",
      },
      {
        type: "River Path",
        typeColor: "rgba(0, 70, 153, 1)",
        subtitleColor: "rgba(0, 70, 153, 0.60)",
        labelColor: "rgba(105, 128, 176, 1)",
        descriptionColor: "rgba(140, 143, 175, 1)",
        subtitle:
          "The rhythm and structure of how you support growth — steady or fluid, mapped or meandering.",
        label: "Exploratory",
        description:
          "Like a breeze weaving through open fields, your mentoring rhythm is light, flexible, and exploratory. You create conditions where ideas can drift, return, and evolve naturally—encouraging learners to discover at their own pace, without fear of failure or pressure to perform.",
      },
    ],
  },

  mentorCard: {
    imageSrc: "/images/CoreStrengthsDPE.svg",
    coreStrengths: [
      {
        title: "Soothing Presence",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "Creates calm and emotional ease throughout sessions.",
      },
      {
        title: "Subtle Guidance",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "Leads with gentle, timely cues and reflections.",
      },
      {
        title: "Adaptive Flow",
        titleColor: "rgba(105, 128, 176, 1)",
        desc: "Moves flexibly to fit each learner’s moment.",
      },
    ],
    essenceText:
      "Breeze mentors embody gentle clarity and emotional ease. They don’t force growth, but invite it—through calm encouragement, light presence, and intuitive timing. Their gift is helping learners breathe, pause, and move forward without pressure. Where others push, Breeze mentors gently open windows.",
    essenceTextColor: "rgba(140, 143, 175, 1)",
    quote:
      "Gentleness is stronger than severity, water is stronger than rock, love is stronger than force.",
    quoteColor: "rgba(103, 140, 201, 1)",
    svgColor: "rgba(238, 199, 182, 0.8)",
    author: "Hermann Hesse",
  },

  mentorSupportPanel: {
    shineText: "On Uni Learn, you can shine in",
    titleColor: "rgba(0, 70, 153, 1)",
    growthTitleColor: "rgba(105, 128, 176, 1)",
    subTitleColor: "rgba(140, 143, 175, 1)",
    forecastTitle: "Growth Forecast",
    forecastText:
      "Your gentleness sparks transformation.\nAs you grow, your ability to ease tension, create safety, and move others with light guidance becomes your defining gift. You’re not designing rigid structures—you’re opening space for flow, insight, and calm forward movement. When you refine your intuition and timing, you evolve into a guide who empowers learners to breathe, reset, and grow with ease.\nGrowth doesn’t come from force, but from spaciousness, subtlety, and encouragement. Over time, your presence becomes a breeze of clarity and reassurance others rely on.",
    shineDescription:
      "learning projects that create emotional ease and gentle forward flow. You’re the mentor learners seek when they need space to breathe, reflect, or reset—someone who listens between the lines, lifts the pressure, and gently steers them toward clarity and calm momentum.",
    projectTitle: "Project Suggestion",
    projectDescription:
      "Breeze mentors design light, open-ended projects that invite curiosity and calm exploration. These may include mindful habit trackers, reflective mood journals, creativity strolls, or 'soft goals' boards—projects that focus on feeling over performance, process over perfection, and insight over intensity.",
    growthEdges: [
      {
        title: "Lack of Structure",
        description:
          "Too much lightness may lead to drifting, making learners feel unanchored.",
      },
      {
        title: "Underexpressing Needs",
        description:
          "Might avoid directness or expectations, which can blur goals or boundaries.",
      },
      {
        title: "Disappearing Presence",
        description:
          "May step back too much when learners need steadier guidance, creating uncertainty.",
      },
    ],
  },
};
