import React from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';

function App() {

  let tasks1: Array<TaskType> = [{ id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: false },
  { id: 3, title: "REACT", isDone: true },
  ]

  let tasks2: Array<TaskType> = [{ id: 1, title: "Terminator", isDone: true },
  { id: 2, title: "XXX", isDone: true },
  { id: 3, title: "Rici", isDone: true },
  ]


  return (

    <div className="App">
      <input type="checkbox" />
      <input type="date" />
      <input placeholder='it incubator' />
      <Todolist title={"What to learn"} tasks={tasks1} />
      <Todolist title={"Movies"} tasks={tasks2} />
    </div>
  );
}





export default App;
