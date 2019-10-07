import styled from 'styled-components';

export const SelectRegion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (max-width: 600px) {
    position: relative;
    margin: 2rem 0;
    left: 0;
  }
  .css-yk16xz-control, .css-1pahdxg-control {
    padding: 10px;
    font-size: 14px;
    height: 60px;
    width: 180px;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 3px rgba(0,0,0,.1);
  }
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  path {
    color: black;
  }
`;