import styled from "styled-components";

export const Input = styled.input`
    border: solid 1px gray;
    flex-basis: 85%;
    margin: 7px;
    height: 50px;
    font-size: 18px;
    display: flex;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 100%;
        padding: 5px;
}
`;