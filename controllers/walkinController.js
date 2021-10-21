const asyncHandler = require("express-async-handler");
const Walkin = require("../models/walkinModel");

const createWalkin = asyncHandler(async (req, res) => {
  const { studentname, telecounselorname, universityname, coursename } =
    req.body;

  if (!studentname || !telecounselorname || !universityname || !coursename) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const walkin = new Walkin({
      user: req.user._id,
      studentname,
      telecounselorname,
      universityname,
      coursename,
    });
    const createdWalkin = await walkin.save();
    res.status(201).json(createdWalkin);
  }
});

const getWalkins = asyncHandler(async (req,res) =>{
    const walkins = await Walkin.find({user: req.user._id});
    res.json(walkins)
})

module.exports = {getWalkins, createWalkin}