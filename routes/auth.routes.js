const express = require("express");
const router = express.Router();
const {
	login,
	adminRegister,
	getAdminLoggedin,
	getMunicipalLoggedin,
} = require("../controllers/auth.controllers");
const { protect } = require("../middlewares/auth");
const MunicipalSchema = require("../models/muni");
const AdminAccounts = require("../models/AdminAccounts");

// Auth - Provincial Admin
router.post("/admin-login", login(AdminAccounts));
router.post("/create-admin", register);
router.get(
	"/get-admin",
	protect(AdminAccounts),
	getAdminLoggedin(AdminAccounts)
);

// Auth - Municipal Admin
router.post("/municipal-login", login(MunicipalSchema));
router.get(
	"/get-municipal",
	protect(MunicipalSchema),
	getMunicipalLoggedin(MunicipalSchema)
);

module.exports = router;
