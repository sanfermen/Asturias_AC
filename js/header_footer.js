import { showSection, changeHeaderColor } from "./functions.js";

function toggleNav() {
	let nav = document.querySelector(".nav-links");
	nav.classList.toggle("active");
}

// Función para cerrar el menú
function closeNav() {
	let nav = document.querySelector(".nav-links");
	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
	}
}

// Añadir función al menú burger
const burger_button = document.getElementById("menu-burger-id");
burger_button.addEventListener("click", (e) => {
	toggleNav();
})

// Funciones para cambiar de sección al pinchar en menú burger, cambiar el color según la sección y cerrar el menú
const map_burgerMenu = document.getElementById("map_menu");
map_burgerMenu.addEventListener("click", (e) => {
	showSection("map-section");
	changeHeaderColor("map-section");
	closeNav();
});

const fav_burgerMenu = document.getElementById("favorites_menu");
fav_burgerMenu.addEventListener("click", (e) => {
	showSection("favorites");
	changeHeaderColor("favorites");
	closeNav();
});

const home_burgerMenu = document.getElementById("home_menu");
home_burgerMenu.addEventListener("click", (e) => {
	showSection("home");
	changeHeaderColor("home");
	closeNav();
})