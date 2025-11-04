import Main from "../../common/Main";
import Section from "../../common/Section";
import { Wrapper, Description, StyledLink } from "./styled";

const AuthorPage = () => (
  <Main>
    <header>
      <h1>O autorze</h1>
    </header>
    <Section
    title={"Oskar Romanowicz"}
      body={
        <Wrapper>
          <Description>
            Hej! Nazywam się Oskar Romanowicz, jestem studentem informatyki oraz początkującym Fron-End Developerem
            <br />
            Chcesz wiedzieć więcej? Zapraszam na mój <StyledLink href="https://github.com/romvsss">GitHub!</StyledLink>
          </Description>
        </Wrapper>
      }
    />
  </Main>
);

export default AuthorPage;