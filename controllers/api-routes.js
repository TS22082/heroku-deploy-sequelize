const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos from db
router.get("/", (req, res) => {
  db.Todo.findAll().then(allTodos => {
    res.json(allTodos);
  });
});

// post a new todo
router.post("/", (req, res) => {
  db.Todo.create({
    text: req.body.text,
    complete: req.body.complete
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    });
});

// delete todo by id
router.delete("/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.send(`success with message: ${result}`);
  });
});

module.exports = router;
