import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import BlogList from '../components/Blog/BlogList';

export default ({ data }) => (
  <Layout>
    <StyledHero
      img={data.defaultBcg.childImageSharp.fluid}
      backgroundposition="50% 58%"
    />
    <BlogList />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "mountains2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
