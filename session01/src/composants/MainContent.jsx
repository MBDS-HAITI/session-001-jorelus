import { useEffect, useState } from "react";
import data from '../data/data.json'

import StudentCard from "./StudentCard";


export default function MainContent() {

  const [selectedItem, setSelectedItem] = useState(null);

  function choiceItemListe() {
    if (!Array.isArray(data) || data.length === 0) return;
    const index = Math.floor(Math.random() * data.length);
    setSelectedItem(data[index]);
  }

  useEffect(() => {
    choiceItemListe();
  }, []);
    
  return (
    <main className="Main">
      <div className="Container">

        <div className="content-section">
          <div className="section-header">
            <h1>Tirage aléatoire dans la liste</h1>
            <p className="section-subtitle">
              {data.length} enregistrements disponibles
            </p>
          </div>
          
          <button className="btn-random btn-lg" onClick={choiceItemListe}>
            🎲 Choisir un enregistrement aléatoire
          </button>
          
          {selectedItem ? (
            <div className="result-container">
              <h3 className="result-title">✓ Enregistrement sélectionné</h3>
              <StudentCard item={selectedItem} />
            </div>
          ) : (
            <div className="empty-state">
              <p>📋 Aucun enregistrement sélectionné pour l'instant.</p>
            </div>
          )}
        </div>

        <hr className="sep" />
      </div>
    </main>
  );
}
