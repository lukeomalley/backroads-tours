import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact';
import StyledHero from '../components/StyledHero';

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero
        img={data.contactBcg.childImageSharp.fluid}
        backgroundPosition="50% 40%"
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
