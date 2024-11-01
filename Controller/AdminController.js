/**
 * write CRUD operations for admin
 *
 */

const AdminModel = require("../Models/AdminModel");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports.admin_signup = async (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;

  if (!firstName) {
    return res
      .status(400)
      .json({ message: "First name is required", status: 400 });
  }

  if (!lastName) {
    return res
      .status(400)
      .json({ message: "Last name is required", status: 400 });
  }

  if (!email) {
    return res.status(400).json({ message: "Email is required", status: 400 });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "Password is required", status: 400 });
  }

  if (!isAdmin) {
    return res
      .status(400)
      .json({ message: "isAdmin is required", status: 400 });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Email is invalid", status: 400 });
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password is weak", status: 400 });
  }

  try {
    const admin = await AdminModel.add_admin(
      firstName,
      lastName,
      email,
      password,
      isAdmin
    );

    admin.password = undefined;

    return res
      .status(201)
      .json({ admin, message: "Admin created", status: 201 });
  } catch (error) {
    return res.status(400).json({ message: error.message, status: 400 });
  }
};

module.exports.admin_login = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required", status: 400 });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "Password is required", status: 400 });
  }

  try {
    const admin = await AdminModel.login(email, password);

    admin.password = undefined;

    const token = jwt.sign(
      { id: admin._id, email: admin.email, is_admin: admin.isAdmin },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ admin, message: "Admin Logged In Successfully", status: 200 });
  } catch (error) {
    return res.status(400).json({ message: error.message, status: 400 });
  }
};

// update admin

module.exports.admin_update = async (req, res) => {
  const { firstName, lastName, email, isAdmin } = req.body;

  if (!firstName) {
    return res
      .status(400)
      .json({ message: "First name is required", status: 400 });
  }

  if (!lastName) {
    return res
      .status(400)
      .json({ message: "Last name is required", status: 400 });
  }

  if (!email) {
    return res.status(400).json({ message: "Email is required", status: 400 });
  }

  if (!isAdmin) {
    return res
      .status(400)
      .json({ message: "isAdmin is required", status: 400 });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Email is invalid", status: 400 });
  }

  try {
    const admin = await AdminModel.update_admin(
      firstName,
      lastName,
      email,
      isAdmin
    );

    return res
      .status(201)
      .json({ admin, message: "Admin updated", status: 201 });
  } catch (error) {
    return res.status(400).json({ message: error.message, status: 400 });
  }
};

// change password

module.exports.change_password = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required", status: 400 });
  }

  if (!password) {
    return res
      .status(400)
      .json({ message: "Password is required", status: 400 });
  }

  try {
    const admin = await AdminModel.change_password(email, password);

    return res
      .status(201)
      .json({ admin, message: "Password changed", status: 201 });
  } catch (error) {
    return res.status(400).json({ message: error.message, status: 400 });
  }
};

module.exports.admin_signout = async (req, res) => {
  await res.clearCookie("token");
  return res
    .status(200)
    .json({ message: "User signed out successfully", status: 200 });
};
