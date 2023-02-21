import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { MusicPageQuery } from "../../graphql-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Page from "../components/Page/Page";
import Bandcamp from "../components/Bandcamp/Bandcamp";
import SEO from "../components/SEO/SEO";

import Item from "../components/Item/Item";

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
  data: MusicPageQuery;
}

const Music: React.FC<Props> = ({ data }) => {
  const releases = data.releases.nodes.map((release) => {
    const iframeHTMLString =
      release.bandcampEmbeddedPlayer?.bandcampEmbeddedPlayer;
    const iframeSrc = iframeHTMLString?.match(/src="([^"]+)"/)?.[1];

    const text = renderRichText(
      { raw: release?.text?.raw ?? "", references: [] },
      options
    );

    if (iframeSrc && text) {
      return (
        <Item title={release.title ?? ""} text={text}>
          <Bandcamp src={iframeSrc} />
        </Item>
      );
    }
  });

  return (
    <Page background={data.background?.url ?? ""} margin={10}>
      {releases}
    </Page>
  );
};

export default Music;

export const Head: HeadFC = () => <SEO title="MUSIC" />;

export const query = graphql`
  query MusicPage {
    releases: allContentfulMusicRelease(
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        bandcampEmbeddedPlayer {
          bandcampEmbeddedPlayer
        }
        createdAt(formatString: "DD MMMM YYYY")
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
