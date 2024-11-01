// mongoose schema for admin
//

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

adminSchema.statics.add_admin = async function (
  firstName,
  lastName,
  email,
  password,
  isAdmin
) {
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  return await this.create({
    email,
    password: hash,
    firstName,
    lastName,
    isAdmin,
  });
};

// login
adminSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });

  if (!admin) {
    throw Error("Invalid email");
  }

  const auth = await bcrypt.compare(password, admin.password);

  if (!auth) {
    throw Error("Invalid password");
  }

  return admin;
};

// update admin
adminSchema.statics.update_admin = async function (
  firstName,
  lastName,
  email,
  isAdmin
) {
  const admin = await this.findOne({ email });

  if (!admin) {
    throw Error("Admin not found");
  }

  admin.firstName = firstName;
  admin.lastName = lastName;
  admin.email = email;
  admin.isAdmin = isAdmin;

  return await admin.save();
};

// change password
adminSchema.statics.change_password = async function (email, password) {
  const admin = await this.findOne({ email });

  if (!admin) {
    throw Error("Admin not found");
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  admin.password = hash;

  return await admin.save();
};

module.exports = mongoose.model("Admin", adminSchema);
