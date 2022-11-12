const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const UserService = require("../services/UserService");
const UserModel = require("../models/User");

exports.postUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password: pass, username } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const password = await bcryptjs.hash(pass, salt);

    const newUser = {
      email,
      password,
      username,
    };

    const createdUser = await UserService.createUser(newUser);
    res.json({ data: createdUser, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
