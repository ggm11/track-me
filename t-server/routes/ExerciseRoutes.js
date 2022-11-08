const { Router } = require("express");
const {
  getExercises,
  createExercise,
} = require("../controllers/ExerciseController");

const router = Router();

router.route("/").get(getExercises).post(createExercise);

module.exports = router;
