import { showFavorites, buttonFavorite } from './fav_areas.js';

// Función para extraer datos del archivo .json
async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error ('Error al cargar el json: ${response.status}')}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

// Función para crear las tarjetas y función del botón de favoritos
function displayAreas(id, motorhomes) {
	const area = motorhomes.find(a => a.id === Number(id));
	const container = document.getElementById('card-container');

	if (area) {
		container.innerHTML = area.displayCard();
		container.style.backgroundColor = 'white';
	}
	
	const favButton = document.querySelector('.button-favorites');
	if (favButton) {
		favButton.addEventListener('click', () => buttonFavorite(area));
	}
}

// Función para cambiar la sección a hidden y hacer que la última tarjeta seleccionada en el mapa se borre al volver
function showSection(sectionId) {
	document.querySelectorAll('.content').forEach(section => {
		section.classList.add('hidden');
	})
	document.getElementById(sectionId).classList.remove('hidden')
	const container = document.getElementById('card-container')

	if (sectionId === 'map-section') {
		container.innerHTML = '';
		container.style.backgroundColor = 'transparent';
	}
}

// Cambiar el color del header según la sección en la que se esté
function changeHeaderColor(section) {
	const header = document.querySelector('#header');

	if (section === 'home') {
		header.classList.add('dark-header');
		header.classList.remove('light-header');
	} else {
		header.classList.add('light-header');
		header.classList.remove('dark-header');
	}
}

document.getElementById('favorites_menu').addEventListener('click', showFavorites);

export {fetchData, displayAreas, showSection, changeHeaderColor};