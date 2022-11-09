const mongoose = require("mongoose");

const uri = "mongodb://mongo:27017/mydb";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

module.exports = mongoose;
