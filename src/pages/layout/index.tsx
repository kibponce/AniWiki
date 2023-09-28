import { FC } from "react";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  isSingle?: boolean;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, isSingle }) => {
  return (
    <StyledLayout>
      <Header isSingle={isSingle} />
      <Body>{children}</Body>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  background: #edf1f5;
`;

export default Layout;
