const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
const ClimaticDataSchema = require("../models/ClimaticData");

// Create climatic data
exports.createClimaticData = asyncHandler(async (req, res, next) => {
	let doc = await ClimaticDataSchema.create(req.body);

	res.status(201).json({ success: true, data: doc });
});

// Get climatic data
exports.getClimaticDataByMunicipal = asyncHandler(async (req, res, next) => {
	let docs = await ClimaticDataSchema.find({
		status: true,
		municipality: req.params.municipality,
	});

	res.status(200).json({ success: true, data: docs });
});

// Update climatic data
exports.updateClimaticData = asyncHandler(async (req, res, next) => {
	let doc = await ClimaticDataSchema.findById(req.params.id);

	if (!doc) {
		return next(
			new ErrorResponse(
				`Climatic Data not found with this id ${req.params.id}`
			),
			404
		);
	}

	doc = await ClimaticDataSchema.findByIdAndUpdate(req.params.id, req.body, {
		runValidators: true,
		new: true,
	});

	doc = await ClimaticDataSchema.findById(req.params.id);

	res.status(200).json({ success: true, data: doc });
});

// Delete climatic data
exports.deleteClimaticData = asyncHandler(async (req, res, next) => {
	let doc = await ClimaticDataSchema.findById(req.params.id);

	if (!doc) {
		return next(
			new ErrorResponse(
				`Climatic not found with this id ${req.params.id}`
			),
			404
		);
	}

	doc = await ClimaticDataSchema.findByIdAndDelete(req.params.id);

	doc = await ClimaticDataSchema.findById(req.params.id);

	res.status(200).json({ success: true, data: doc });
});
