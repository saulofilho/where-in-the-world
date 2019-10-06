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
    select {
      font-size: 14px;
      height: 40px;
      width: 200px;
      border-radius: 5px;
      border: none;
      background: hsl(0, 0%, 100%);
      box-shadow: 1px 1px 3px rgba(0,0,0,.1);
      color: hsl(0, 0%, 52%);
    }
`;