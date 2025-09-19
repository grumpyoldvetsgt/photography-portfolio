import React from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import { GALLERIES } from './components/galleries.js';

function App() {
  return (
    <div>
      <Nav />
      <h2>Portrait Gallery</h2>
      <Gallery images={GALLERIES.portrait} />

      <h2>Family Gallery</h2>
      <Gallery images={GALLERIES.family} />

      <h2>Boudoir Gallery</h2>
      <Gallery images={GALLERIES.boudoir} />

      <Footer />
    </div>
  );
}

export default App;
