import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 20px;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-wrap: wrap;
}
`;

export const Button = styled.button`
    flex-basis: 15%;
    border: solid 1px gray;
    margin: 7px;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.color};
    color: ${({ theme }) => theme.colors.background};
    transition: 1s;
    font-size: 18px;

    &:hover{
        transform: scale(1.1);
        background-color: rgb(0, 153, 153);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 100%;
        padding: 10px;
};
`;