// Create the Leaflet map and center it near Summit County, Colorado.
const map = L.map("map", {
  scrollWheelZoom: false
}).setView([39.58, -106.08], 10);

// Add an OpenStreetMap basemap.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a temporary marker so we know the map is working.
L.marker([39.63, -106.07])
  .addTo(map)
  .bindPopup("Blue River Watershed")
  .openPopup();
