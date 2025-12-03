import { notes } from "../../data/index.js";

export default function Notes() {
  return (
    <div className="page-content">
      <h2>📊 Notes</h2>
      <p>Liste complète des notes - {notes.length} enregistrements</p>
      
      <div className="content-table">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Étudiant</th>
              <th>Cours</th>
              <th>Date</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {notes.slice(0, 10).map((item) => (
              <tr key={item.unique_id}>
                <td>{item.unique_id}</td>
                <td>{item.student.firstname} {item.student.lastname}</td>
                <td>{item.course}</td>
                <td>{item.date}</td>
                <td className={`grade ${item.grade >= 70 ? 'good' : item.grade >= 60 ? 'medium' : 'low'}`}>
                  {item.grade}/100
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="info-text">Affichage des 10 premiers enregistrements (Total: {notes.length})</p>
      </div>
    </div>
  );
}

