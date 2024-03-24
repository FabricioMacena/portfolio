import styled from "styled-components";

export const Container = styled.article`
    height: 80%;
    border: 1px solid transparent;
    border-radius: 10px;
    border-image: linear-gradient(to right, ${props => props.colors.primaryColor}, ${props => props.colors.secondaryColor}) 1;
    border-image-slice: 1;
    padding: 30px;
`;

export const Aside = styled.aside`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .divSrc{
        width: 60%;
    }

    .srcAsset{
        max-width: 90%;
        max-height: 90%;
    }
    
    .divAbout{
        height: 80%;
        width: 40%;
    }

    .divAbout h1{
        font-size: 1.7rem;
        font-family: 'Lato', 'Jura', sans-serif;
        text-align: center;
        height: 30%;
    }

    .divAbout p{
        line-height: 35px;
        height: 55%;
        font-size: 1.1rem;
        overflow-y: auto;
        padding-right: 30px;

        &::-webkit-scrollbar{
            height: 10px;
            width: 4px;
        }

        &::-webkit-scrollbar-track{
            border-radius: 5px;
            background-color: #ccc;
        }

        &::-webkit-scrollbar-thumb{
            background-color: ${props => props.colors.secondaryColor};
            border-radius: 5px;
        }
    }

    .links{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
        height: 15%;
    }

    .links a{
        text-decoration: none;
        font-weight: bold;
        transition: .3s;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
            to right,
            ${props => props.colors.primaryColor},
            ${props => props.colors.secondaryColor}
        );
        
        transition: .3s;

        &:hover{
            transform: scale(1.1);
        }

    }
    
`;

export const FooterProject = styled.aside`
    width: 100%;
    height: 20%;

    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .badges{
        height: 60%;
        gap: 5px;
    }

    .badge{
        opacity: 0.6;
    }

    span{
        color: #ccc;
    }

    .btns{
        height: 30%;
        gap: 20px;
    }

    .btns button{
        background: none;
        border: none;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
            to right,
            ${props => props.colors.primaryColor},
            ${props => props.colors.secondaryColor}
        );

        transition: 0.3s;

        &:hover{
            transform: scale(1.1);
        }
    }
`;