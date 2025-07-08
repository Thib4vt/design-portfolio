import React from 'react'
import './index.css'
import './styles/garment.css'
import './styles/garments.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import TechDesign from './components/TechDesign'
import Garments from './components/Garments'
import StylingCuration from './components/StylingCuration'
import PlaidScanner from './components/PlaidScanner'

// Import subpages
import StylingPage from './components/StylingCuration/StylingPage'
import CurationPage from './components/StylingCuration/CurationPage'
import { CuratedPieceComponents } from './components/StylingCuration/CuratedPieces'
import BumBagCapri from './components/Garments/BumBagCapri'
import BeetleBomber from './components/Garments/BeetleBomber'
import DogEarButton from './components/Garments/DogEarButton'
import ZipHoodie from './components/Garments/ZipHoodie'
import KnitCapriSample from './components/Garments/KnitCapriSample'
import InvertedBoxPleatJeans from './components/Garments/InvertedBoxPleatJeans'

// Import Tech Design subpages
import Browzwear from './components/TechDesign/Browzwear'
import Gerber from './components/TechDesign/Gerber'
import CADs from './components/TechDesign/CADs'
import TechPacks from './components/TechDesign/TechPacks'

// Import Thesis subpages
import ThesisBumBag from './components/Thesis/BumBag'
import ThesisBeetle from './components/Thesis/Beetle'
import StopMotion from './components/Thesis/StopMotion'
import Development from './components/Thesis/Development'

// Import Tech Pack subpages
import BeetleBomberTP from './components/TechDesign/TechPacks/BeetleBomberTP'
import BumBagCapriTP from './components/TechDesign/TechPacks/BumBagCapriTP'

function App() {
  return (
    <Router>
      <PlaidScanner />
      <div className="app-container">
        <header>
          <nav>
            <NavLink to="/" end>Thesis</NavLink>
            <NavLink to="/garments">Garments</NavLink>
            <NavLink to="/tech-design">Technical Design</NavLink>
            <NavLink to="/styling-curation">Styling/Curation</NavLink>
            <NavLink to="/about">Contact</NavLink>
          </nav>
          <div className="title-container">
            <h1>Thibaut Rappaport</h1>
          </div>
        </header>

        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/garments" element={<Garments />} />
          <Route path="/tech-design" element={<TechDesign />} />
          <Route path="/styling-curation" element={<StylingCuration />} />
          <Route path="/about" element={<About />} />

          {/* Garments subroutes */}
          <Route path="/garments/bum-bag-capri" element={<BumBagCapri />} />
          <Route path="/garments/beetle-bomber" element={<BeetleBomber />} />
          <Route path="/garments/dog-ear-button-up" element={<DogEarButton />} />
          <Route path="/garments/zip-up-hoodie" element={<ZipHoodie />} />
          <Route path="/garments/inverted-box-pleat" element={<InvertedBoxPleatJeans />} />
          <Route path="/garments/knit-capri-sample" element={<KnitCapriSample />} />

          {/* Styling/Curation subroutes */}
          <Route path="/styling-curation/styling" element={<StylingPage />} />
          <Route path="/styling-curation/curation" element={<CurationPage />} />
          {Object.entries(CuratedPieceComponents).map(([path, Component]) => (
            <Route 
              key={path}
              path={`/styling-curation/curation/${path}`}
              element={<Component />}
            />
          ))}

          {/* Tech Design subroutes */}
          <Route path="/tech-design/browzwear" element={<Browzwear />} />
          <Route path="/tech-design/gerber" element={<Gerber />} />
          <Route path="/tech-design/cads" element={<CADs />} />
          <Route path="/tech-design/tech-packs" element={<TechPacks />} />
          <Route path="/tech-design/tech-packs/beetle-bomber" element={<BeetleBomberTP />} />
          <Route path="/tech-design/tech-packs/bum-bag-capri" element={<BumBagCapriTP />} />

          {/* Thesis subroutes */}
          <Route path="/thesis/bum-bag" element={<ThesisBumBag />} />
          <Route path="/thesis/beetle" element={<ThesisBeetle />} />
          <Route path="/thesis/stop-motion" element={<StopMotion />} />
          <Route path="/thesis/development" element={<Development />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 