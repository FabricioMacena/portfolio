import { styled } from 'styled-components';

export const Aside = styled.aside`
    width: 60%;
    height: 100%;

    #about{
        font-size: 1.7rem;
        text-align: center;
        margin: 0 auto;
        padding: 50px 5rem;
        border-bottom: 1px solid #fff;
        line-height: 2rem;
    }

    nav{
        display: flex;
        width: 100%;
        height: 30%;
        margin: 30px 0;
        justify-content: space-around;
        align-items: start;
        flex-direction: column;
    }

    nav .link{
        font-size: 1.7rem;
        font-weight: bold;
        text-decoration: none;
        transition: 1s;
    }

    .dev:hover, .data:hover{
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;
        transform: translateX(6rem);
    }

    .dev:hover{
        background-image: linear-gradient(to right, #F9BC21, #F97515);
    }

    .data:hover{
        background-image: linear-gradient(to right, #4AD3E6, #4950EF);
    }   
`;