const url = "../json/areas-de-autocaravanas.json";


console.log("hola");

const prueba = {
	"Nombre": {
		"title": "Nombre",
		"content": "Área autocaravanas de La Corredoria (Oviedo)"
	},
	"Visualizador": {
		"Slide": [
			{
				"SlideUrl": {"title": "Url"},
				"SlideTitulo": {
					"title": "Título",
					"content": "Área autocaravanas de La Corredoria (Oviedo/Uviéu)"
				},
				"title": "Slide",
				"value": "{\"classPK\":208761,\"groupId\":\"39908\",\"title\":\"area_Corredoria1.jpg\",\"type\":\"document\",\"uuid\":\"303f406b-0b9e-e1bf-df80-88909fdb8fa9\"}"
			},
			{
				"SlideUrl": {"title": "Url"},
				"SlideTitulo": {
					"title": "Título",
					"content": "Plaza Trascorrales en Oviedo/Uviéu"
				},
				"title": "Slide",
				"value": "{\"classPK\":208779,\"groupId\":\"39908\",\"title\":\"plaza-trascorrales-oviedo.jpg\",\"type\":\"document\",\"uuid\":\"b5c80112-3613-bdec-1891-62143b3ca7bc\"}"
			},
			{
				"SlideUrl": {"title": "Url"},
				"SlideTitulo": {
					"title": "Título",
					"content": "HUCA en Oviedo/Uviéu"
				},
				"title": "Slide",
				"value": "{\"classPK\":208773,\"groupId\":\"39908\",\"title\":\"huca.jpg\",\"type\":\"document\",\"uuid\":\"1fd00dca-885a-d1c2-c226-2576d48b6952\"}"
			},
			{
				"SlideUrl": {"title": "Url"},
				"SlideTitulo": {
					"title": "Título",
					"content": "Atardecer desde el Naranco en Oviedo/Uviéu"
				},
				"title": "Slide",
				"value": "{\"classPK\":208767,\"groupId\":\"39908\",\"title\":\"atardecer-desde-el-naranco.jpg\",\"type\":\"document\",\"uuid\":\"57da80e9-7faa-2a67-c2ca-15ac8136f37e\"}"
			}
		],
		"title": "Visualizador"
	},
	"Informacion": {
		"Descripcion": {"title": "Descripcion"},
		"title": "Informacion",
		"Titulo": {"title": "Título"}
	},
	"Geolocalizacion": {
		"Coordenadas": {
			"title": "Coordenadas",
			"content": "43.38278,-5.82417"
		},
		"title": "Geolocalización"
	}
};


var mymap = L.map('map').setView([43.38278, -5.82417], 11);
//tileLayer añade la capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

let iconMarker = L.icon({
	iconUrl: 'Designer.png',
	iconSize: [60, 60],
	iconAnchor: [30, 60]
})
var marker = L.marker([43.38278, -5.82417], {icon: iconMarker}).addTo(mymap);
marker.bindPopup("<b>Área autocaravanas de La Corredoria </b><br>Oviedo").openPopup();



/* import data from '../json/fiestas-de-interes-turistico.json' assert {type: 'json'};
console.log(data); */

fetch('./json/areas-de-autocaravanas.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error al cargar JSON:", error));