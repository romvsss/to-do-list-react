import './tasks.css';

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {

    return (<ul className="task-list">
        {tasks.map(task => (
            <li 
                key={task.id}
                className={`task-list__item${task.done && hideDone ? " task-list__item--hidden" : ""}`}
            >
                <button onClick={() => toggleTaskDone(task.id) } className="task-list__button task-list__button--toggle">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`task-list__content${task.done ? " task-list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => removeTask(task.id)} className="task-list__button task-list__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);
};

export default Tasks;