import "./buttons.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button
                onClick={setAllDone}
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            <button
                onClick={toggleHideDone} className="buttons__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
        </div>
    );
};

export default Buttons;