const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CropsSchema = new Schema(
	{
		cropName: {
			type: String,
			required: true,
		},
		instruction: {
			type: String,
			required: true,
		},
		recommendedTemperature: {
			type: Number,
			required: true,
		},
		recommendedHumidity: {
			type: Number,
			required: true,
		},
		recommendedRainfall: {
			type: Number,
			required: true,
		},
		recommendedElevation: {
			type: Number,
			required: true,
		},
		recommendedSoilPh: {
			type: Number,
			required: true,
		},

		status: {
			type: Boolean,
			default: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

module.exports = Crop = mongoose.model("Crop", CropsSchema);
