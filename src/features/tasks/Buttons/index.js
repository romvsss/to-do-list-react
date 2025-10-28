import { selectTasks, setAllDone, toggleHideDone } from "../tasksSlice";
import { Button, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks)

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                </>
            )}
        </StyledButtons>
    );
};

export default Buttons;