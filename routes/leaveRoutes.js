const express = require("express");
const {
  createLeave,
  getLeave,
  updateAdminLeave,
  getLeaveById,
} = require("../controllers/leaveController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/create").post(protect, createLeave);
router.route("/get").get(getLeave);
router.route("/get/:id").get(getLeaveById);
router.route("/:id").put(updateAdminLeave);

module.exports = router;
