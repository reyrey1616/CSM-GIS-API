const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../middlewares/asyncHandler");
const sendTokenResponse = require("../utils/sendTokenResponse");
const MunicipalSchema = require("../models/Municipals");

// Create municipal
exports.createMunicipal = asyncHandler(async (req, res, next) => {
	let doc = await MunicipalSchema.create(req.body);

	res.status(201).json({ success: true, data: doc });
});

// Get Municipals
exports.getMunicipals = asyncHandler(async (req, res, next) => {
	let docs = await MunicipalSchema.find({ status: true });

	res.status(200).json({ success: true, data: docs });
});

// Update Municipal
exports.updateMunicipal = asyncHandler(async (req, res, next) => {
	let municipal = await MunicipalSchema.findById(req.params.id);

	if (!municipal) {
		return next(
			new ErrorResponse(
				`Municipal not found with this id ${req.params.id}`
			),
			404
		);
	}

	municipal = await MunicipalSchema.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			runValidators: true,
			new: true,
		}
	);

	municipal = await MunicipalSchema.findById(req.params.id);

	res.status(200).json({ success: true, data: municipal });
});

// Delete crop
exports.deleteMunicipal = asyncHandler(async (req, res, next) => {
	let municipal = await MunicipalSchema.findById(req.params.id);

	if (!municipal) {
		return next(
			new ErrorResponse(
				`Municipal not found with this id ${req.params._id}`
			),
			404
		);
	}

	municipal = await MunicipalSchema.findByIdAndDelete(req.user._id);

	municipal = await MunicipalSchema.findById(req.user.id);

	res.status(200).json({ success: true, data: municipal });
});
