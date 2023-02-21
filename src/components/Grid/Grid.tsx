import React from "react";
import * as S from "../Grid/Grid.styles";

type Props = {
  children: React.ReactNode;
};

const Grid = ({ children }: Props) => {
  return <S.Grid>{children}</S.Grid>;
};

export default Grid;
