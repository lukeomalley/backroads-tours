import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';
import Img from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import Day from '../components/SingleTour/Day';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Template = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    schedule,
  } = data.tour;

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} backgroundposition="50% 40%" />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {schedule.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary" duration={0.5}>
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      schedule {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default Template;
