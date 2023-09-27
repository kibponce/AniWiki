import { createGlobalStyle } from "styled-components";

export const widths = {
  regularPageWidth: 1400,
};

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  h1 {
    font-size: 2.5rem;
    line-height 1;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.3rem;
  }


  @keyframes in {
    0% {     
      opacity: 0;
      transform: scale(.95);
    }
    60%% { 
      opacity: 1; 
    }
    100% { 
      transform: none; 
    }
   }
`;

export default GlobalStyles;
