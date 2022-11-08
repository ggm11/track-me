const ExerciseModel = require("../models/Exercise");

exports.getExercises = async () => {
  return await ExerciseModel.find();
};

exports.createExercise = async (exercise) => {
  return await ExerciseModel.create(exercise);
};
