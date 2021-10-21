const express = require("express");
const router = express.Router();
const {
	createCrop,
	getCrops,
	updateCrop,
	deleteCrop,
} = require("../controllers/crops.controllers");

// Crops
router.post("/", createCrop);
router.get("/", getCrops);
router.put("/:id", updateCrop);
router.delete("/:id", deleteCrop);

module.exports = router;
