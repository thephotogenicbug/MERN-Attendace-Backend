const express = require("express");
const {
  getAttendaces,
  createAttendace,
  getAttendaceById,
} = require("../controllers/attendaceController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAttendaces);
router.route("/create").post(protect, createAttendace);
router.route('/:id').get(getAttendaceById)

module.exports = router;
