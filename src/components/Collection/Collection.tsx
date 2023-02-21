import React from "react";
import * as S from "../Collection/Collection.styles";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Collection = ({ children, title }: Props) => {
  return (
    <S.Collection>
      <S.Heading>{title}</S.Heading>
      {children}
    </S.Collection>
  );
};

export default Collection;
