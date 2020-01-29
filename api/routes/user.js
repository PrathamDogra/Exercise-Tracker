const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(400).json(err));
});
router.post("/add", (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
  newUser
    .save()
    .then(() => res.json("User added"))
    .catch(err => res.status(400).json(err));
});
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      req.json("User deleted");
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
