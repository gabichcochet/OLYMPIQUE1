// Données de performance basées sur ton fichier Excel
// JO Paris 2024 – Léon Marchand

export const athleteData = [
  {
    event: "400m 4N",
    score: 4,            // Score normalisé (1000 / temps)
    benchmark: 240,      // Référence réaliste
    consistency: 91,     // Cohérence de performance
  },
  {
    event: "200m papillon",
    score: 9,
    benchmark: 110,
    consistency: 89,
  },
  {
    event: "200m brasse",
    score: 8,
    benchmark: 124,
    consistency: 87,
  },
  {
    event: "200m 4N",
    score: 9,
    benchmark: 113,
    consistency: 90,
  },
];

// Courbe de progression (exemple cohérent)
export const athleteTrend = [
  { period: "S1", performance: 78 },
  { period: "S2", performance: 82 },
  { period: "S3", performance: 86 },
  { period: "S4", performance: 90 },
  { period: "S5", performance: 93 },
];
