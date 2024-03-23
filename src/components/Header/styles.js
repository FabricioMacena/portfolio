import styled from "styled-components";

export const Container = styled.header`
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-family: 'Lato', 'Jura', sans-serif;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
        to right,
        ${props => props.colors.primaryColor},
        ${props => props.colors.secondaryColor}
    );
`;