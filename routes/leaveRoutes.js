const express = require("express");
const { createLeave } = require("../controllers/leaveController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/create").post(protect, createLeave);

module.exports = router;
