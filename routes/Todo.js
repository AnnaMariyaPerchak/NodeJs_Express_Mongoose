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
//The only param you pass to the endpoind is todoId so that you can just create get route for this operation and return updated todo item for example)
//router.get("/todo/:todoId/done",markDone);
router.put("/todo/:todoId/done",markDone);
router.put("/todo/:todoId/undone",markUndone);
// Since it is delete route, you can just use router.delete("/todo/:todoId",removeTodo);
router.delete("/todo/:todoId/remove",removeTodo);

module.exports = router;
