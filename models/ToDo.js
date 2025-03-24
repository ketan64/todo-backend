const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timer: {
    type: Number, // Time in minutes
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDoSchema;
