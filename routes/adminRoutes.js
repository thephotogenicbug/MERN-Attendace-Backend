const express = require("express");
const { registerAdmin, authAdmin } = require("../controllers/adminController");

const router = express.Router();

router.route("/").post(registerAdmin);
router.route("/login").post(authAdmin);

module.exports = router;
