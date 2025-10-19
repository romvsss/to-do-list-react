import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #fff;
    margin-top: 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
};
`;
export const Title = styled.h2`
    padding: 25px;
    margin: 0;

@media (max-width: 767px) {
        padding: 10px;
        border-bottom: 1px solid #ccc;
}
`;