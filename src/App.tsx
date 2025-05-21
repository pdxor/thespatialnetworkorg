import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegenerativeFarmsPage from './pages/RegenerativeFarmsPage';
import EcovillagePage from './pages/EcovillagePage';
import RetreatCenterPage from './pages/RetreatCenterPage';
import ConservationPage from './pages/ConservationPage';

function App() {
  return (
    <div className="font-[Inter]">
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        :root {
          --color-primary: #2F6B55;
          --color-primary-dark: #1F4A3A;
          --color-secondary: #A67C52;
          --color-accent: #7BB5D4;
        }
        
        .text-primary {
          color: var(--color-primary);
        }
        
        .bg-primary {
          background-color: var(--color-primary);
        }
        
        .bg-primary-dark {
          background-color: var(--color-primary-dark);
        }
        
        .hover\\:bg-primary-dark:hover {
          background-color: var(--color-primary-dark);
        }
        
        .hover\\:text-primary-dark:hover {
          color: var(--color-primary-dark);
        }
      `}</style>
    
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions/regenerative-farms" element={<RegenerativeFarmsPage />} />
        <Route path="/solutions/ecovillages" element={<EcovillagePage />} />
        <Route path="/solutions/retreat-centers" element={<RetreatCenterPage />} />
        <Route path="/solutions/conservation" element={<ConservationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;