import { useDispatch, useSelector } from 'react-redux';
import { Button, Content, Item, List, StyledLink} from './styled';
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from '../../tasksSlice';
import { useQueryParameter } from '../../useQueryParameter';

const TaskList = () => {

    const [query] = useQueryParameter("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        toggle
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        onClick={() => dispatch(removeTask(task.id))}
                        remove
                    >
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;