
export type TaskType = {
  id: number,
  title: string,
  isDone: boolean
}


type PropsType = {
  title: string,
  // tasks1: Array<[id: number, title: string, isDone: boolean]>,     
  tasks: Array<TaskType>
  removeTask: Function
}






export function Todolist(props: PropsType) {

  return <div>

    <h3 className="color">{props.title}</h3>
    <input type="text" />
    <button>+</button>
    <div>
      <ul>
        {
          props.tasks.map(t => <li><input type="checkbox" checked={t.isDone} />
            <span>{t.title}</span>
            <button onClick={() => { props.removeTask(t.id) }}>x</button>
          </li>
          )
        }
      </ul>

    </div>

    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </div >
} 
