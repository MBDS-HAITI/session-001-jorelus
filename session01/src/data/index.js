// ...existing code...
import rawData from './data.json';

// Normaliser les enregistrements avec destructuration
export const notes = rawData.map((item, idx) => {
  const { grade, unique_id, course, student, date } = item;
  const parsed = typeof grade === 'number' ? grade : parseFloat(grade);
  
  return {
    id: unique_id ?? idx + 1,
    course: course ?? 'Non renseignée',
    student: student ?? null,
    date: date ?? null,
    note: Number.isFinite(parsed) ? parsed : null
  };
});

// Étudiants uniques avec destructuration
export const etudiants = [...new Map(
  notes
    .filter(({ student }) => student?.id)
    .map(({ student: { id, firstname, lastname } }) => [
      id,
      { id, firstname: firstname ?? '', lastname: lastname ?? '' }
    ])
).values()];

// Matières uniques avec destructuration
export const matieres = [...new Set(
  notes.map(({ course }) => course || 'Non renseignée')
)].sort();

// Calcul des statistiques globales avec destructuration
const calculateStats = () => {
  const validNotes = notes
    .map(({ note }) => note)
    .filter((n) => Number.isFinite(n));

  if (validNotes.length === 0) {
    return {
      totalNotes: 0,
      moyenne: 0,
      max: 0,
      min: 0,
      median: 0,
      standardDeviation: 0
    };
  }

  const sorted = [...validNotes].sort((a, b) => a - b);
  const sum = validNotes.reduce((a, b) => a + b, 0);
  const moyenne = sum / validNotes.length;

  // Médiane
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 !== 0 
    ? sorted[mid] 
    : (sorted[mid - 1] + sorted[mid]) / 2;

  // Écart-type
  const squareDiffs = validNotes.map((n) => Math.pow(n - moyenne, 2));
  const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / validNotes.length;
  const standardDeviation = Math.sqrt(avgSquareDiff);

  return {
    totalNotes: validNotes.length,
    moyenne: parseFloat(moyenne.toFixed(2)),
    max: Math.max(...validNotes),
    min: Math.min(...validNotes),
    median: parseFloat(median.toFixed(2)),
    standardDeviation: parseFloat(standardDeviation.toFixed(2))
  };
};

// Statistiques par matière avec destructuration
const calculateStatsByCourse = () => {
  const statsByMatiere = {};

  matieres.forEach((course) => {
    const courseNotes = notes
      .filter(({ course: c }) => (c ?? 'Non renseignée') === course)
      .map(({ note }) => note)
      .filter((n) => Number.isFinite(n));

    if (courseNotes.length === 0) {
      statsByMatiere[course] = {
        count: 0,
        moyenne: 0,
        max: 0,
        min: 0,
        median: 0
      };
      return;
    }

    const sorted = [...courseNotes].sort((a, b) => a - b);
    const sum = courseNotes.reduce((a, b) => a + b, 0);
    const moyenne = sum / courseNotes.length;

    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 
      ? sorted[mid] 
      : (sorted[mid - 1] + sorted[mid]) / 2;

    statsByMatiere[course] = {
      count: courseNotes.length,
      moyenne: parseFloat(moyenne.toFixed(2)),
      max: Math.max(...courseNotes),
      min: Math.min(...courseNotes),
      median: parseFloat(median.toFixed(2))
    };
  });

  return statsByMatiere;
};

// À propos avec statistiques enrichies
export const aproposInfo = {
  title: "Plateforme MBDS",
  description: "Plateforme de gestion académique (données normalisées depuis data.json).",
  contact: {
    email: "josselet.orelus@student.ueh.edu.ht",
    phone: "509 4600 2055",
    programmeur: "Ce projet est réalisé par Orelus Josselet."
  },
  stats: {
    totalEtudiants: etudiants.length,
    totalMatieres: matieres.length,
    totalNotes: notes.length,
    global: calculateStats(),
    parMatiere: calculateStatsByCourse()
  }
};

// Export des fonctions pour réutilisation
export const getStatistics = calculateStats;
export const getStatisticsByCourse = calculateStatsByCourse;

// ...existing code...