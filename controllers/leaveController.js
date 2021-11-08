const asyncHandler = require("express-async-handler");
const Leave = require("../models/leaveModel");

const createLeave = asyncHandler(async (req, res) => {
  const { name, from, to, leaveoption, reason, currentstatus } = req.body;

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
      currentstatus,
    });
    const createdLeave = await leave.save();
    res.status(201).json(createdLeave);
  }
});

const getLeave = asyncHandler(async (req, res) => {
  const leaves = await Leave.find();
  res.json(leaves);
});

const getLeaveById = asyncHandler(async (req,res) =>{
  const leave = await Leave.findById({_id: req.params.id});
  res.json(leave)
})

const updateAdminLeave = asyncHandler(async (req,res) =>{
  const {currentstatus} = req.body
  const leave = await Leave.findById(req.params.id)

  if(leave){
    leave.currentstatus = currentstatus

    const updatedAdminLeave = await leave.save()
    res.json(updatedAdminLeave)
  }
  else{
    res.status(404)
    throw new Error("Leave data not found ")
  }
})

module.exports = { createLeave, getLeave, updateAdminLeave, getLeaveById };
