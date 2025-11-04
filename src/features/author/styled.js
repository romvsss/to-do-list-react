import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.color};
    text-decoration: none;
    font-weight: 700;
    border-bottom: 1px solid ${({ theme }) => theme.colors.color};
    transition: filter 0.3s;

    &:hover {
        filter: brightness(1.2);
    }
`;