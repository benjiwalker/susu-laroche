import * as React from "react";
import type { HeadFC } from "gatsby";
import { graphql } from "gatsby";
import { IndexPageQuery } from "../../graphql-types";
import Page from "../components/Page/Page";
import SEO from "../components/SEO/SEO";

interface Props {
  data: IndexPageQuery;
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return <Page background={data.background?.url ?? ""} footer={false} />;
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;

export const query = graphql`
  query IndexPage {
    background: contentfulAsset(title: { eq: "background-home" }) {
      url
    }
  }
`;
