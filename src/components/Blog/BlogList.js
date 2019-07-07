import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogCard from './BlogCard';
import Title from '../Title';
import styles from '../../css/blog.module.css';

const allBlogPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const { posts } = useStaticQuery(allBlogPosts);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs"></Title>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />;
        })}
      </div>
    </section>
  );
};

export default BlogList;
