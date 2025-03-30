import { motorhomes } from "./json.js";
import { Motorhomes } from "./classes.js";

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
}

export {fetchData, displayAreas};