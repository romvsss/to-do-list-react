import "./form.css";

const Form = () => (
    <form className="newTask__form">
        <input
            className="newTask__input"
            placeholder="Co jest do zrobienia?"
        />
        <button className="newTask__button">
            Dodaj zadanie
        </button>
    </form>
);

export default Form;
