import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.color};
    width: 100%;
    padding: 20px;
    text-align: center;
`;

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
`;

export const Item = styled.li`
    margin: 0 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0 10px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 5px;

    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.background};
    }

    &:hover {
        color: white;
        border-bottom-color: white;
    }
`;