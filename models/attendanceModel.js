const mongoose = require("mongoose");
const attendanceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    unique: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    logintime: {
      type: String,
    },
    lunchstart: {
      type: String,
    },
    lunchend: {
      type: String,
    },
    logout: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Attendace = mongoose.model("Attendace", attendanceSchema);

module.exports = Attendace;
