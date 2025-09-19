import React, { useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import { GALLERIES } from "./components/galleries.js";

function App() {
  const categories = Object.keys(GALLERIES);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories} onSelect={setActiveCategory} />
      <Gallery images={GALLERIES[activeCategory]} />
      <Footer />
    </div>
  );
}

export default App;

