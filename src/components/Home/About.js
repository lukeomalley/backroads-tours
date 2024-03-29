import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Title from '../Title';
import styles from '../../css/about.module.css';
// import img from '../../images/defaultBcg.jpeg';

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage);
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us"></Title>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
            {/* <img src={img} alt="" /> */}
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Banjo synth bicycle rights celiac before they sold out, PBR&B palo
            santo post-ironic activated charcoal subway tile woke mustache.
          </p>
          <p>
            Gastropub fanny pack brooklyn cray. Before they sold out taiyaki
            gluten-free, vexillologist tattooed pinterest craft beer celiac ugh
            next level.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
