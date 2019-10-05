import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1440px;
`;

export const DivGrid = styled.div`
  margin: 0 auto;
`;

export const UlGrid = styled.ul`
  padding-inline-start: 0;
  margin: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  list-style: none;
  grid-gap: 2rem;
  @media screen and (max-width: 992px) {
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-gap: 10px;
  }
  li {
    width: 100%;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;