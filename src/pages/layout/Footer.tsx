import styled from "styled-components";
import { media } from "../../utils/styles";

const Footer = () => {
  return <StyledFooter>Copyright © 2023 AnimeWiki by kibponce</StyledFooter>;
};

const StyledFooter = styled.footer`
  display: flex;
  min-height: 75px;
  background: #2b2d42;
  color: #bdc1ff;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-items: center;

  ${media.xl`
    padding: 0 15px;
  `}
`;

export default Footer;
