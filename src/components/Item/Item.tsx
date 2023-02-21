import React from "react";
import * as S from "../Item/Item.styles";

type Props = {
  children: React.ReactNode;
  text: React.ReactNode;
  title: string;
};

const Item = ({ children, text, title }: Props) => {
  return (
    <S.Item>
      {children}
      <S.Container>
        <S.Heading>{title}</S.Heading>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.Item>
  );
};

export default Item;
