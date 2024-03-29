import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import styles from '../css/error.module.css';

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white" duration={0.5}>
            back to homepage
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
}
