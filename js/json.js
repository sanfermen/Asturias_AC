import { fetchData } from "./functions.js";
import { Motorhomes, Markers } from "./classes.js";

const url = './assets/areas-autocaravanas.json';

console.log("hola");

var mymap = L.map('map').setView([43.38278, -5.82417], 11);
//tileLayer añade la capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

let iconMarker = L.icon({
	iconUrl: './assets/motorhome_icon.png',
	iconSize: [70, 70],
	iconAnchor: [30, 60]
})

async function init(jsonFile) {
	const jsonData = await fetchData(jsonFile);
	let motorhomes = jsonData.map(data => new Motorhomes(data));

	motorhomes.forEach(markerData => {
		let coordenates = markerData.coordenates.split(',').map(Number);
		L.marker(coordenates, {icon: iconMarker })
			.addTo(mymap)
			.bindPopup(markerData.popUp());
	});
	console.log(motorhomes);
}


init(url);


