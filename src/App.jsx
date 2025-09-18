import React from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import { GALLERIES } from './components/galleries.js';

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Gallery title="Portrait" photos={GALLERIES.portrait} />
        <Gallery title="Family" photos={GALLERIES.family} />
        <Gallery title="Boudoir" photos={GALLERIES.boudoir} />
      </main>
      <Footer />
    </div>
  );
}
