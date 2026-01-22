type TraitKey = 'P' | 'D' | 'G' | 'B' | 'S' | 'E';

type QuizAnswers = {
  [questionId: `Q${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`]: 1 | 2 | 3 | 4 | 5;
};

type MentorResult = {
  mentorTypeCode: string;
  dimensionTypes: {
    mentoringDrive: string;
    teachingStyle: string;
    methodApproach: string;
  };
  traitScores: Record<TraitKey, number>;
  rawAnswers: QuizAnswers;
  valid: boolean;
  error?: string;
};

export function evaluateMentorType(answers: QuizAnswers): MentorResult {
  const traitScores: Record<TraitKey, number> = {
    P: 0,
    D: 0,
    G: 0,
    B: 0,
    S: 0,
    E: 0,
  };

  const scoringMap: Record<keyof QuizAnswers, { target: TraitKey; opposite: TraitKey }> = {
    Q1: { target: 'P', opposite: 'D' },
    Q2: { target: 'D', opposite: 'P' },
    Q3: { target: 'P', opposite: 'D' },
    Q4: { target: 'G', opposite: 'B' },
    Q5: { target: 'B', opposite: 'G' },
    Q6: { target: 'G', opposite: 'B' },
    Q7: { target: 'S', opposite: 'E' },
    Q8: { target: 'E', opposite: 'S' },
    Q9: { target: 'S', opposite: 'E' },
  };

  // Apply scoring logic
  for (const q in answers) {
    const value = answers[q as keyof QuizAnswers];
    const { target, opposite } = scoringMap[q as keyof QuizAnswers];

    if (value === 1) traitScores[opposite] += 2;
    else if (value === 2) traitScores[opposite] += 1;
    else if (value === 4) traitScores[target] += 1;
    else if (value === 5) traitScores[target] += 2;
  }

  // Check for full neutral responses in any dimension
  const dimensionMap: Record<string, (keyof QuizAnswers)[]> = {
    'Mentoring Drive': ['Q1', 'Q2', 'Q3'],
    'Teaching Style': ['Q4', 'Q5', 'Q6'],
    'Method Approach': ['Q7', 'Q8', 'Q9'],
  };

  const neutralDims: string[] = [];

  for (const [dimension, qs] of Object.entries(dimensionMap)) {
    const isAllNeutral = qs.every((q) => answers[q] === 3);
    if (isAllNeutral) neutralDims.push(dimension);
  }

  if (neutralDims.length > 0) {
    return {
      mentorTypeCode: '',
      dimensionTypes: {
        mentoringDrive: '',
        teachingStyle: '',
        methodApproach: '',
      },
      traitScores,
      rawAnswers: answers,
      valid: false,
      error: `Please avoid selecting neutral (3) for all questions in: ${neutralDims.join(', ')}.`,
    };
  }

  // Determine mentor type
  const mentoringDrive = traitScores.P > traitScores.D ? 'P' : 'D';
  const teachingStyle = traitScores.G > traitScores.B ? 'G' : 'B';
  const methodApproach = traitScores.S > traitScores.E ? 'S' : 'E';

  const mentorTypeCode = `${mentoringDrive}${teachingStyle}${methodApproach}`;

  // Only allow specific codes
  const allowedCodes = new Set([
    'PGS', 'PGE', 'PPS', 'PPE',
    'DGS', 'DGE', 'DPS', 'DPE',
  ]);

  if (!allowedCodes.has(mentorTypeCode)) {
    return {
      mentorTypeCode: '', // prevent invalid codes from being used
      dimensionTypes: {
        mentoringDrive: '',
        teachingStyle: '',
        methodApproach: '',
      },
      traitScores,
      rawAnswers: answers,
      valid: false,
      error: `The combination (${mentorTypeCode}) is not a valid mentor type.`,
    };
  }

  const dimensionTypes = {
    mentoringDrive: mentoringDrive === 'P' ? 'Purpose-Driven' : 'Demand-Responsive',
    teachingStyle: teachingStyle === 'G' ? 'Guided Discovery' : 'Problem-Based',
    methodApproach: methodApproach === 'S' ? 'Structured' : 'Exploratory',
  };

  return {
    mentorTypeCode,
    dimensionTypes,
    traitScores,
    rawAnswers: answers,
    valid: true,
  };
}
