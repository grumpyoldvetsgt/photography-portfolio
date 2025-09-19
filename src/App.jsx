import React from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import { GALLERIES } from './components/galleries.js';

function App() {
  return (
    <div>
      <Nav />
      <Gallery galleries={GALLERIES} />
      <Footer />
    </div>
  );
}

export default App;
