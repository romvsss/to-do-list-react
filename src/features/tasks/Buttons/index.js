import { selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone, setAllDone, toggleHideDone } from "../tasksSlice";
import { Button, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    //const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
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