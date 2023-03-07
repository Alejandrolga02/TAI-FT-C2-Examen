window.onload = () => {
	let contenido = document.querySelector("#navbarContenido");
	let boton = document.querySelector("#navbarBoton");
	boton.addEventListener("click", () => {
		contenido.classList.toggle("hidden");
		contenido.classList.toggle("flex");
	});

	document.querySelector("#form").addEventListener("reset", (e) => {
		e.preventDefault();
		window.location.href = window.location.href;
	});
};
