import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Home`}
        description="Description will go into a meta tag in <head />">
      </Layout>
      <div>
        <p>
          <br/>
          We can add whatever JSX elements we want to the homepage, like images, videos, or interactive components.
          Please forgive the lack of CSS sizing / position for this demo.
        </p>
        <img src={'img/site-images/homepage.png'} />
      </div>
    </div>
  );
}
