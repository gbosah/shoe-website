import React from 'react';
import Contact from './components/Contact';
import Des from './components/Des';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Des />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;