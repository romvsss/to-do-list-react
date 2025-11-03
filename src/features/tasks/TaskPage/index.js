import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    if (!task) {
        return (
            <Main>
                <Section
                    title="Nie znaleziono zadania!"
                    body="Wróć do listy zadań i spróbuj ponownie."
                />
            </Main>
        );
    }

    return (
        <Main>
            <Section
                title={task.content}
                body={
                    <>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </>
                }
            />
        </Main>
    );
};

export default TaskPage;