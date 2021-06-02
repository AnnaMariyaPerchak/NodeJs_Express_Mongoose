const express = require("express");
const router = express.Router();

const {
    addTodo,
    getTodoById,
    getTodo,
    getTodos,
    removeTodo,
    updateTodo,
    markDone,
    markUndone
} = require("../controllers/Todo");

router.param("todoId",getTodoById);
router.get("/todos/",getTodos);
router.get("/todo/:todoId/",getTodo);
router.post("/todo/add/",addTodo);
router.put("/todo/:todoId/update",updateTodo);
router.put("/todo/:todoId/done",markDone);
router.put("/todo/:todoId/undone",markUndone);
router.delete("/todo/:todoId/remove",removeTodo);

module.exports = router;