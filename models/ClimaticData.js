const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ClimaticDataSchema = new Schema(
	{
		municipality: {
			type: mongoose.Schema.ObjectId,
			ref: "Municipal",
		},
		temperature: Number,
		humidity: Number,
		rainfall: Number,
		dateFrom: {
			type: Date,
			required: true,
		},
		dateTo: {
			type: Date,
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

module.exports = ClimaticData = mongoose.model(
	"ClimaticData",
	ClimaticDataSchema
);
