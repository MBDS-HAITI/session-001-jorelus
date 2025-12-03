import { aproposInfo } from "../../data/index.js";

export default function Apropos() {
  return (
    <div className="page-content">
      <h2>ℹ️ À propos</h2>
      
      <div className="apropos-container">
        <section className="apropos-section">
          <h3>{aproposInfo.title}</h3>
          <p>{aproposInfo.description}</p>
        </section>

        <section className="apropos-section">
          <h3>📊 Statistiques</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">👥</span>
              <div>
                <p className="stat-label">Étudiants</p>
                <p className="stat-value">{aproposInfo.stats.totalEtudiants}</p>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📚</span>
              <div>
                <p className="stat-label">Matières</p>
                <p className="stat-value">{aproposInfo.stats.totalMatieres}</p>
              </div>
            </div>
            <div className="stat-card">
              <span className="stat-icon">📊</span>
              <div>
                <p className="stat-label">Enregistrements</p>
                <p className="stat-value">{aproposInfo.stats.totalNotes}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="apropos-section">
          <h3>📞 Contact</h3>
          <p><strong>Email:</strong> {aproposInfo.contact.email}</p>
          <p><strong>Téléphone:</strong> {aproposInfo.contact.phone}</p>
        </section>
      </div>
    </div>
  );
}

