import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

import StyledHero from '../components/StyledHero';
import Tours from '../components/Tours/Tours';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.defaultBcg.childImageSharp.fluid}
          backgroundposition="50% 72%"
        ></StyledHero>
        <Tours />
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
