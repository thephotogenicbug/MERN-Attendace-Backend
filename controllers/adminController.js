const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const adminExist = await Admin.findOne({ email });

  if (adminExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const admin = await Admin.create({
    name,
    email,
    password,
    pic,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      pic: admin.pic,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
});

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      pic: admin.pic,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or password");
  }
});

module.exports = { registerAdmin, authAdmin };
