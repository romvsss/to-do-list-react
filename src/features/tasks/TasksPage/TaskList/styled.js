import styled, { css } from "styled-components";

export const List = styled.ul`
    padding-left: 0;
    margin: 0 auto;
    max-width: 90%;
    padding-bottom: 10px;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};

    ${({hidden}) => hidden && css`
        display: none;
    `};
`;

export const Button = styled.button`
    ${({remove}) => remove && css`
    width: 40px;
    height: 40px;
    background-color: hsl(0, 100%, 33%);
    color: ${({ theme }) => theme.colors.background};
    transition: 1s;
    border: none;
    cursor: pointer;

    &:hover {
        background: hsl(0, 100%, 50%);
    };
    `};

    ${({toggle}) => toggle && css`
    width: 40px;
    height: 40px;
    background-color: hsl(120, 42%, 36%);
    transition: 1s;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: hsl(120, 42%, 50%);
    };
    `};
`;

export const Content = styled.span`
    flex-grow: 1;
    text-align: left;
    font-size: 20px;
    font-weight: 1000;
    padding: 0 10px;
    overflow: hidden;

    ${({done}) => done && css`
    text-decoration: line-through;
    `};
`;