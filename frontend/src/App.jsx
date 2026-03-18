import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-neon selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50"></div>
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <About />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
