import Notes from "./pages/Notes.jsx";
import Etudiants from "./pages/Etudiants.jsx";
import Matieres from "./pages/Matieres.jsx";
import Apropos from "./pages/Apropos.jsx";
import MainContent from "./MainContent.jsx";


export default function ContentRouter({ activePage }) {
  const renderPage = () => {
    switch(activePage) {
      case 'notes':
        return <Notes />;
      case 'etudiants':
        return <Etudiants />;
      case 'matieres':
        return <Matieres />;
      case 'apropos':
        return <Apropos />;
      case 'accueil':
      default:
        return <MainContent />;
    }
  };

  return (
    <main className="Main">
      <div key={activePage} className="content-fade">
        <div className="Container">
          {renderPage()}
        </div>
      </div>
    </main>
  );
}