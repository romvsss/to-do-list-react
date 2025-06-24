import './index.css';
import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'
import Section from './Section'
import Main from './Main'

const tasks = [
  { id: 1, content: "hej", done: false },
  { id: 2, content: "   ", done: true }
];

const hideDoneTasks = false;


function App() {
  return (
    <>
      <Main>
        <header className="header">
          <h1>Lista zadań</h1>
        </header>

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />} />

        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />

      </Main>
    </>
  );
}

export default App;
