const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then(exercises => res.status(200).json(exercises))
    .catch(err => res.status(400).json(err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });
  newExercise
    .save()
    .then(() => res.status(200).json("Exercise Added"))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted"))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise is updated"))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});
module.exports = router;
