import { createGlobalStyle, css, RuleSet } from "styled-components";
interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
interface Media {
  xs: (props: any) => RuleSet<object>;
  sm: (props: any) => RuleSet<object>;
  md: (props: any) => RuleSet<object>;
  lg: (props: any) => RuleSet<object>;
  xl: (props: any) => RuleSet<object>;
}

export const size: Size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
};

export const media: Media = {
  xs: (props: any): RuleSet<object> => css`
    @media (max-width: ${size.xs}) {
      ${css(props)};
    }
  `,
  sm: (props: any): RuleSet<object> => css`
    @media (max-width: ${size.sm}) {
      ${css(props)};
    }
  `,
  md: (props: any): RuleSet<object> => css`
    @media (max-width: ${size.md}) {
      ${css(props)};
    }
  `,
  lg: (props: any): RuleSet<object> => css`
    @media (max-width: ${size.lg}) {
      ${css(props)};
    }
  `,
  xl: (props: any): RuleSet<object> => css`
    @media (max-width: ${size.xl}) {
      ${css(props)};
    }
  `,
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

  h6 {
    font-size: 1.15rem;
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
