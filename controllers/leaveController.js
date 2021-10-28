const asyncHandler = require("express-async-handler");
const Leave = require("../models/leaveModel");

const createLeave = asyncHandler(async (req, res) => {
  const { name, from, to, leaveoption, reason } = req.body;

  if (!name || !from || !to || !leaveoption) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const leave = new Leave({
      user: req.user._id,
      name,
      from,
      to,
      leaveoption,
      reason,
    });
    const createdLeave = await leave.save();
    res.status(201).json(createdLeave);
  }
});

const getLeave = asyncHandler(async (req, res) => {
  const leaves = await Leave.find();
  res.json(leaves);
});

module.exports = { createLeave, getLeave };
