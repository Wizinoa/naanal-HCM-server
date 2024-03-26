const ADMINMODEL = require("../model/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create_admin = async (req, res) => {
  const { first_name, last_name, phone, email, password, department } =
    req.body;

  const existingAdmin = await ADMINMODEL.findOne({ phone }).exec();

  if (existingAdmin) {
    if (existingAdmin.phone === phone) {
      // Employee already exists
      return res.status(200).json({ message: "Phone number already exists" });
    } else if (existingAdmin.email === email) {
      return res.status(200).json({ message: "Email already exists" });
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const postData = await ADMINMODEL.create({
      first_name,
      last_name,
      phone,
      email,
      password: hash,
      department,
    });
    res.status(200).json({ message: "Admin created successfully", postData });
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error", error });
  }
};

const get_admin = async (req, res) => {
  try {
    const getData = await ADMINMODEL.find();
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ message: "Admin Not Found" });
  }
};

const delete_admin = async (req, res) => {
  try {
    const deleteData = await ADMINMODEL.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Admin Deleted Successfully", deleteData });
  } catch (error) {
    res.status(400).json({ message: "Can't delete admin" });
  }
};

const update_admin = async (req, res) => {
  try {
    const updateData = await ADMINMODEL.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Admin Updated Successfully", updateData });
  } catch (error) {
    res.status(400).json({ message: "Can't update admin" });
  }
};

const getId_admin = async (req, res) => {
  try {
    const getById = await ADMINMODEL.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(400).json({ message: "Can't find admin" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  await ADMINMODEL.findOne({
    $or: [{ email: email }, { phone: email }],
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, responce) => {
        if (error) {
          res.status(400).json({ message: "Invalid Credentials" });
        } else if (responce) {
          const token = jwt.sign({ user }, "jwt-key", { expiresIn: "1d" });
          res.status(200).cookie("token", token);
          res
            .status(200)
            .json({ message: `Welcome ${user.first_name} ❤`, user, role : "admin" });
        } else {
          res.status(400).json({ message: "Check your password" });
        }
      });
    } else {
      res.status(400).json({ message: "User Not Found" });
    }
  });
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(400).json({ message: "Token is missing" });
  } else {
    jwt.verify(token, "jwt-key", (err, decode) => {
      console.log(decode.user.user_type);
      if (err) {
        res.status(400).json({ message: "Error with token" });
      } else {
        if (decode.user.user_type == "Admin") {
          next();
        } else if (decode.user.user_type == "Employee") {
          next();
        } else if (decode.user.user_type == "Superadmin") {
          next();
        } else {
          res.status(400).json({ message: "Your have an any role" });
        }
      }
    });
  }
};

const dashboard = (req, res) => {
  return res.status(200).json({ message: "Success" });
};

const urlProductor = (req, res) => {
  res.json({ message: "This is a public route accessible without a token" });
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout" });
  } catch (err) {
    res.status(400).json({ message: "Can't logout" });
  }
};

// Employee Token API
const getToken = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, "jwt-key");
    return res.status(200).json({ decoded });
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = {
  create_admin,
  get_admin,
  getId_admin,
  update_admin,
  delete_admin,
  logout,
  getToken,
  login,
  urlProductor,
  dashboard,
  verifyUser,
};
