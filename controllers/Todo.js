const Todo = require("../models/Todo");

exports.getTodoById = (req, res, next, todoId) => {
  Todo.findById(todoId).exec((err, todo) => {
    if (err || !todo) {
      return res.status(404).json({
        error: "404 todo not found",
      });
    }
    req.todo = todo;
    next();
  });
};

exports.getTodos = (req, res) => {
  Todo.find()
    .exec((err, todos) => {
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding todos",
        });
      }
      res.json(todos);
    });
};

exports.getTodo = (req, res) => {
  return res.json(req.todo);
};

exports.addTodo = (req, res) => {
  const todo = new Todo(req.body);
  todo.done=false;
  todo.save((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    res.json({ task });
  });
};

exports.updateTodo = (req, res) => {
  const todo = req.todo;
  todo.task = req.body.task;
  todo.done = req.body.done;
  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while updating",
      });
    }
    res.json(t);
  });
};

exports.removeTodo = (req, res) => {
  const todo = req.todo;
  todo.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting todo",
      });
    }
    res.json({
      task_deleted: task,
      message: "Todo deleted successfully!",
    });
  });
};

exports.markDone=(req,res)=>{
  const todo = req.todo;
  todo.task = req.body.task;
  todo.done = true;
  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while changing done field to 'true'",
      });
    }
    res.json(t);
  });
};

exports.markUndone=(req,res)=>{
  const todo = req.todo;
  todo.task = req.body.task;
  todo.done = false;
  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while changing done field to 'false'",
      });
    }
    res.json(t);
  });
};














