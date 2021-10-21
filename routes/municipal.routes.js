const express = require("express");
const router = express.Router();
const {
	createMunicipal,
	getMunicipals,
	updateMunicipal,
	deleteMunicipal,
} = require("../controllers/municipal.controllers");

// Municipality
router.post("/", createMunicipal);
router.get("/", getMunicipals);
router.put("/:id", updateMunicipal);
router.delete("/:id", deleteMunicipal);

module.exports = router;
