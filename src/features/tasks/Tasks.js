import Form from './Form'
import TaskList from './TaskList'
import Buttons from './Buttons'
import Section from '../../common/Section'
import Main from '../../common/Main'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../globalStyles';
import { theme } from '../../theme';

function Tasks() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <header>
          <h1>Lista zadań</h1>
        </header>

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />} />

        <Section
          title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />

      </Main>
    </ThemeProvider>
  );
}

export default Tasks;
