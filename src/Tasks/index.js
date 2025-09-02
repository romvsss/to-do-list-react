import './tasks.css';

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="task-list">
        {tasks.map(task => (
            <li 
                key={task.id}
                className={`task-list__item${task.done && hideDoneTasks ? " task-list__item--hidden" : ""}`}
            >
                <button className="task-list__button task-list__button--toggle">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`task-list__content${task.done ? " task-list__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="task-list__button task-list__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;