import React from 'react';

export default function Gallery({ photos, title }) {
  return (
    <section>
      <h2>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.thumb}
            alt={photo.alt}
            width={160}
            height={107}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
    </section>
  );
}
