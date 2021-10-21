const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
const sendTokenResponse = require("../utils/sendTokenResponse");
const CropsSchema = require("../models/Crops");

// Create crop
exports.createCrop = asyncHandler(async (req, res, next) => {
	let doc = await CropsSchema.create(req.body);

	res.status(201).json({ success: true, data: doc });
});

// Get crops
exports.getCrops = asyncHandler(async (req, res, next) => {
	let docs = await CropsSchema.find({ status: true });

	res.status(200).json({ success: true, data: docs });
});

// Update crop
exports.updateCrop = asyncHandler(async (req, res, next) => {
	let doc = await CropsSchema.findById(req.body.id);

	if (!doc) {
		return next(
			new ErrorResponse(`Crop not found with this id ${req.body.id}`),
			404
		);
	}

	doc = await CropsSchema.findByIdAndUpdate(req.body.id, req.body, {
		runValidators: true,
		new: true,
	});

	doc = await CropsSchema.findById(req.body.id);

	res.status(200).json({ success: true, data: doc });
});

// Delete crop
exports.deleteCrop = asyncHandler(async (req, res, next) => {
	let doc = await CropsSchema.findById(req.body.id);

	if (!doc) {
		return next(
			new ErrorResponse(`Crop not found with this id ${req.body.id}`),
			404
		);
	}

	doc = await CropsSchema.findByIdAndDelete(req.body.id);

	doc = await CropsSchema.findById(req.body.id);

	res.status(200).json({ success: true, data: doc });
});
