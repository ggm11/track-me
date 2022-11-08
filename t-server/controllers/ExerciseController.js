const ExerciseService = require("../services/ExerciseService");

exports.getExercises = async (_req, res) => {
  try {
    const exercises = await ExerciseService.getExercises();
    res.json({ data: exercises, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createExercise = async (req, res) => {
  try {
    const exercise = await ExerciseService.createExercise(req.body);
    res.json({ data: exercise, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
