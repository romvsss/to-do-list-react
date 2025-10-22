import styled from 'styled-components'

export const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
  padding: 0 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
}
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.color};
  padding: 8px 16px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;

  &:hover {
    color: rgb(0, 160, 160);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
    background-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 2px 0;
  }
`;