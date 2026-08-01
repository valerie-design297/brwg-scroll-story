const map = L.map("map", {
  scrollWheelZoom: false,
  zoomControl: true
}).setView([39.58, -106.08], 10);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([39.63, -106.07])
  .addTo(map)
  .bindPopup("Blue River Watershed");

const mapViews = [
  {
    center: [39.64, -106.07],
    zoom: 11,
    popup: "The Blue River headwaters begin high in the Rocky Mountains."
  },
  {
    center: [39.48, -106.04],
    zoom: 12,
    popup: "Historic mining areas influenced water quality across parts of the watershed."
  },
  {
    center: [39.62, -106.10],
    zoom: 11,
    popup: "Restoration work helps improve stream health and habitat."
  }
];

const scroller = scrollama();

function handleStepEnter(response) {
  const stepIndex = Number(response.element.dataset.step);
  const view = mapViews[stepIndex];

  document.querySelectorAll(".step").forEach((step) => {
    step.classList.remove("is-active");
  });

  response.element.classList.add("is-active");

  map.flyTo(view.center, view.zoom, {
    animate: true,
    duration: 1.5
  });

  marker
    .setLatLng(view.center)
    .setPopupContent(view.popup)
    .openPopup();
}

scroller
  .setup({
    step: ".step",
    offset: 0.55,
    debug: false
  })
  .onStepEnter(handleStepEnter);

window.addEventListener("resize", () => {
  scroller.resize();
  map.invalidateSize();
});
