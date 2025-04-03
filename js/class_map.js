import { fetchData } from "./functions.js";
import { Motorhomes } from "./classes.js";

const url = './assets/areas-autocaravanas.json';

// Clase para crear el mapa
class MapAsturias {
	constructor(id, jsonFile) {
		this.id = id;
		this.jsonFile = jsonFile;
		this.map = null;
		this.markersCluster = L.markerClusterGroup();
		this.motorhomes = [];
		this.initializeMap();
		this.loadData();
	}

	// Inicializa el mapa de leaflet, centrado en un punto de Asturias
	initializeMap() {
		this.mymap = L.map(this.id).setView([43.378564, -5.958032], 9);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(this.mymap);
	}

	// Método para cargar los datos de los archivos json y poner los marcadores en los puntos
	async loadData() {
		const jsonData = await fetchData(this.jsonFile);
		this.motorhomes = jsonData.map((data, index) => new Motorhomes(data, index));

		let iconMarker = L.icon({
			iconUrl: './assets/motorhome_icon.png',
			iconSize: [60, 70],
			iconAnchor: [30, 60]
		})

		this.motorhomes.forEach(markerData => {
			let coordenates = markerData.coordenates.split(',').map(Number);
			let marker = L.marker(coordenates, {icon: iconMarker })
				.bindPopup(markerData.popUp());
	
			this.markersCluster.addLayer(marker);
		});
	
		this.mymap.addLayer(this.markersCluster);
	}
}

export { MapAsturias};




