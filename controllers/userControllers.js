const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const userSignup = async (req, res) => {
  const user = new userSchema(req.body);
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const filepath = `/uploads/${req.file.filename}`;
    user.uploadSignedContract = filepath;
    user.tradeLicenseCopy = filepath;
    const saveData = await user.save();
    res.status(201).json({
      status: "Success",
      message: "User create successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { agencyEmail, password } = req.body;
  try {
    if (agencyEmail && password) {
      const login = await userSchema.findOne({ agencyEmail: agencyEmail });
      if (login != null) {
        const match = await bcrypt.compare(login.password, password);
        if (!match) {
          const token = jwt.sign(
            { userID: login._id },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
          );
          res.status(200).json({
            status: "Success",
            message: "User Login Successfully",
            token,
          });
        } else {
          res.status(403).json({
            status: "Failed",
            message: "password are invalid",
          });
        }
      } else {
        res.status(403).json({
          status: "Failed",
          message: "Email are incorrect",
        });
      }
    } else {
      res.status(403).json({
        status: "Failed",
        message: "Email and Password are invalid",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = {
  userSignup,
  userLogin,
};
