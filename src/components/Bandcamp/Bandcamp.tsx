import React from "react";
import * as S from "../Bandcamp/Bandcamp.styles";

const Bandcamp = ({ src }: { src: string }) => {
  return <S.Bandcamp src={src} seamless />;
};

export default Bandcamp;
