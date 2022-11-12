const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database/db.config");
const exerciseRoutes = require("./routes/ExerciseRoutes");
const userRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/AuthRoutes");
const { api, AUTH, USERS, EXERCISES } = require("./constants/api");
const { PORT, HOST } = require("./constants/server");

const app = express();
app.use(cors());
app.use(express.json());

app.use(`${api}${AUTH}`, authRoutes);
app.use(`${api}${USERS}`, userRoutes);
app.use(`${api}${EXERCISES}`, exerciseRoutes);

const log = () => console.log(`Server is running on port ${PORT}`);

app.listen(PORT, HOST, log);
