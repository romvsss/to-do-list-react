import './buttons.css'

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    return (
        <div className="taskList__buttons">
            <button className="markAllButton"
                disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            <button className="hideAllDoneButton">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} wszystkie ukończone
            </button>
        </div>
    )
}

export default Buttons 