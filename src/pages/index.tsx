import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/Layout';
import Hero from '@components/Sections/Hero';
import Skills from '@components/Sections/Skills';

import '@styles/pages/Index.module.scss';

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Hero />
      <Skills />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
