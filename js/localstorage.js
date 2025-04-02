import { Motorhomes } from "./classes.js";

// Guardar objetos en LocalStorage
function saveToLocalStorage(key, data) {
	//Corregir error porque no existe content
    data.forEach(item => {
        item.content = item.content || "";
    });
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage() {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites = favorites.map(data => {
        return new Motorhomes({
            Contacto: {
                Zona: { content: data.zone || "Zona desconocida" },
                Servicios: { content: data.services || "Servicios no disponibles" },
                Plazas: { content: data.places || "0" },
                Tipo: { content: data.tipe || "Pública" },
                Direccion: { content: data.address || "Sin dirección" },
                EstanciaMaxima: { content: data.maxstay || "No definida" },
                Precio: { content: data.price || "Gratuita" }
            },
            Geolocalizacion: {
                Coordenadas: { content: data.coordenates || "0,0" }
            },
            Visualizador: {
                Slide: { value: data.image || "./assets/default-image.jpg" }
            },
            Nombre: { content: data.name || "Nombre desconocido" }
        }, data.id);
    });

    console.log("Datos con estructura corregida:", favorites);
    return favorites;
}

// Añadir favoritos al array guardado en LocalStorage
function addToLocalStorageArray (favorites, area) {
	const array = getFromLocalStorage(favorites) || [];
	const index = array.findIndex(element => element.id === area.id);
	if (index !== -1) {
		return;
	}
	array.push(area);
	saveToLocalStorage(favorites, array);
}

// Eliminar favoritos del array guardado en LocalStorage
function removeFromLocalStorageArray (favorites, area) {
	const array = getFromLocalStorage(favorites);
	if (!array) {
		return;
	}
	const index = array.findIndex(element => element.id === area.id);
	if (index === -1) {
		return;
	}
	array.splice(index, 1);
	saveToLocalStorage(favorites, array);
}

// Buscar areas en lo guardado
function findInLocalStorageArray (favorites, area) {
	const array = getFromLocalStorage(favorites) || [];
	return array.find(element => element.id === area.id);
}

export { getFromLocalStorage, saveToLocalStorage, findInLocalStorageArray }
