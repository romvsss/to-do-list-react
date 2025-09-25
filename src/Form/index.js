import { useState } from "react";
import "./form.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();
        if (trimmedContent === "") {
            return;
        }
        addNewTask(trimmedContent);
        setNewTaskContent("");
    }

    return (
        <form className="newTask__form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="newTask__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="newTask__button">
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;
