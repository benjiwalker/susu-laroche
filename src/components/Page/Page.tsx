import React from "react";
import * as S from "../Page/Page.styles";
import Grid from "../../components/Grid/Grid";
import Footer from "../Footer/Footer";

type Props = {
  background: string;
  children?: React.ReactNode;
  footer?: boolean;
  grid?: boolean;
  margin?: number;
};

const Page = ({
  background,
  children,
  footer = true,
  grid = false,
  margin = 0,
}: Props) => {
  return (
    <S.Page background={background}>
      {grid ? (
        <Grid>{children}</Grid>
      ) : (
        <S.Content margin={margin}>{children}</S.Content>
      )}
      {footer && <Footer />}
    </S.Page>
  );
};

export default Page;
