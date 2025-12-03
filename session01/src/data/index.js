import rawData from './data.json';

// Extraire les étudiants uniques
export const etudiants = [...new Map(
  rawData.map(item => [item.student.id, item.student])
).values()];

// Extraire les matières uniques
export const matieres = [...new Set(rawData.map(item => item.course))].sort();

// Extraire les notes (tous les enregistrements)
export const notes = rawData;

// Informations "À propos"
export const aproposInfo = {
  title: "Plateforme MBDS Haiti",
  description: "Plateforme de gestion académique pour la gestion des étudiants, matières et notes.",
  contact: {
    email: "josselet.orelus@student.ueh.edu.ht",
    phone: "+509 4600 2055"
  },
  stats: {
    totalEtudiants: etudiants.length,
    totalMatieres: matieres.length,
    totalNotes: notes.length
  }
};
