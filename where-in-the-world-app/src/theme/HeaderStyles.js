import styled from 'styled-components';

export const MainHeader = styled.header`
  top: 0;
  left: 0;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 1px 1px 3px rgba(0,0,0,.1);
`;

export const Title = styled.h1`
    color: hsl(200, 15%, 8%);
    font-size: 1.3rem;
    margin: 1rem 3rem;
    font-weight: 800;
`;
