const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 

mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  timer: Date,
});

const ToDo = mongoose.model("ToDo", todoSchema);

//add todo
app.post("/api/todos", async (req, res) => {
  try {
    const { task, description, timer } = req.body;
    const newToDo = new ToDo({ task, description, timer });
    await newToDo.save();
    res.status(201).json(newToDo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get all todos
app.get("/api/todos", async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get perticular todo
app.get("/api/todos/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const todo = await ToDo.findOne(id);
    res.status(200).json(todo);
  }
  catch(err) {
    res.status(400).json({message: err.message});
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});