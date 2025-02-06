import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import UpFlow from '../UpFlow';
import Tilt from '../Tilt';

export type WordPicItem = {
  title: string;
  img: string;
  description: ReactNode;
};

export type WordPicItems = WordPicItem[];

export default function HomepageFeatures({ features, l2r = true }: { features: WordPicItem, l2r?: boolean }): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ display: 'flex' }}>
          {
            l2r ? (
              <>
                <div className={clsx('col col--4')} style={{ display: 'flex', alignItems: 'center' }}>
                  <UpFlow speed='0.6s'>
                    <Tilt>
                      <img src={features.img} alt={features.title} style={{ borderRadius: '10px' }} />
                    </Tilt>
                  </UpFlow>
                </div>
                <div className={clsx('col col--5')}>
                  <UpFlow>
                    <h3 className='indent'>{features.title}</h3>
                  </UpFlow>
                  <UpFlow speed='0.7s'>
                    <div>{features.description}</div>
                  </UpFlow>
                </div>
              </>
            ) : (
              <>
                <div className={clsx('col col--5')}>
                  <UpFlow>
                    <h3 style={{ textAlign: 'left' }}>{features.title}</h3>
                  </UpFlow>
                  <UpFlow speed='0.7s'>
                    <div>{features.description}</div>
                  </UpFlow>
                </div>
                <div className={clsx('col col--4')} style={{ display: 'flex', alignItems: 'center' }}>
                  <UpFlow speed='0.6s'>
                    <Tilt>
                      <img src={features.img} alt={features.title} style={{ borderRadius: '10px' }} />
                    </Tilt>
                  </UpFlow>
                </div>
              </>
            )
          }
        </div>
      </div>
    </section>
  );
}
