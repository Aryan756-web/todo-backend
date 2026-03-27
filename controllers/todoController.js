const Todo = require("../models/Todo");

// get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

// create todo
exports.createTodo = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }

  try {
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

// update todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }

    todo.title = req.body.title || todo.title;
    todo.completed =
      req.body.completed !== undefined
        ? req.body.completed
        : todo.completed;

    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error updating" });
  }
};

// delete todo
exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting" });
  }
};

// search todos
exports.searchTodos = async (req, res) => {
  const query = req.query.q;

  try {
    const todos = await Todo.find({
      title: { $regex: query, $options: "i" },
    });

    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Search error" });
  }
};