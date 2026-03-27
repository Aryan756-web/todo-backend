const express = require("express");
const router = express.Router();
const { searchTodos } = require("../controllers/todoController");

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/search", searchTodos);

module.exports = router;