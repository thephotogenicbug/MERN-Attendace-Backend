const asyncHandler = require("express-async-handler");
const Admission = require("../models/admissionModel");

const getAdmission = asyncHandler(async (req, res) => {
  const admissions = await Admission.find({ user: req.user._id });
  res.json(admissions);
});

const createAdmission = asyncHandler(async (req, res) => {
  const {
    studentname,
    admissionnumber,
    telecounselorname,
    unique,
    universityname,
    coursename,
  } = req.body;

  if (
    !studentname ||
    !admissionnumber ||
    !telecounselorname ||
    !unique ||
    !universityname ||
    !coursename
  ) {
    res.status(400);
    throw new Error("Please fill all the details");
  } else {
    const admission = new Admission({
      user: req.user._id,
      studentname,
      admissionnumber,
      telecounselorname,
      unique,
      universityname,
      coursename,
    });

    const createdAdmission = await admission.save();
    res.status(201).json(createdAdmission);
  }
});

module.exports = { createAdmission, getAdmission };
