type Trait = 'I' | 'E' | 'M' | 'S' | 'D' | 'C' | 'T' | 'X';

type TraitScores = Record<Trait, number>;
type RawAnswers = Record<string, number>;

const traitMap = {
  Q1: { target: 'I', opposite: 'E' },
  Q2: { target: 'E', opposite: 'I' },
  Q3: { target: 'I', opposite: 'E' },
  Q4: { target: 'M', opposite: 'S' },
  Q5: { target: 'S', opposite: 'M' },
  Q6: { target: 'M', opposite: 'S' },
  Q7: { target: 'D', opposite: 'C' },
  Q8: { target: 'C', opposite: 'D' },
  Q9: { target: 'C', opposite: 'D' },
  Q10: { target: 'X', opposite: 'T' },
  Q11: { target: 'T', opposite: 'X' },
  Q12: { target: 'X', opposite: 'T' },
} as const;

const dimensionMap = {
  Motivation: ['Q1', 'Q2', 'Q3'],
  Cognition: ['Q4', 'Q5', 'Q6'],
  Environment: ['Q7', 'Q8', 'Q9'],
  Approach: ['Q10', 'Q11', 'Q12'],
};

export function calculateLearnerType(rawAnswers: RawAnswers) {
  const traitScores: TraitScores = { I: 0, E: 0, M: 0, S: 0, D: 0, C: 0, T: 0, X: 0 };

  // Apply scoring logic
  for (let qNum in rawAnswers) {
    const value = rawAnswers[qNum];
    const traits = traitMap[qNum as keyof typeof traitMap];
    if (!traits) continue;

    if (value === 1) traitScores[traits.opposite] += 2;
    else if (value === 2) traitScores[traits.opposite] += 1;
    else if (value === 4) traitScores[traits.target] += 1;
    else if (value === 5) traitScores[traits.target] += 2;
  }

  // Determine winners
  const motivation = traitScores.I > traitScores.E ? 'I' : 'E';
  const cognition = traitScores.M > traitScores.S ? 'M' : 'S';
  const environment = traitScores.D > traitScores.C ? 'D' : 'C';
  const approach = traitScores.T > traitScores.X ? 'T' : 'X';

  const learner_type_code = `${motivation}${cognition}${environment}${approach}`;

  const dimension_types = {
    motivation: motivation === 'I' ? 'Intrinsic' : 'Extrinsic',
    cognition: cognition === 'M' ? 'Mapper' : 'Solver',
    environment: environment === 'D' ? 'Diver' : 'Connector',
    approach: approach === 'T' ? 'Strategist' : 'Experimentor',
  };

  // Validation
  const neutralDims = Object.entries(dimensionMap).filter(([_, qList]) =>
    qList.every(q => rawAnswers[q] === 3)
  ).map(([dim]) => dim);

  const valid = neutralDims.length === 0;

  return {
    learner_type_code,
    dimension_types,
    trait_scores: traitScores,
    raw_answers: rawAnswers,
    valid,
    error: !valid ? `Avoid selecting all neutral answers in: ${neutralDims.join(', ')}` : undefined,
    warning: Object.values(rawAnswers).filter(val => val === 3).length >= 9
      ? "You selected mostly neutral responses. Your result may be less accurate."
      : undefined,
  };
}
