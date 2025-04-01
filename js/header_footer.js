import { showSection, changeHeaderColor } from "./functions.js";

function toggleNav() {
	let nav = document.querySelector(".nav-links");
	nav.classList.toggle("active");
}

const burger_button = document.getElementById("menu-burger-id");
burger_button.addEventListener("click", (e) => {
	toggleNav();
})

const map_burgerMenu = document.getElementById("map_menu");
map_burgerMenu.addEventListener("click", (e) => {
	showSection("map-section");
	changeHeaderColor("map-section");
});

const fav_burgerMenu = document.getElementById("favorites_menu");
fav_burgerMenu.addEventListener("click", (e) => {
	showSection("favorites");
	changeHeaderColor("favorites");
	// TODO localstorage Tsundoku index.js
});

const home_burgerMenu = document.getElementById("home_menu");
home_burgerMenu.addEventListener("click", (e) => {
	showSection("home");
	changeHeaderColor("home")
})