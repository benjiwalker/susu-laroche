import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { FilmPageQuery } from "../../graphql-types";
import createCards from "../components/Card/createCards";
import Page from "../components/Page/Page";
import SEO from "../components/SEO/SEO";

interface Props {
  data: FilmPageQuery;
}

const Film: React.FC<Props> = ({ data }) => {
  const filmCards = createCards(data);

  return (
    <Page background={data.background?.url ?? ""} grid>
      {filmCards}
    </Page>
  );
};

export default Film;

export const Head: HeadFC = () => <SEO title="FILM" />;

export const query = graphql`
  query FilmPage {
    content: allContentfulFilm(sort: { fields: createdAt, order: DESC }) {
      nodes {
        images {
          gatsbyImageData(formats: [AUTO, WEBP])
        }
        title
      }
    }

    background: contentfulAsset(title: { eq: "background" }) {
      url
    }
  }
`;
