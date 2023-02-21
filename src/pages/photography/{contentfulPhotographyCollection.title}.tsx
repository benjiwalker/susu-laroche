import React from "react";
import { graphql } from "gatsby";
import { PhotographyCollectionQuery } from "../../../graphql-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../../components/Page/Page";
import Collection from "../../components/Collection/Collection";
import SEO from "../../components/SEO/SEO";

interface Props {
  data: PhotographyCollectionQuery;
}

const ProjectPage = ({ data }: Props) => {
  const collection = data.collection.nodes[0];

  const images = collection?.images?.map((image) => {
    const imgData = image?.gatsbyImageData;
    const img = image && getImage(imgData);
    if (img) {
      return (
        <GatsbyImage
          image={img ?? ""}
          alt={image.title ?? ""}
          style={{ zIndex: "0", maxWidth: "600px" }}
        />
      );
    }
  });

  return (
    <Page background={data.background?.url ?? ""} margin={5} footer>
      <Collection title={collection.title ?? ""}>{images}</Collection>
    </Page>
  );
};

export default ProjectPage;

export const Head = ({ data }: Props) => (
  <SEO title={data.collection.nodes[0].title ?? "PHOTOGRAPHY"} />
);

export const query = graphql`
  query PhotographyCollection($id: String!) {
    collection: allContentfulPhotographyCollection(
      filter: { id: { eq: $id } }
    ) {
      nodes {
        id
        images {
          gatsbyImageData
          title
        }
        title
      }
    }
    background: contentfulAsset(title: { eq: "background" }) {
      url
    }
  }
`;
