import styled from 'styled-components';

export const Container = styled.main`
  max-width: 60%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 80%;
  }
`;