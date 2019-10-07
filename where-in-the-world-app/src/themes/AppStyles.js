import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const MainHeader = styled.header`
  top: 0;
  left: 0;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 99;
  .div-switch {
    justify-self: end;
    margin: 0 3rem;
    @media screen and (max-width: 800px) {
        margin: 1rem;
      }
    }
  }
  .div-switch:before {
    content: "Dark Mode";
    margin: 0 1rem 24px 0;
    font-size: 14px;
    font-weight: 800;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 5px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 5px;
    left: 0;
    right: 0;
    bottom: -5px;
    background-color: hsl(0, 0%, 88%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    right: 20px;
    bottom: -6px;
    background-color: hsl(0, 0%, 52%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: hsl(207, 26%, 17%);
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Forms = styled.div`
  position: relative;
  margin: 5.5rem 3rem 3rem 3rem;
  @media screen and (max-width: 600px) {
    margin: 1rem;
    margin: 5.5rem 3rem 3rem 3rem;
  }
`;

export const DivGrid = styled.div`
  margin: 0 auto;
`;

export const Grid = styled.ul`
  padding-inline-start: 0;
  margin: 2rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  list-style: none;
  grid-gap: 2rem;
  @media screen and (max-width: 1200px) {
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
  }
  li {
    width: 100%;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;