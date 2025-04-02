import { motorhomes } from "./json.js";
import { showFavorites, buttonFavorite } from "./fav_areas.js";

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

function displayAreas(id) {
	const area = motorhomes.find(a => a.id === Number(id));
	if (area) {
		const container = document.getElementById('card-container');
		container.innerHTML = area.displayCard();
		document.getElementById('text-container').style.display = 'none';}
	
	const favButton = document.querySelector(".button-favorites");
	if (favButton) {
		favButton.addEventListener("click", () => buttonFavorite(area));
	}
}

function showSection(sectionId) {
	// Convertimos todas las secciones en hidden

	document.querySelectorAll('.content').forEach(section => {
		section.classList.add('hidden');
	})
	document.getElementById(sectionId).classList.remove('hidden')
}

function changeHeaderColor(section) {
	const header = document.querySelector("#header");

	if (section === "home") {
		header.classList.add("dark-header");
		header.classList.remove("light-header");
	} else {
		header.classList.add("light-header");
		header.classList.remove("dark-header");
	}
}

document.getElementById("favorites_menu").addEventListener("click", showFavorites);

export {fetchData, displayAreas, showSection, changeHeaderColor};