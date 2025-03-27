
class Markers {
	constructor(data) {
		this.name = data.Nombre.content;
		this.coordenates = data.Geolocalizacion.content;
		this.zone = data.Contacto.zona.content;
		this.image = data.Visualizador.Slide;
	}

	popUp(){

	}

}

class Motorhomes extends Markers {
	constructor(data){
		super(data);
		this.services = data.Contacto.Servicios.content;
		this.places = data.Contacto.Plazas.content;
		this.tipe = data.Contacto.Tipo.content || "Pública";
		this.address = data.Contacto.Direccion.content;
	}
}

