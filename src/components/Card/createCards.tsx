import React from "react";
import { getImage } from "gatsby-plugin-image";
import { PhotographyPageQuery, FilmPageQuery } from "../../../graphql-types";
import Card from "./Card";

const createCards = (data: PhotographyPageQuery | FilmPageQuery) => {
  const cards = data.content.nodes.map((node) => {
    const imgData = node?.images?.[0]?.gatsbyImageData;
    const img = node.images && getImage(imgData);

    if (img) {
      return <Card title={node.title ?? ""} image={img} />;
    }
  });

  return cards;
};

export default createCards;
