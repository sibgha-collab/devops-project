const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/devopsdb')
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const TaskSchema = new mongoose.Schema({
  title: String,
  done: Boolean
});

const Task = mongoose.model('Task', TaskSchema);

app.get('/', (req, res) => {
  res.json({ message: 'DevOps Project API Running!' });
});

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
