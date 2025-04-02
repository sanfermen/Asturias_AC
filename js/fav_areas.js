import { Motorhomes } from "./classes.js";
import { getFromLocalStorage, saveToLocalStorage } from "./localstorage.js";

function buttonFavorite(area) {
    const favorites = getFromLocalStorage("favorites") || [];

    const index = favorites.findIndex(fav => fav.id === area.id);

    if (index !== -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(area);
    }

    saveToLocalStorage("favorites", favorites);
	showFavorites();

	const favButton = document.querySelector(`.button-favorites[data-id="${area.id}"]`);
    if (favButton) {
        favButton.innerHTML = favorites.find(fav => fav.id === area.id) ? "❤️" : "💙";
    }
}

function showFavorites() {
    const container = document.getElementById("favorites");
    const favorites = getFromLocalStorage("favorites") || [];

    container.innerHTML = "";

    favorites.forEach(data => {
		const area = new Motorhomes({
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
		
        const card = document.createElement("div");
		card.id = "fav-card";
        card.innerHTML = area.displayCard();
        
        const favButton = card.querySelector(".button-favorites");
        if (favButton) {
            favButton.addEventListener("click", () => {
                buttonFavorite(area);
                showFavorites();
            });
        }

        container.appendChild(card);
    });
}


export { showFavorites, buttonFavorite };