const express = require("express");
const {
  getAttendaces,
  createAttendace,
  getAttendaceById,
  updateAttendace,
  updateAttendaceLunchEnd,
  updateAttendaceLogout,
  getAttendaceAdmin,
  updateAdminAttendance,
} = require("../controllers/attendaceController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/get").get(protect, getAttendaces);
router.route("/create").post(protect, createAttendace);
router.route("/get/:id").get(getAttendaceById).put(protect, updateAttendace);
router.route("/get/lunchend/:id").put(protect, updateAttendaceLunchEnd);
router.route("/get/logout/:id").put(protect, updateAttendaceLogout)
router.route('/admin').get(getAttendaceAdmin)
router.route("/admin/:id").get(getAttendaceById);
router.route('/:id').put(updateAdminAttendance)

module.exports = router;
