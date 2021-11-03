const asyncHandler = require("express-async-handler");
const Attendace = require("../models/attendanceModel");

const getAttendaces = asyncHandler(async (req, res) => {
  const attendaces = await Attendace.find({ user: req.user._id });
  res.json(attendaces);
});

const getAttendaceAdmin = asyncHandler(async (req,res) =>{
  const attendace = await Attendace.find()
  res.json(attendace)
})

const createAttendace = asyncHandler(async (req, res) => {
  const {
    name,
    mobile,
    unique,
    department,
    logintime,
    lunchstart,
    lunchend,
    logout,
  } = req.body;

  if (!name || !mobile || !department || !logintime) {
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
      lunchstart,
      lunchend,
      logout,
    });

    const createdAttendace = await attendace.save();

    res.status(201).json(createdAttendace);
  }
});

const getAttendaceById = asyncHandler(async (req, res) => {
  const attendace = await Attendace.findById({ _id: req.params.id });

  res.json(attendace);
});

const updateAttendace = asyncHandler(async (req, res) => {
  const { lunchstart, lunchend, logout } = req.body;

  const attendace = await Attendace.findById(req.params.id);

  if (attendace.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (attendace) {
    attendace.lunchstart = lunchstart;
    attendace.lunchend = lunchend;
    attendace.logout = logout;

    const updateAttendace = await attendace.save();
    res.json(updateAttendace);
  } else {
    res.status(404);
    throw new Error("Attendace not found");
  }
});

const updateAttendaceLunchEnd = asyncHandler(async (req, res) => {
  const { lunchend, logout } = req.body;

  const attendace = await Attendace.findById(req.params.id);

  if (attendace.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (attendace) {
    attendace.lunchend = lunchend;
    attendace.logout = logout;

    const updateAttendaceLunchEnd = await attendace.save();
    res.json(updateAttendaceLunchEnd);
  } else {
    res.status(404);
    throw new Error("Attendace not found");
  }
});
const updateAttendaceLogout = asyncHandler(async (req, res) => {
  const { logout } = req.body;

  const attendace = await Attendace.findById(req.params.id);

  if (attendace.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (attendace) {
    attendace.logout = logout;

    const updateAttendaceLogout = await attendace.save();
    res.json(updateAttendaceLogout);
  } else {
    res.status(404);
    throw new Error("Attendace not found");
  }
});

module.exports = {
  getAttendaces,
  createAttendace,
  getAttendaceById,
  updateAttendace,
  updateAttendaceLunchEnd,
  updateAttendaceLogout,
  getAttendaceAdmin,
};
