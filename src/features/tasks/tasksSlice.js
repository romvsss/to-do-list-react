import { createSlice } from '@reduxjs/toolkit';
import { getTassksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTassksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId)
            state.tasks[index].done = !state.tasks[index].done
        },
        removeTask: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId)
            state.tasks.splice(index, 1)
        },
        setAllDone: (state) => {
            state.tasks.forEach(task => {
                task.done = true
            })
        },
        fetchExampleTasks: (state) => {
            state.status = "pending"
         },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.status="success"
        },
    }
})

// Selektory
export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTasksStatus = state => selectTasksState(state).status;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state)

    if(!query || query.trim() === ""){
        return tasks;
    }
    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}
export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;