const express = require("express");
const cors = require("cors");
const exerciseRoutes = require("./routes/ExerciseRoutes");
require("./database/db.config");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/exercises", exerciseRoutes);

const PORT = 8080;
const HOST = "0.0.0.0";

const log = () => console.log(`Server is running on port ${PORT}`);

app.listen(PORT, HOST, log);
