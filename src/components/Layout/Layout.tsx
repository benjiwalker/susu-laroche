import React from "react";
import * as S from "./Layout.styles";
import GlobalStyles from "../../styles/GlobalStyles";
import Menu from "../Menu/Menu";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const links = ["photography", "film", "music", "print", "product", "info"];

  return (
    <S.Layout>
      <GlobalStyles />
      <Menu links={links} />
      {children}
    </S.Layout>
  );
};

export default Layout;
