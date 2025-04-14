import React from 'react';
import './index.css';

import Nav from "./components/nav/Nav";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Gammes from './components/gammes/Gammes';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Gammes />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

