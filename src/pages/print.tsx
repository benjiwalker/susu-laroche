import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { PrintPageQuery } from "../../graphql-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../components/Page/Page";
import Print from "../components/Print/Print";
import SEO from "../components/SEO/SEO";

interface Props {
  data: PrintPageQuery;
}

const Prints: React.FC<Props> = ({ data }) => {
  const allPrints = data.content.nodes
    .map((collection) =>
      collection.images?.map((image) => {
        return { image: image, collection: collection.title };
      })
    )
    .flat(1);

  const prints = allPrints.map((p, i) => {
    const img = getImage(p?.image?.gatsbyImageData);
    if (img) {
      return (
        <Print>
          <GatsbyImage image={img} alt={p?.collection ?? `art print ${i}`} />
        </Print>
      );
    }
  });

  return (
    <Page background={data.background?.url ?? "PRINT"} margin={5}>
      {prints}
    </Page>
  );
};

export default Prints;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
  query PrintPage {
    content: allContentfulPrintCollection {
      nodes {
        images {
          gatsbyImageData(formats: [AUTO, WEBP])
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
