import Form from './Form'
import TaskList from './TaskList'
import Buttons from './Buttons'
import Section from '../../common/Section'
import Main from '../../common/Main'
import { useTasks } from '../../useTasks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../globalStyles';
import { theme } from '../../theme';

function Tasks() {

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
            <TaskList
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

export default Tasks;
