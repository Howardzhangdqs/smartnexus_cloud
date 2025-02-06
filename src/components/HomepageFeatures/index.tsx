import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import UpFlow from '../UpFlow';
import Tilt from '../Tilt';

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
  num?: number;
};

export type FeatureItems = FeatureItem[];

function Feature({ title, img, description, num }: FeatureItem) {
  console.log('col col--' + (num || 3));
  return (
    <div className={clsx('col col--' + (num || 3))}>
      <div className="text--center">
        <UpFlow speed='0.4s'>
          <Tilt options={{ scale: 1, max: 30 }}>
            <img src={img} alt={title} className={clsx('')} style={{ borderRadius: '10px' }} />
          </Tilt>
        </UpFlow>
      </div>
      <div className="text--center padding-horiz--md">
        <UpFlow speed='0.5s'>
          <Heading as="h3">{title}</Heading>
        </UpFlow>
        <UpFlow speed='0.7s'>
          <div>{description}</div>
        </UpFlow>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ features, title, description }: {
  features: FeatureItems,
  title?: string,
  description?: string,
}): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {(title || description) && (
          <div className="row" style={{
            marginBottom: '.7rem',
          }}>
            <div className="col col--12">
              {title && (<UpFlow speed='0.4s'>
                <Heading as="h2" style={{
                  textAlign: 'center',
                  marginBottom: description ? '0' : '.2rem',
                }}>{title}</Heading>
              </UpFlow>)}
              {description && (<UpFlow>
                <div style={{ textAlign: 'center' }}>{description}</div>
              </UpFlow>)}
            </div>
          </div>
        )}
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
