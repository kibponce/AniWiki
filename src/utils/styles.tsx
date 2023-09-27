import { createGlobalStyle } from "styled-components";

export const widths = {
  regularPageWidth: 1400,
};

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  h1 {
    font-size: 40px;
    line-height 1;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 18px;
  }

`;

export default GlobalStyles;
