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
    <>
      <Header isSingle={isSingle} />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  background: #edf1f5;
`;

export default Layout;
