export default function StudentCard({ item }) {
  if (!item) {
    return null; // si rien à afficher
  }

  return (
    <div className="student-card">
      <p><strong>ID unique :</strong> {item.unique_id}</p>
      <p><strong>Cours :</strong> {item.course}</p>
      <p>
        <strong>Étudiant :</strong> {item.student.firstname}{" "}
        {item.student.lastname}
      </p>
      <p><strong>ID Étudiant :</strong> {item.student.id}</p>
      <p><strong>Date :</strong> {item.date}</p>
      <p><strong>Note :</strong> {item.grade}</p>
    </div>
  );
}
