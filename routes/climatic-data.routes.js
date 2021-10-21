const express = require("express");
const router = express.Router();
const {
	createClimaticData,
	getClimaticDataByMunicipal,
	updateClimaticData,
	deleteClimatic,
} = require("../controllers/climatic-data.controllers");

// Climatic Data
router.post("/", createClimaticData);
router.get("/:municipality", getClimaticDataByMunicipal);
router.put("/:id", updateClimaticData);
router.delete("/:id", deleteClimatic);

module.exports = router;
