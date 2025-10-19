import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    padding: 20px;
    margin: auto;

    @media (max-width: 767px) {
        flex-wrap: wrap;
}
`;

export const Input = styled.input`
    border: solid 1px gray;
    flex-basis: 85%;
    margin: 7px;
    height: 50px;
    font-size: 18px;

    @media (max-width: 767px) {
        flex-basis: 100%;
        padding: 5px;
}
`;

export const Button = styled.button`
    flex-basis: 15%;
    border: solid 1px gray;
    margin: 7px;
    padding: 5px;
    background-color: teal;
    color: #fff;
    transition: 1s;
    font-size: 18px;

    &:hover{
        transform: scale(1.1);
        background-color: rgb(0, 153, 153);
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        padding: 10px;
};
`;