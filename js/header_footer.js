
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = 
		`<button class="menu-burger" id="menu-burger-id">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</button>
		<nav>
			<ul class="nav-links">
				<li><a href="#home">Home</a></li>
				<li><a href="#map-section">Mapa</a></li>
				<li><a href="#favorites">Mis Areas</a></li>
			</ul>
		</nav>
			<div id="logo">
			<img id="logo-header" src="./assets/ac_icon.png" alt="Motorhome icon">
		</div>`;

	const menuToggle = document.querySelector('.menu-burger');
	const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle('show');
    });
});
