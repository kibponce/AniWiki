import styled from "styled-components";
import { widths } from "../../utils/styles";

const Footer = () => {
  return (
    <StyledFooter>
      <h2>AniWiki</h2>
      <h5>demo app</h5>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  min-height: 150px;
  background: #2b2d42;
  color: #bdc1ff;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default Footer;
