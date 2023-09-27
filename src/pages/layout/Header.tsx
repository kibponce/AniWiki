import styled from "styled-components";
import { widths } from "../../utils/styles";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderBar>
          <h1>AniWiki</h1>
        </HeaderBar>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  min-height: 75px;
  background: #2b2d42;
  color: #bdc1ff;
`;

const Container = styled.div`
  width: ${widths.regularPageWidth}px;
  margin: 0 auto;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export default Header;
