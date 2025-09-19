import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt={img.alt}
          className="gallery-item"
        />
      ))}
    </div>
  );
};

export default Gallery;


