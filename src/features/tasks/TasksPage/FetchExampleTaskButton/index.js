import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksStatus } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectTasksStatus);

    return (
        <Button 
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={status === "pending"}
        >
            {status === "pending"
                ? "Ładowanie..."
                : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};

export default FetchExampleTasksButton;