const express = require("express");
const { getWalkins, createWalkin } = require("../controllers/walkinController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/get").get(protect, getWalkins);
router.route("/create").post(protect, createWalkin);

module.exports = router;
