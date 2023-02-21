import React from "react";
import * as S from "../Film/Film.styles";

type Props = {
  children: React.ReactNode;
  text: React.ReactNode;
  title: string;
};

const Film = ({ children, text, title }: Props) => {
  return (
    <S.Film>
      {children}
      <S.Container>
        <S.Heading>{title}</S.Heading>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.Film>
  );
};

export default Film;
