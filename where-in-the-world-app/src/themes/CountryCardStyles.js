import styled from 'styled-components';

export const Card = styled.div`
    border-radius: 5px;
    height: 400px;
    @media screen and (max-width: 600px) {
        height: auto;
    }
    -webkit-box-shadow: 1px 1px 3px rgba(0,0,0,.1);
    box-shadow: 1px 1px 3px rgba(0,0,0,.1);
    -webkit-transition: all .3s ease;
    &:hover {
        -webkit-box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2);
        box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2); 
        }
    transition: all .3s ease;
    img {
        margin: 0 auto;
        width: 100%;
        height: 200px;
        object-fit: cover;
        @media screen and (max-width: 600px) {
            height: auto;
        }
    }
    p {

        font-size: 14px;
    }
    span {
        font-weight: bolder;
    }
`;

export const Infos = styled.div`
    padding: 1rem;
`;

export const Title16 = styled.h2`
    font-size: 16px;
    font-weight: 800;
`;