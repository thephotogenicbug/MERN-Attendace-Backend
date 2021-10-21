const express = require("express");
const {
  createAdmission,
  getAdmission,
} = require("../controllers/admissionController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/create").post(protect, createAdmission);
router.route("/get").get(protect, getAdmission);
module.exports = router;
