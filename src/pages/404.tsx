import * as React from "react";
import { graphql } from "gatsby";
import { HeadFC } from "gatsby";
import { NotFoundPageQuery } from "../../graphql-types";
import Page from "../components/Page/Page";
import SEO from "../components/SEO/SEO";

type Props = {
  data: NotFoundPageQuery;
};

const NotFoundPage: React.FC<Props> = ({ data }) => {
  return (
    <Page background={data.background?.url ?? ""}>
      <h1>PAGE NOT FOUND</h1>
    </Page>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="NOT FOUND" />;

export const query = graphql`
  query NotFoundPage {
    background: contentfulAsset(title: { eq: "background-home" }) {
      url
    }
  }
`;
