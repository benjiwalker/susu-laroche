import React from "react";
import { graphql } from "gatsby";
import { FilmQuery } from "../../../graphql-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Page from "../../components/Page/Page";
import Item from "../../components/Item/Item";
import Video from "../../components/Video/Video";
import SEO from "../../components/SEO/SEO";

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
  data: FilmQuery;
}

const ProjectPage = ({ data }: Props) => {
  const { videoUrl, text, title } = data.film.nodes[0];
  const url = videoUrl?.videoUrl ?? "";

  const richText = renderRichText(
    { raw: text?.raw ?? "", references: [] },
    options
  );

  return (
    <Page background={data.background?.url ?? ""} margin={0} footer>
      <Item title={title ?? ""} text={richText}>
        <Video src={url} />
      </Item>
    </Page>
  );
};

export default ProjectPage;

export const Head = ({ data }: Props) => (
  <SEO title={data.film.nodes[0].title ?? "FILM"} />
);

export const query = graphql`
  query Film($id: String!) {
    film: allContentfulFilm(filter: { id: { eq: $id } }) {
      nodes {
        id
        text {
          raw
        }
        title
        videoUrl {
          videoUrl
        }
      }
    }
    background: contentfulAsset(title: { eq: "background" }) {
      url
    }
  }
`;
