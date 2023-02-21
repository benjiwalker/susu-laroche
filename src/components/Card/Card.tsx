import React from "react";
import * as S from "../Card/Card.styles";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import slugify from "@sindresorhus/slugify";

type Props = {
  image: IGatsbyImageData;
  title: string;
};

const Card = ({ image, title }: Props) => {
  return (
    <S.Card>
      <Link to={slugify(title ?? "/")} key={title}>
        <GatsbyImage
          style={{ zIndex: "0", width: "100%", height: "100%" }}
          image={image}
          alt={title}
        />
        <S.Title>{title}</S.Title>
      </Link>
    </S.Card>
  );
};

export default Card;
