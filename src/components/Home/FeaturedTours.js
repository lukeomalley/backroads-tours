import React from 'react';
import Tour from '../Tours/Tour';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import styles from '../../css/items.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const response = useStaticQuery(getTours);
  const tours = response.featuredTours.edges;

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />;
        })}
      </div>

      <AniLink fade to="/tours" className="btn-primary" duration={0.5}>
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;
