import { styled } from 'styled-components';

export const Aside = styled.aside`
    width: 40%;
    height: 100%;

    #titleName{
        font-size: 1.8rem;
    }

    #icons{
        width: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        padding-top: 10px;
        margin: 10px 0 30px 0;
        border-top: #fff solid 1px;
    }

    .icon{
        height: 30px;
        cursor: pointer;
    }

    figure{
        margin-top: 80px;
    }

    .photo{
        width: 320px;
        border-radius: 10px;
    }
`;