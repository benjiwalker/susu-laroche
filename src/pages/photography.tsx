import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { PhotographyPageQuery } from "../../graphql-types";
import createCards from "../components/Card/createCards";
import Page from "../components/Page/Page";
import SEO from "../components/SEO/SEO";

interface Props {
  data: PhotographyPageQuery;
}

const Photography: React.FC<Props> = ({ data }) => {
  const photographyCards = createCards(data);
  return (
    <Page background={data.background?.url ?? ""} grid>
      {photographyCards}
    </Page>
  );
};

export default Photography;

export const Head: HeadFC = () => <SEO title="PHOTOGRAPHY" />;

export const query = graphql`
  query PhotographyPage {
    content: allContentfulPhotographyCollection {
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
