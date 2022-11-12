const UserModel = require("../models/User");

exports.findUser = async (email) => {
  return await UserModel.findOne({ email });
};
