 
import { useState } from 'react'
import Header from './composants/Header.jsx'
import ContentRouter from './composants/ContentRouter.jsx'
import Footer from './composants/Footer.jsx'
import './App.css'

 
function App() {
  const [activeMenu, setActiveMenu] = useState('accueil');

  return (
    <div className="app">
      <Header onMenuChange={setActiveMenu} activeMenu={activeMenu}/>
      <ContentRouter activePage={activeMenu} /> 
      <Footer />
    </div>
  )
};

export default App
