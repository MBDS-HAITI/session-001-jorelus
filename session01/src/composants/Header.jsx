import { useState } from "react";

 export default function Header() {
  const [open, setOpen] = useState(false);

  function menuClick(event) {
    event.preventDefault();
    const text = event.target.textContent;
    alert(`Vous avez cliqué sur : ${text}`);
    
  }
  
    return (
      <header className="site-header">
        <div className="container wrap">
          <img src="/logoMBDS.png" alt="Logo de la formation" className="brand-logo" />
          <div>
            <h1 className="title"> Introduction à React </h1>
              <h2 className="subtitle">À  la découverte des premières notions de React</h2>
          </div>
        </div>
        <button className= {`nav-toggle ${open ? "is-open" : ""}`}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>

        <nav className ={`nav ${open ? "show" : ""}`}>
          
              <a href="#Notes" onClick={menuClick}>Note</a>
              <a href="#Etudiants" onClick={menuClick}>Etudiants</a>
              <a href="#Matières" onClick={menuClick}>Matieres</a>
              <a href="#A propos" onClick={menuClick}>A propos</a>
            </nav>
      </header>
          );
        }
        