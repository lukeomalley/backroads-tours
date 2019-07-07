import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';

export default class Tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
          backgroundPosition="50% 72%"
        ></StyledHero>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "mountains.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
