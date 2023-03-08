const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	const params = {
		titulo: "Pagina de entrada",
		valid: undefined
	};

	res.render("index.html", params);
});

router.post("/", (req, res) => {
	const params = {
		titulo: "Resultado",
		numeroContrato: req.body.numeroContrato || undefined,
		nombre: req.body.nombre || undefined,
		domicilio: req.body.domicilio || undefined,
		nivelEstudios: parseInt(req.body.nivelEstudios) || undefined,
		pagoDiarioBase: parseFloat(req.body.pagoDiarioBase) || undefined,
		diasTrabajados: parseInt(req.body.diasTrabajados) || undefined,
	};

	if (params.nivelEstudios === 1) {
		params.grado = "Licenciatura";
	} else if (params.nivelEstudios === 2) {
		params.grado = "Maestría";
	} else if (params.nivelEstudios === 3) {
		params.grado = "Doctorado";
	}

	res.render("result.html", params);
});

// La pagina del error va al final de los get/post
router.use((req, res, next) => {
	res.status(404).render("error.html", { titulo: "Pagina no encontrada" });
	// res.status(404).sendFile(__dirname + "/public/error.html");
});

module.exports = router;
