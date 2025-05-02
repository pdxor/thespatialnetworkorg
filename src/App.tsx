import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Demonstration from './components/Demonstration';
import Impact from './components/Impact';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Update the page title
    document.title = 'The Spatial Network - Mapping, Managing, and Regenerating the Planet';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Demonstration />
      <Impact />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;