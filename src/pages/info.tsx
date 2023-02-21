import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { InfoPageQuery } from "../../graphql-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import Page from "../components/Page/Page";
import Contact from "../components/Contact/Contact";
import List from "../components/List/List";
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
  data: InfoPageQuery;
}

const Info: React.FC<Props> = ({ data }) => {
  const forthcomingProjects = data.info.nodes[0].list;
  const previousProjects = data.info.nodes[1].list;
  let forthcomingList;
  let previousList;

  if (previousProjects !== null) {
    previousList = renderRichText(
      { raw: previousProjects?.raw ?? "", references: [] },
      options
    );
  }

  if (forthcomingProjects !== null) {
    forthcomingList = renderRichText(
      { raw: forthcomingProjects?.raw ?? "", references: [] },
      options
    );
  }

  return (
    <Page background={data.background?.url ?? ""} margin={2}>
      <Contact />
      {forthcomingList && <List list={forthcomingList} />}
      {previousList && <List list={previousList} />}
    </Page>
  );
};

export default Info;

export const Head: HeadFC = () => <SEO title={"INFO"} />;

export const query = graphql`
  query InfoPage {
    info: allContentfulProjectList {
      nodes {
        list {
          raw
        }
        title
      }
    }
    background: contentfulAsset(title: { eq: "background-info" }) {
      url
    }
  }
`;
