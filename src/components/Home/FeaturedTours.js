import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from 'gatsby';

import Tour from '../Tours/Tour';
import Title from '../Title';
import styles from '../../css/items.module.css';

const getFeaturedTours = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          name
          price
          slug
          start
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const res = useStaticQuery(getFeaturedTours);
  const tours = res.featuredTours.edges;
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node}></Tour>;
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
      <Tour />
    </section>
  );
};

export default FeaturedTours;
