import { useState } from "react";
import data from '../data/data.json'

import StudentCard from "./StudentCard";


export default function MainContent() {
  const [selectedItem, setSelectedItem] = useState(null);

    function choiceItemListe(){
      if(!Array.isArray(data) || data.length === 0)
        return
      const index = Math.floor(Math.random() * data.length);
      setSelectedItem(data[index]);
    }

    return (
      <main className="Main">
        <div  className="Container">
          
        <h1>Tirage aléatoire dans la liste</h1>
          <button onClick={choiceItemListe}>Choisir un enregistrement aléatoire</button>
          
          {selectedItem ? (
            <>
            <h2>Affichage de l'enregistrement tiré du tableau</h2>
            <StudentCard item={selectedItem} />
            </>
          ) : (
             <p style={{ marginTop: "1em", color: "#64748b" }}>
                 Aucun enregistrement sélectionné pour l’instant.
             </p>
          )}

            <hr className="sep" />

             <h2>Affichage direct d'un élément du tableau</h2>
            <StudentCard item={data[0]} />
        </div>
        </main>
    );
  }
  