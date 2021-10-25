const express = require("express");
const { createLeave, getLeave } = require("../controllers/leaveController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/create").post(protect, createLeave);
router.route("/get").get( getLeave);

module.exports = router;
