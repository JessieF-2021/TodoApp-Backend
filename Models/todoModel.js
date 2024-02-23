import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    chore: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
