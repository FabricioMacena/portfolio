import styled from "styled-components";

export const Container = styled.article`
    height: 80%;
    border: 1px solid transparent;
    border-radius: 10px;
    border-image: linear-gradient(to right, ${props => props.colors.primaryColor}, ${props => props.colors.secondaryColor}) 1;
    border-image-slice: 1;
`;

export const Aside = styled.aside`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .srcAsset{
        max-width: 600px;
        max-height: 400px;
    }
`;
