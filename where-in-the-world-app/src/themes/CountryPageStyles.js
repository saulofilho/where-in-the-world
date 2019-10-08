import styled from "styled-components";

export const MainDiv = styled.div`
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: 24px;
  }
  span {
    font-weight: bolder;
  }
`;

export const CountryInfos = styled.div`
  margin: 0 auto;
  ul {
    padding-inline-start: 0;
    margin: 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
    grid-gap: 100px;
    align-items: center;
    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
`;

export const Forms = styled.div`
  position: relative;
  margin: 5.5rem 3rem 3rem 3rem;
  button {
    cursor: pointer;
    font-size: 14px;
    height: auto;
    padding: 0.5rem 2rem 0.5rem 3rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    outline: 1;
    text-align: center;
    outline: 1;
    background-image: url(https://cursorcss.s3-sa-east-1.amazonaws.com/_ionicons_svg_md-arrow-back.svg);
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 25px;
  }
  button:hover {
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }
`;

export const GridText = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "tit tit"
    "lef  rig"
    "bott  bott";
  @media screen and (max-width: 800px) {
    grid-template-areas:
        "tit tit"
        "lef lef"
        "rig rig"
        "bott bott";
    grid-gap: 10px;
  }
`;

export const Title16 = styled.h1`
  grid-area: tit;
`;

export const LeftText = styled.div`
  grid-area: lef;
`;

export const RightText = styled.div`
  grid-area: rig;
`;

export const Bottom = styled.div`
  grid-area: bott;
`;

export const BorderStyle = styled.a`
  margin: 1rem 1rem 0 0;
  display: inline-flex;
  cursor: pointer;
  font-size: 14px;
  height: auto;
  padding: 0.3rem 1.8rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  outline: 1;
  text-align: center;
  outline: 1;
    :hover {
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }
`;