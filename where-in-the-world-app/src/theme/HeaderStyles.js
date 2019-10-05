import styled from 'styled-components';

export const MainHeader = styled.header`
  top: 0;
  left: 0;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
`;

export const Title = styled.h1`
  color: hsl(200, 15%, 8%);
  font-size: 16px;
  margin: 1rem 3rem;
  font-weight: 800;
  @media screen and (max-width: 600px) {
    margin: 5px;
    word-wrap: break-word;
    font-size: 14px;
  }
`;
