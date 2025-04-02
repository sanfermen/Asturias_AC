import { findInLocalStorageArray } from "./localstorage.js";

class Markers {
	constructor(data, id) {
		this.id = id;
		this.name = data.Nombre.content || 'Nombre desconocido';
		this.coordenates = data.Geolocalizacion.Coordenadas.content || "0,0";
		this.zone = data.Contacto.Zona.content || 'Localización desconocida';
		this.image = data.Visualizador.Slide.value || "Sin imagen";

		console.log("url", this.image);
	}

	popUp(){
		return `<div id="pop-up">
		<h3>${this.name}</h3><br>
		<img id="pop-up-img" src="${this.image}" alt="Imagen de ${this.name}"/>
		<button class="show-details" data-id="${this.id}">Ver detalles</button>
		</div>`;
	}


}

class Motorhomes extends Markers {
	constructor(data, id){
		super(data, id);
		this.services = data.Contacto.Servicios.content || 'No disponible';
		this.places = data.Contacto.Plazas.content || 'Desconocido';
		this.tipe = data.Contacto.Tipo.content || 'Pública';
		this.address = data.Contacto.Direccion.content || 'Sin dirección';
		this.maxstay = data.Contacto.EstanciaMaxima.content || 'Desconocido';
		this.price = data.Contacto.Precio.content || 'Gratuita';
	}

	displayCard(){
		const isFavorite = findInLocalStorageArray("favorites", this);
		const heartIcon = isFavorite ? "❤️" : "💙";

		return `
		<button class="button-favorites" data-id="${this.id}">
        ${heartIcon}
    	</button>
		<h3>${this.name}</h3>
		<img src="${this.image}" alt="Imagen de ${this.name}"/>
		<p><strong>Zona:</strong> ${this.zone}</p>
		<p><strong>Plazas:</strong> ${this.places}</p>
		<p><strong>Tipo:</strong> ${this.tipe}</p>
		<p><strong>Dirección:</strong> ${this.address}</p>
		<p><strong>Estancia máxima:</strong> ${this.maxstay}</p>
		<p><strong>Precio:</strong> ${this.price}</p>
		<p><strong>Servicios:</strong> ${this.services}</p>
		`
	}
	
}

export {Motorhomes, Markers}

