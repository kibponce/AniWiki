import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { size, media } from "../../utils/styles";

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

const StyledHeader = styled.header<HeaderProps>`
  display: flex;
  min-height: 75px;
  background: #2b2d42;
  z-index: 10;
  opacity: ${({ isSingle }) => (isSingle ? "0.75" : "1")};
`;

const Container = styled.div`
  width: ${size.xl};
  margin: 0 auto;

  ${media.xl`
    width: 100%;
    padding: 0 15px;
  `}
`;

const HeaderBar = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #bdc1ff;
`;

export default Header;
