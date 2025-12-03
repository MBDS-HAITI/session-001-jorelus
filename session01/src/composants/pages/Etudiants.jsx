import { etudiants } from "../../data/index.js";

export default function Etudiants() {
  return (
    <div className="page-content">
      <h2>👥 Etudiants</h2>
      <p>Liste des étudiants - {etudiants.length} étudiants</p>
      
      <div className="content-table">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Prénom</th>
              <th>Nom</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((etudiant) => (
              <tr key={etudiant.id}>
                <td>{etudiant.id}</td>
                <td>{etudiant.firstname}</td>
                <td>{etudiant.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

