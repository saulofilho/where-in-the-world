import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  @media screen and (max-width: 600px) {
    display: flex;
  }
    input {
      font-size: 14px;
      height: 60px;
      width: 350px;
      border-radius: 5px;
      border: none;
      box-shadow: 1px 1px 3px rgba(0,0,0,.1);
      padding-left: 50px;
      outline: 1;
      background-image: url(https://cursorcss.s3-sa-east-1.amazonaws.com/_ionicons_svg_md-search.svg);
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 15px;
      @media screen and (max-width: 800px) {
        width: 200px;
      }
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
`;