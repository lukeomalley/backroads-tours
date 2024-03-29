import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact';
import StyledHero from '../components/StyledHero';

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero
        img={data.contactBcg.childImageSharp.fluid}
        backgroundposition="50% 28%"
      ></StyledHero>
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "lake.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
