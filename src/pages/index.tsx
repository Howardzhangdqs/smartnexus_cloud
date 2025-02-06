import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UpFlow from '@site/src/components/UpFlow';
import ImageSwitch from '@site/src/components/ImageSwitch';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageWordPic from '@site/src/components/HomepageWordPic';
import Heading from '@theme/Heading';
import section_core_function from './section_core_function';
import section_product_introduction from './section_product_introduction';
import section_technical_advantage from './section_technical_advantage';

import styles from './index.module.css';
import section_service_process from './section_service_process';
import section_success_example from './section_success_example';
import section_subscription_plan from './section_subscription_plan';
import section_aftersales_support from './section_aftersales_support';
import section_contact_entrance from './section_contact_entrance';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ImageSwitch images={[
      "/img/placeholder1.png", "/img/placeholder2.png",
      "/img/placeholder3.png", "/img/placeholder4.png",
    ]}>
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <UpFlow speed="0.5s">
            <Heading as="h1" className="hero__title">
              智枢云
            </Heading>
          </UpFlow>
          <UpFlow speed="0.7s">
            <p className="hero__subtitle">立体交通枢纽进度管理专家</p>
          </UpFlow>
          <UpFlow speed="0.9s">
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                五分钟快速上手 ⏱️
              </Link>
            </div>
          </UpFlow>
        </div>
      </header>
    </ImageSwitch >
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="智枢云：立体交通枢纽进度管理专家">
      <HomepageHeader />
      <main style={{ paddingTop: '3rem' }}>
        <HomepageWordPic features={section_product_introduction} l2r={true} />
        <HomepageFeatures
          title="四大核心解决方案"
          features={section_core_function} />
        <HomepageWordPic features={section_technical_advantage} l2r={false} />
        <HomepageWordPic features={section_service_process} l2r={true} />
        <HomepageFeatures
          title='赋能超大型枢纽建设'
          description='智枢云已成功赋能多个超大型枢纽建设项目'
          features={section_success_example} />
        <HomepageWordPic features={section_subscription_plan} />
        <HomepageWordPic features={section_aftersales_support} l2r={false} />
        <HomepageWordPic features={section_contact_entrance} />
      </main>
    </Layout>
  );
}
