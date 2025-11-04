import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Main from "../../../common/Main";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { Details, Wrapper } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    if (!task) {
        return (
            <Main>
                <Section
                    title="Nie znaleziono zadania 😥"
                    body={
                        <Wrapper>
                            Wróć do listy zadań i spróbuj ponownie.
                        </Wrapper>
                    }
                />
            </Main>

        );
    }

    return (
        <Main>
            <header>
                <h1>Szczegóły zadania</h1>
            </header>
            <Section
                title={task.content}
                body={
                    <Wrapper>
                        <Details>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </Details>
                    </Wrapper>
                }
            />
        </Main>
    );
};

export default TaskPage;