const mongoose = require("mongoose");

const admissionSchema = mongoose.Schema(
  {
    studentname: {
      type: String,
      required: true,
    },
    admissionnumber: {
      type: String,
      required: true,
    },
    telecounselorname: {
      type: String,
      required: true,
    },
    unique: {
      type: String,
      required: true,
    },
    universityname: {
      type: String,
      required: true,
    },
    coursename: {
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
const Admission = mongoose.model("Admission", admissionSchema);

model.exports = Admission;
