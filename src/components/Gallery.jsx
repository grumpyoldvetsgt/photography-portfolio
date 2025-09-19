const makePlaceholders = (category) =>
  Array.from({ length: 24 }, (_, i) => ({
    id: `${category}-${i + 1}`,
    src: `https://picsum.photos/seed/${category}-${i + 1}/1200/800`,
    thumb: `https://picsum.photos/seed/${category}-${i + 1}/640/427`,
    alt: `${category} photo ${i + 1}`,
  }));

export const GALLERIES = {
  portrait: makePlaceholders('portrait'),
  family: makePlaceholders('family'),
  boudoir: makePlaceholders('boudoir'),
};
