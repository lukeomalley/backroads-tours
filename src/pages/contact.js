import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <p>Contact Page</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    mountains2: file(relativePath: { eq: "mountain2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
