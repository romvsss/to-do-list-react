import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";

export const App = () => (
    <HashRouter>
        <Navigation />

        <Routes>
            <Route path="/tasks/:id" element={<TaskPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="/" element={<Navigate to="/tasks" />} />
        </Routes>
    </HashRouter>
);

export default App;