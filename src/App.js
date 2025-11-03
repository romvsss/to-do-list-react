import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage"
import { HashRouter, Link, Routes, Route, Navigate } from "react-router-dom"
import TaskPage from "./features/tasks/TaskPage/index";

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">
                        Zadania
                    </Link>
                </li>
                <li>
                    <Link to="/autor">
                        O autorze
                    </Link>
                </li>
            </ul>
            <Routes>
                <Route path="/zadania/:id" element={<TaskPage />} />
                <Route path="/zadania" element={<TasksPage />} />
                <Route path="/autor" element={<AuthorPage />} />
                <Route path="/" element={<Navigate to="/zadania" />} />
            </Routes>
        </nav>
    </HashRouter>
)

export default App;