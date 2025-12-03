import { useMemo } from 'react';
import { notes, matieres } from '../../data';

export default function Matieres() {
  const stats = useMemo(() => {
    return matieres.map((courseName) => {
      const recs = notes.filter(({ course }) =>
        (course ?? 'Non renseignée') === (courseName ?? 'Non renseignée')
      );

      const values = recs
        .map(({ note }) => {
          const v = typeof note === 'number' ? note : parseFloat(note);
          return Number.isFinite(v) ? v : null;
        })
        .filter((v) => v !== null);

      const count = recs.length;
      const avg = values.length ? (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2) : '-';
      const max = values.length ? Math.max(...values) : '-';
      const min = values.length ? Math.min(...values) : '-';

      return { course: courseName ?? 'Non renseignée', count, avg, max, min };
    });
  }, [notes, matieres]);

  return (
    <main className="Main page-content">
      <h1>📚 Matières</h1>
      <p style={{ color: '#64748b' }}>Total matières : {matieres.length}</p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e6eef8' }}>Matière</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Enregistrements</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Moyenne</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Max</th>
            <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Min</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(({ course, count, avg, max, min }) => (
            <tr key={course}>
              <td style={{ padding: 8, borderBottom: '1px solid #f1f5f9' }}>{course}</td>
              <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{count}</td>
              <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{avg}</td>
              <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{max}</td>
              <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{min}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}