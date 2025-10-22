import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'
import Section from './Section'
import Main from './Main'
import { useTasks } from './useTasks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

function App() {

  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <header>
          <h1>Lista zadań</h1>
        </header>

        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form
              addNewTask={addNewTask}
            />} />

        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone} />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone} />} />

      </Main>
    </ThemeProvider>
  );
}

export default App;
