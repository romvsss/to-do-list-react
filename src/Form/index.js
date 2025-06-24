import "./form.css"

const Form = (props) => (
    <>
        <form className="newTask--form">
            <input className="newTask--input" placeholder="Co jest do zrobienia?" />
            <button className="newTask--button">Dodaj zadanie</button>
        </form>
    </>
)

export default Form 