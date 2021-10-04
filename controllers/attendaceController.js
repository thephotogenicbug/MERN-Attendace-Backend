const asyncHandler = require("express-async-handler");
const Attendace = require("../models/attendanceModel");

const getAttendaces = asyncHandler(async (req, res) => {
  const attendaces = await Attendace.find({ user: req.user._id });
  res.json(attendaces);
});

const createAttendace = asyncHandler(async (req, res) => {
  const { name, mobile, unique, department, logintime } = req.body;

  if (!name || !mobile || !unique || !department || !logintime) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const attendace = new Attendace({
      user: req.user._id,
      name,
      mobile,
      unique,
      department,
      logintime,
    });

    const createdAttendace = await attendace.save();

    res.status(201).json(createdAttendace);
  }
});

const getAttendaceById = asyncHandler(async (req, res) => {
  const attendace = await Attendace.findById(req.params.id);

  if (attendace) {
    res.json(attendace);
  } else {
    res.status(400).json({ message: "Attendace data not found" });
  }
});

module.exports = { getAttendaces, createAttendace, getAttendaceById };
