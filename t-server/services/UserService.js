const UserModel = require("../models/User");

exports.createUser = async (user) => {
  return await UserModel.create(user);
};
