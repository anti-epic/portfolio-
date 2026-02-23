import React from 'react';
import Header from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
