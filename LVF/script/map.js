import Marker from "./MapClass.js";

// Crée un objet map de Leaflet qui correspond à une carte
// la méthode setView prend comme arguments [x, y], zoom
let map = L.map('map').setView([43.8, 3.8865], 7);

// On ajoute les tiles sur la map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 7,
  maxZoom: 7,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// On ajoute des marqueurs sur la carte en les stockant dans un array
const markers = [];

markers.push( new Marker([43.3084,3.4838], "Adge", "Boutique", map, "magasin") );
markers.push( new Marker([44.1996,4.6195], "Saint-Nazaire", "Boutique", map, "magasin") );
markers.push( new Marker([43.2186,5.5504], "Cassis", "Boutique", map, "magasin") );
markers.push( new Marker([43.6422,5.0489], "Salon de Provence", "Boutique", map, "magasin") );
markers.push( new Marker([44.5348,3.4911], "Mende", "Usine", map, "usine") );
markers.push( new Marker([43.6086,3.8865], "Montpellier", "Siège social", map, "siege") );