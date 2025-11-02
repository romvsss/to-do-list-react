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
        fetchExampleTasks: () => {},
        setTasks: (state, {payload: tasks}) => {
            state.tasks = tasks;
        },
    }
})

// Selektory
export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;