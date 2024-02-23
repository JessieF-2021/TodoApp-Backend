// import asyncHandler from "express-async-handler";

import Todo from "../Models/todoModel.js";

// add a todo
export const addTodo = async (req, res) => {
  try {
    const { chore } = req.body;

    const todo = new Todo({ chore });

    const result = await todo.save();

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// fetch all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (todos) {
      res.status(200).send(todos);
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
// fetch todo by id
export const getTodo = async (req, res) => {
  try {
    const { id } = req.body;
    const todo = await Todo.findOne({ id });
    res.status(200).send(todo);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// update todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todoUpdate = await todoModel.findOne({ _id: id });
    const updated = await todoModel.findByIdAndUpdate(
      { _id: id },
      { completed: !todoUpdate.completed },
      { returnDocument: "after" }
    );
    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
  }
};

// delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params; 
    const todo = await Todo.findByIdAndDelete(id);

    if (todo) {
      res.status(200).json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
