
class Markers {
	constructor(data) {
		this.name = data.Nombre.content || 'Nombre desconocido';
		this.coordenates = data.Geolocalizacion.Coordenadas.content || "0,0";
		this.zone = data.Contacto.Zona.content || 'Localización desconocida';
		this.image = data.Visualizador.Slide.value || "Sin imagen";

		console.log("url", this.image);
	}

	popUp(){
		return `<h3>${this.name}</h3><br><img src="${this.image}" alt="Imagen de ${this.name}"/>`;
	}

}

class Motorhomes extends Markers {
	constructor(data){
		super(data);
		this.services = data.Contacto.Servicios.content || 'No disponible';
		this.places = data.Contacto.Plazas.content || 'Desconocido';
		this.tipe = data.Contacto.Tipo.content || 'Pública';
		this.address = data.Contacto.Direccion.content || 'Sin dirección';
		this.maxstay = data.Contacto.EstanciaMaxima.content || 'Desconocido';
		this.price = data.Contacto.Precio.content || 'Gratuita';
	}

}

export {Motorhomes, Markers}
