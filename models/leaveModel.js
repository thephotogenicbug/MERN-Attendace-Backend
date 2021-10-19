const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    unique: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
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
const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
