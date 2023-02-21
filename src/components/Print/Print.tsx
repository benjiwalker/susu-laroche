import React from "react";
import * as S from "../Print/Print.styles";

type Props = {
  children: React.ReactNode;
};

const Print = ({ children }: Props) => {
  return <S.Print>{children}</S.Print>;
};

export default Print;
