const Todo = require("../models/Todo");

// get all todos
const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// create todo
const createTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const todo = new Todo({
    title: title,
    completed: false,
  });

  const savedTodo = await todo.save();
  res.status(201).json(savedTodo);
};

// update full todo
const updateTodo = async (req, res) => {
  const { title, completed } = req.body;

  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) {
    todo.title = title;
  }

  if (completed !== undefined) {
    todo.completed = completed;
  }

  const updatedTodo = await todo.save();
  res.json(updatedTodo);
};

// update only status
const updateStatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.completed = req.body.completed;
  const updatedTodo = await todo.save();

  res.json(updatedTodo);
};

// delete todo
const deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  await todo.deleteOne();

  res.json({ message: "Todo deleted" });
};

// search todo
const searchTodos = async (req, res) => {
  const searchText = req.query.q;

  if (!searchText || searchText.trim() === "") {
    return res.status(400).json({
      message: "Please enter search text",
    });
  }

  const todos = await Todo.find({
    title: { $regex: searchText, $options: "i" },
  });

  res.json(todos);
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  updateStatus,
  deleteTodo,
  searchTodos,
};