import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('http://51.21.144.127:4000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err))
  }, [])

  const addTask = () => {
    fetch('http://51.21.144.127:4000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, done: false })
    })
      .then(res => res.json())
      .then(task => setTasks([...tasks, task]))
    setTitle('')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>DevOps Task Manager</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task..."
        style={{ padding: '8px', width: '300px' }}
      />
      <button onClick={addTask} style={{ padding: '8px 16px', marginLeft: '8px' }}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, i) => <li key={i}>{task.title}</li>)}
      </ul>
    </div>
  )
}

export default App
