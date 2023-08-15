const Todo = require("../model/Todo");

const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    res.status(200).json(newTodo);
  } catch (error) {
    return res.json(error.message);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    return res.json(error.message);
  }
};

const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );

    todo.save();

    res.status(200).json(todo);
  } catch (error) {
    return res.json(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const todo = await Todo.findById(req.params.id);

    res.status(200).json(todo);
  } catch (error) {
    return res.json(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json(todo);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
};
