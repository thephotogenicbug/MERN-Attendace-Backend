const asyncHandler = require("express-async-handler");
const Leave = require("../models/leaveModel");

const createLeave = asyncHandler(async (req, res) => {
  const { name, unique, from, to } = req.body;

  if (!name || !unique || !from || !to) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const leave = new Leave({
      user: req.user._id,
      name,
      unique,
      from,
      to,
    });
    const createdLeave = await leave.save();
    res.status(201).json(createdLeave);
  }
});

module.exports = { createLeave };
