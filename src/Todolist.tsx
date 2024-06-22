
export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}


type PropsType = {
  title: string,
  // tasks1: Array<[id: number, title: string, isDone: boolean]>,     
  tasks: Array<TaskType>
}



export function Todolist(props: PropsType) {

  return <div>

    <h3>{props.title}</h3>
    <input type="text" />
    <button>+</button>

    <ul>
      <li><input type="checkbox" checked={props.tasks[0].isDone} /><span>{props.tasks[0].title}</span></li>
      <li><input type="checkbox" checked={props.tasks[1].isDone} /><span>{props.tasks[1].title}</span></li>
      <li><input type="checkbox" checked={props.tasks[2].isDone} /><span>{props.tasks[2].title}</span></li>
    </ul>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>

  </div>
}