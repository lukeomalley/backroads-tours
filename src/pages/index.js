import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import FeaturedTours from '../components/Home/FeaturedTours';

export default ({ data }) => (
  <Layout>
    <StyledHero
      img={data.defaultBcg.childImageSharp.fluid}
      home="true"
      backgroundPosition="50% 0%"
    >
      <Banner
        title="continue exploring"
        info="Chillwave normcore hot chicken activated charcoal stumptown meditation lyft. Chartreuse normcore church-key art party hell of. Cliche pop-up brunch wayfarers leggings umami master cleanse pork belly lomo XOXO gentrify food truck narwhal snackwave mumblecore."
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "mountains3.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
