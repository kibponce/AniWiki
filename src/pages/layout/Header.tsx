import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { widths } from "../../utils/styles";

interface HeaderProps {
  isSingle?: boolean;
}

const Header: FC<HeaderProps> = ({ isSingle }) => {
  return (
    <StyledHeader isSingle={isSingle}>
      <Container>
        <HeaderBar>
          <h1>
            <HomeLink to="/">Anime Wiki</HomeLink>
          </h1>
        </HeaderBar>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.div<HeaderProps>`
  display: flex;
  min-height: 75px;
  background: #2b2d42;
  z-index: 10;
  opacity: ${({ isSingle }) => (isSingle ? "0.75" : "1")};
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

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #bdc1ff;
`;

export default Header;
