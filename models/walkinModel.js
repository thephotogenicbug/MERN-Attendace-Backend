const mongoose = require('mongoose')

const walkinSchema = mongoose.Schema({
  studentname: {
    type: String,
    required: true,
  },
  telecounselorname: {
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

const Walkin = mongoose.model("Walkin", walkinSchema)

module.exports = Walkin