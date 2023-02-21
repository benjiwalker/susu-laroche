import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { ProductPageQuery } from "../../graphql-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../components/Page/Page";
import Item from "../components/Item/Item";
import SEO from "../components/SEO/SEO";

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
};
interface Props {
  data: ProductPageQuery;
}

const Product: React.FC<Props> = ({ data }) => {
  const products = data.products.nodes.map((product) => {
    const imgData = product?.images?.[0]?.gatsbyImageData;
    const img = product.images && getImage(imgData);

    const text = renderRichText(
      { raw: product?.text?.raw ?? "", references: [] },
      options
    );

    if (img && text) {
      return (
        <Item title={product.title ?? ""} text={text}>
          <GatsbyImage
            style={{ zIndex: "0", maxWidth: "600px" }}
            image={img ?? ""}
            alt={product.title ?? ""}
          />
        </Item>
      );
    }
  });

  return (
    <Page background={data.background?.url ?? ""} margin={10}>
      {products}
    </Page>
  );
};

export default Product;

export const Head: HeadFC = () => <SEO title="PRODUCT" />;

export const query = graphql`
  query ProductPage {
    products: allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
      nodes {
        createdAt(formatString: "DD MMMM YYYY")
        images {
          gatsbyImageData(formats: [AUTO, WEBP])
        }
        text {
          raw
        }
        title
      }
    }
    background: contentfulAsset(title: { eq: "background" }) {
      url
    }
  }
`;
