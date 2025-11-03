import Section from '../../../common/Section'
import Main from '../../../common/Main'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {

    const { id } = useParams()
    const task = useSelector(state => getTaskById(state, id))

    return (
        <Main>
            <header>
                <h1>Szczegóły zadania</h1>
            </header>

            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={
                    <>
                        <strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}
                    </>
                } />

        </Main>
    );
}

export default TaskPage;
