const {
    getAllTask,
    getOneTask,
    deleteTask,
    createTask,
    updateTask,
  } = require('./task.service')
  
  async function handlerAllTask(req, res) {
    const tasks = await getAllTask();
    res.json(tasks);
  }
  
  async function handlerOneTask(req, res) {
    const id = req.params.id;
    const task = await getOneTask(id);
  
    if (!task) {
      res.status(404).json({ message: `Task not found with id: ${id}` });
    } else {
      res.json(task);
    }
  }
  
  async function handlerDeleteTask(req, res) {
    const id = req.params.id;
    const task = await deleteTask(id);
  
    if (!task) {
      res.status(404).json({ message: `Task not found with id: ${id}` });
    } else {
      res.json(task);
    }
  }
  
  async function handlerCreateTask(req, res) {
    const newTask = req.body;
  
    if (!newTask.title) {
     await res.status(400).json({ message: 'Title is required' });
    }
  
    if (!newTask.description) {
     await res.status(400).json({ message: 'Description is required' });
    }
  
    const task = await createTask(newTask);
  
    return res.status(201).json(task);
  }
  
  async function handlerUpdateTask(req, res) {
    const id = req.params.id;
    const { body } = req;
  
    const task = await updateTask(id, body);
  
    if (!task) {
      res.status(404).json({ message: `Task not found with id: ${id}` });
    } else {
      res.json(task);
    }
  }
  
  module.exports = {
    handlerAllTask,
    handlerOneTask,
    handlerDeleteTask,
    handlerCreateTask,
    handlerUpdateTask,
  }