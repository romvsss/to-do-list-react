import Form from './Form'
import TaskList from './TaskList'
import Buttons from './Buttons'
import Section from '../../../common/Section'
import Main from '../../../common/Main'
import Search from './Search'
import FetchExampleTasksButton from './FetchExampleTaskButton'

function TasksPage() {

  return (
    <Main>
      <header>
        <h1>Lista zadań</h1>
      </header>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} 
        extraHeaderContent={<FetchExampleTasksButton />}
        />

      <Section
        title="Wyszukiwarka"
        body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />

    </Main>
  );
}

export default TasksPage;
