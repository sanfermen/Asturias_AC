import { MapAsturias } from './class_map.js';
import { displayAreas } from './functions.js';

// Inicio la variable antes porque la voy a usar en varios sitios
let mymap;

// Inicializar el mapa
document.addEventListener('DOMContentLoaded', () => {
	mymap = new MapAsturias('map', './assets/areas-autocaravanas.json');
});

// Función botón showDetails del mapa
document.addEventListener('click', (event) => {
	if (event.target.classList.contains('show-details')) {
		const id = event.target.getAttribute('data-id');
		displayAreas(id, mymap.motorhomes);
		document.getElementById('map-picture').classList.add('hidden');
	}
});