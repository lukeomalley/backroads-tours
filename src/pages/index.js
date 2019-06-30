import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Chillwave normcore hot chicken activated charcoal stumptown meditation lyft. Chartreuse normcore church-key art party hell of. Cliche pop-up brunch wayfarers leggings umami master cleanse pork belly lomo XOXO gentrify food truck narwhal snackwave mumblecore."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
);
