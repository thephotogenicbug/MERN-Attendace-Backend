const express = require("express");
const {
  getAttendaces,
  createAttendace,
  getAttendaceById,
  updateAttendace,
  updateAttendaceLunchEnd,
} = require("../controllers/attendaceController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/get").get(protect, getAttendaces);
router.route("/create").post(protect, createAttendace);
router.route("/get/:id").get(getAttendaceById).put(protect, updateAttendace);
router.route("/get/lunchend/:id").put(protect, updateAttendaceLunchEnd);

module.exports = router;
