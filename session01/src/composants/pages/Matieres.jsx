import { matieres, notes } from "../../data/index.js";

export default function Matieres() {
  // Calculer les statistiques par matière
  const matiereStats = matieres.map(matiere => {
    const cours = notes.filter(item => item.course === matiere);
    const grades = cours.map(item => item.grade);
    const moyenne = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(1);
    
    return {
      name: matiere,
      count: cours.length,
      moyenne: moyenne,
      max: Math.max(...grades),
      min: Math.min(...grades)
    };
  });

  return (
    <div className="page-content">
      <h2>📚 Matières</h2>
      <p>Liste des matières - {matieres.length} matières</p>
      
      <div className="content-table">
        <table className="data-table">
          <thead>
            <tr>
              <th>Matière</th>
              <th>Enregistrements</th>
              <th>Moyenne</th>
              <th>Max</th>
              <th>Min</th>
            </tr>
          </thead>
          <tbody>
            {matiereStats.map((stat, idx) => (
              <tr key={idx}>
                <td>{stat.name}</td>
                <td>{stat.count}</td>
                <td className="grade">{stat.moyenne}/100</td>
                <td className="grade good">{stat.max}/100</td>
                <td className="grade low">{stat.min}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

