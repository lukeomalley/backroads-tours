import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';

const PostTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;
  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>{published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default PostTemplate;
