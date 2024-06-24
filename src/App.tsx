import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';

function App() {

  let initTasks: Array<TaskType> = [{ id: 1, title: "CSS", isDone: true },
  { id: 1, title: "JS", isDone: false },
  { id: 2, title: "REACT", isDone: true },
  { id: 3, title: "REACT", isDone: true },
  { id: 4, title: "REDUX", isDone: false },
  ]


  const [tasks, setTask] = useState(initTasks)

  function removeTask(id: number) {
    let filteredTask = tasks.filter(t => t.id !== id)
    setTask((filteredTask))
  }


  return (

    <div className="App">
      <input type="checkbox" />
      <input type="date" />
      <input placeholder='it incubator' />
      <Todolist title={"What to learn"} tasks={tasks} removeTask={removeTask} />
    </div>
  );
}





export default App;
