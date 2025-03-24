const express = require("express");
const ToDo = require("../models/ToDo");

const router = express.Router();

// Get all To-Do items
router.get("/", async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const todo = await ToDo.findOne(id);
//     res.json(todo);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Add a new To-Do
// router.post("/", async (req, res) => {
//   try {
//     const newTodo = new ToDo(req.body);
//     const savedTodo = await newTodo.save();
//     res.json(savedTodo);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
