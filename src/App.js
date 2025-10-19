import './index.css';
import { useState } from 'react';
import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'
import Section from './Section'
import Main from './Main'
import { useTasks } from './useTasks';

function App() {

  const [hideDone, setHideDone] = useState(false);

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };


  return (
    <>
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
    </>
  );
}

export default App;
