const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    createIndexes: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  registry: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
