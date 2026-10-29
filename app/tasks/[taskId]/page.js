import {taskContext} from "./taskContext"
import {useContext} from "react"
const {deleteTask, tasks, toggleTask} = useContext(taskContext)
export default async function TaskDetailPage({ params, task }) {
  const { taskId } = await params;

  return (
    <div className="container">
      <div>
        <h3>{task.title}</h3>
        <p>{task.text}</p>
        <span>{task.level}</span>
        <span>{task.course}</span>
        <span>{task.date}</span>
        <span>{task.status}</span>
      </div>
      <button onClick={()=>toggleTask(task.id)}> {task.completed ? "PENDNG" : "COMPLETED"}</button>
      <button onClick={()=>deleteTask(task.id)}></button>
      <h1 className="page-title">Task Detail: {taskId}</h1>
      {/* TODO: Connect to TaskContext, display task info, toggle status, and delete */}
    </div>
  );
}
 