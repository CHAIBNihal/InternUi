import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/NavBar/Nav'

// Importez vos composants de page
import HomePage from './Pages/Home/HomePage'
import NotFound from './Pages/NotFound/NotFound'
import WebPage from './Pages/PageWeb/WebPage'
import Sprints from './Pages/Sprints/Sprint'
import Stagiaires from './Pages/Stagiaires/Stagiaires'
import NouveauxDemandes from './Pages/NouveauxDemandes/NouveauxDemandes'

function App() {
  const [isLogged, setisLogged] = useState(true)

  return (
    <div>
      {isLogged ? (
        <>
          {/* Flou latéral droit */}
          <div className="right-blur"></div>

          {/* Contenu principal */}
          <div className="contenu">
            <Nav />
            <Routes>
              <Route path="/accueil" element={<HomePage />} />
              <Route path='/Sprints' element={<Sprints />} />
              <Route path='/Stagiaires' element={<Stagiaires/>} />
              <Route path="*" element={<NotFound />} />
              <Route path='/nouveaux-demandes' element={<NouveauxDemandes/>} />
            </Routes>
          </div>
        </>
      ) : (
    
        <div className="contenu overflow-y-auto">
          <Routes>
            <Route path="/" element={<WebPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  )
}

export default App
