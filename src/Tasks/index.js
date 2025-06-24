import './tasks.css'

const Tasks = (props) => (
    <>

        <ul className="taskList--ul">
            {props.tasks.map(task => (
                <li className={`taskList--li${task.done && props.hideDoneTasks ? " taskList--hiddenItems" : ""}`}>
                <button className="taskList--toggle">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`taskList--text${task.done ? " taskList--textDone" : ""}`}>
                    {task.content}
                </span>
                <button className="taskList--remove">
                    🗑️
                </button>
            </li>
            ))}
        </ul>
    </>
)

export default Tasks