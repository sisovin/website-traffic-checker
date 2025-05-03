import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Header, SearchForm, Results, Features } from '../components/TrafficChecker';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Website Traffic Checker" />
      <Header />
      <SearchForm />
      <Results />
      <Features />
    </Layout>
  );
};

export default HomePage;
