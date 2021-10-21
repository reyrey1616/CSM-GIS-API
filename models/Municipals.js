const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const MunicipalSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			match: [
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
				"Please add a valid email",
			],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			select: false,
		},
		fname: {
			type: String,
			required: [true, "Firstname is required!"],
			trim: true,
		},
		mname: {
			type: String,
			required: [true, "Middlename is required!"],
			trim: true,
		},
		lname: {
			type: String,
			required: [true, "Lastname is required!"],
			trim: true,
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
		},
		phoneNumber: String,
		municipality: {
			type: String,
			required: [true, "Municipality name is required!"],
			trim: true,
		},
		elevation: {
			type: Number,
			required: true,
		},
		soilPh: {
			type: Number,
			required: true,
		},
		lat: string,
		lng: string,

		status: {
			type: Boolean,
			default: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		role: {
			type: String,
			default: "municipal",
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Encrypt using bcrypt
MunicipalSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
MunicipalSchema.methods.getSignedJwtToken = function () {
	return JWT.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE,
	});
};

// Match user entered password to hash password in database
MunicipalSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = Municipal = mongoose.model("Municipal", MunicipalSchema);
