const express = require("express")
const router = express.Router()

const {
    getTodos,
    createTodo,
    updateTodo,
    updateStatus,
    deleteTodo,
    searchTodos
} = require("../controllers/todoController")

router.get("/search", searchTodos)
router.get("/", getTodos)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.patch("/:id/status", updateStatus)
router.delete("/:id", deleteTodo)

module.exports = router