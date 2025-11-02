const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks => 
    localStorage.setItem(localStorageKey, JSON.stringify(tasks))

export const getTassksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];