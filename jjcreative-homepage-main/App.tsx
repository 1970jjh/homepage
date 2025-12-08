import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { People } from './pages/People';
import { Programs } from './pages/Programs';
import { Infographic } from './pages/Infographic';
import { AIAgent } from './pages/AIAgent';
import { Reference } from './pages/Reference';
import { Contact } from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="people" element={<People />} />
          <Route path="programs" element={<Programs />} />
          <Route path="infographic" element={<Infographic />} />
          <Route path="ai-agent" element={<AIAgent />} />
          <Route path="reference" element={<Reference />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;