import { fetchData, displayAreas } from "./functions.js";
import { Motorhomes, Markers } from "./classes.js";

const url = './assets/areas-autocaravanas.json';

console.log("hola");

var mymap = L.map('map').setView([43.378564, -5.958032], 9);
//tileLayer añade la capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

let iconMarker = L.icon({
	iconUrl: './assets/motorhome_icon.png',
	iconSize: [60, 70],
	iconAnchor: [30, 60]
})

let motorhomes = [];

async function init(jsonFile) {
	const jsonData = await fetchData(jsonFile);
	motorhomes = jsonData.map((data, index) => new Motorhomes(data, index));

	// Crear grupo de clusters
	let markersCluster = L.markerClusterGroup();

	motorhomes.forEach(markerData => {
		let coordenates = markerData.coordenates.split(',').map(Number);
		let marker = L.marker(coordenates, {icon: iconMarker })
			.bindPopup(markerData.popUp());

		// Agregar el marker al cluster
		markersCluster.addLayer(marker);
	});

	// Agregar el cluster al mapa
	mymap.addLayer(markersCluster);
}

// Función botón showDetails del mapa
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('show-details')) {
		const id = event.target.getAttribute('data-id');
		displayAreas(id);
		document.getElementById('map-picture').classList.add('hidden');
	}
});

/* const text_container = document.getElementById("text-container");
const text_container__img = document.createElement("img");
text_container__img.src = "/assets/blanquita.jpg"
text_container.appendChild(text_container__img); */

export { motorhomes};

init(url);



