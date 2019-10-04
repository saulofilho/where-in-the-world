import styled from 'styled-components';

export const Form = styled.form`
  margin: 0;
    input {
      font-size: 14px;
      height: 40px;
      width: 350px;
      border-radius: 5px;
      border: none;
      background: hsl(0, 0%, 100%);
      box-shadow: 1px 1px 3px rgba(0,0,0,.1);
      color: hsl(0, 0%, 52%);
      padding-left: 50px;
      outline: 1;
      background-image: url(https://cursorcss.s3-sa-east-1.amazonaws.com/_ionicons_svg_md-search.svg);
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 15px;
    }
`;