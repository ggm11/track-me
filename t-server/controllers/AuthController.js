const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { findUser } = require("../services/UserService");

exports.userAuthentication = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await findUser(email);
    if (!user) {
      return res.status(400).json({ msg: `The user doesn't exists` });
    }
    const isCorrectPassword = await bcryptjs.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).json({ msg: "Incorrect password" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
