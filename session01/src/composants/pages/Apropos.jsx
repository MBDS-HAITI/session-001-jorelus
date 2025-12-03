import { aproposInfo } from '../../data/index.js';

export default function Apropos() {
  const { title, description, contact, stats } = aproposInfo;
  const { email, phone, programmeur } = contact;
  const { totalEtudiants, totalMatieres, totalNotes, global, parMatiere } = stats;

  return (
    <main className="Main page-content apropos-page">
      <div className="apropos-header">
        <h1>ℹ️ À Propos</h1>
        <p className="apropos-description">{description}</p>
      </div>

      <div className="apropos-container">
        
        {/* Section Titre */}
        <section className="apropos-section">
          <h2>{title}</h2>
          <p>
          La Faculté des Sciences de l’Université d’État d’Haïti offre depuis 1999 un programme de Maitrise
          (MBDS- Bases de Données et Intégration de Systèmes) en partenariat avec l’Université de Nice,
          Sophia Antipolis.
          </p>
        </section>

        {/* Section Statistiques Globales */}
        <section className="apropos-section">
          <h2>📊 Statistiques Globales</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <p className="stat-label">Étudiants</p>
                <p className="stat-value">{totalEtudiants}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-content">
                <p className="stat-label">Matières</p>
                <p className="stat-value">{totalMatieres}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-content">
                <p className="stat-label">Enregistrements</p>
                <p className="stat-value">{totalNotes}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <p className="stat-label">Moyenne Globale</p>
                <p className="stat-value">{global.moyenne}/100</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques Détaillées */}
        <section className="apropos-section">
          <h2>📈 Statistiques Détaillées</h2>
          <div className="stats-detailed">
            <div className="stat-item">
              <span className="stat-icon-text">📊</span>
              <span className="stat-label">Moyenne</span>
              <span className="stat-value">{global.moyenne}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon-text">⬆️</span>
              <span className="stat-label">Maximum</span>
              <span className="stat-value">{global.max}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon-text">⬇️</span>
              <span className="stat-label">Minimum</span>
              <span className="stat-value">{global.min}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon-text">📍</span>
              <span className="stat-label">Médiane</span>
              <span className="stat-value">{global.median}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon-text">📉</span>
              <span className="stat-label">Écart-type</span>
              <span className="stat-value">{global.standardDeviation}</span>
            </div>
          </div>
        </section>

        {/* Section Performances par Matière */}
        <section className="apropos-section">
          <h2>📚 Performances par Matière</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e6eef8' }}>Matière</th>
                <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Enregistrements</th>
                <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Moyenne</th>
                <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Max</th>
                <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Min</th>
                <th style={{ textAlign: 'right', padding: 8, borderBottom: '1px solid #e6eef8' }}>Médiane</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(parMatiere).map(([course, { count, moyenne, max, min, median }]) => (
                <tr key={course}>
                  <td style={{ padding: 8, borderBottom: '1px solid #f1f5f9' }}>{course}</td>
                  <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{count}</td>
                  <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{moyenne}</td>
                  <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{max}</td>
                  <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{min}</td>
                  <td style={{ padding: 8, textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>{median}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Section Contact */}
        <section className="apropos-section contact-section">
          <h2>📞 Contact</h2>
          <div className="contact-info">
            <p><strong>Email :</strong> <a href={`mailto:${email}`}>{email}</a></p>
            <p><strong>Téléphone :</strong> <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
            <p><strong>Programmeur :</strong> <a href={`prog:${programmeur}`}>{programmeur}</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}