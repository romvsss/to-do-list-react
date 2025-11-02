import { useDispatch, useSelector } from 'react-redux';
import { Button, Content, Item, List } from './styled';
import { selectTasksState, toggleTaskDone, removeTask } from '../tasksSlice';

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                        {task.content}
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