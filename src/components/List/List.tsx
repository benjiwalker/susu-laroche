import React from "react";
import * as S from "../List/List.styles";

const List = ({ list }: { list: React.ReactNode }) => {
  return <S.List>{list}</S.List>;
};

export default List;
