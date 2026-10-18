/* Places and dates supplied by Praveen. Country-level locations use a
   representative map position and are labeled at country level. */
window.SITE = {
  map: {
    area: { lon0: -180, lon1: 180, lat0: 85, lat1: -60 },
    areaMobile: { lon0: -180, lon1: 180, lat0: 85, lat1: -60 },
    places: {
      blr: { name: 'Bangalore', note: '2016', lat: 12.97, lon: 77.59, side: 1, dy: -14 },
      nz17: { name: 'New Zealand', note: '2017', lat: -41.0, lon: 174.0, side: -1, dy: -22 },
      guj: { name: 'Gujarat · India', note: '2019', lat: 22.8, lon: 72.6, side: -1, dy: 14 },
      sg: { name: 'Singapore', note: '2022 · 2025 · now', lat: 1.35, lon: 103.82, side: 1, dy: 16, home: true },
      anz: { name: 'Australia · New Zealand', note: '2024', lat: -29.0, lon: 147.0, side: -1, dy: 18 },
      kr: { name: 'South Korea', note: '2025', lat: 36.2, lon: 127.8, side: 1, dy: -14 },
      es: { name: 'Spain', note: '2026', lat: 40.2, lon: -3.7, side: -1, dy: -24 },
      fr: { name: 'France', note: '2026', lat: 46.6, lon: 2.2, side: -1, dy: 28 },
      auh: { name: 'Abu Dhabi', note: '2026', lat: 24.45, lon: 54.65, side: -1, dy: -15 },
    },
    routes: [['blr', 'nz17'], ['nz17', 'guj'], ['guj', 'sg'], ['sg', 'anz'], ['anz', 'kr'], ['kr', 'es'], ['es', 'fr'], ['fr', 'auh']],
    trips: [],
  },
};
