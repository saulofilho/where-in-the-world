import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1440px;
`;

export const UlGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10rem 3rem;
  list-style: none;
  grid-gap: 50px;
`;