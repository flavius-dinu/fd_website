import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Medium Blog Articles',
    link: 'https://techblog.flaviusdinu.com',
    Svg: require('@site/static/img/medium-icon-svgrepo-com.svg').default,
  },
  {
    title: 'LinkedIn Profile',
    link: 'https://www.linkedin.com/in/flaviuscristiandinu/',
    Svg: require('@site/static/img/LinkedIn_icon.svg').default,
  },
  {
    title: 'Spacelift Blog',
    link: 'https://spacelift.io/blog/author/flaviusd',
    Svg: require('@site/static/img/Spacelift.svg').default,
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/@devopswithflavius',
    Svg: require('@site/static/img/DevOps.svg').default,
  },
  {
    title: 'K8sLens Blog',
    link: 'https://k8slens.dev/blog',
    Svg: require('@site/static/img/Lens.svg').default,
  },
  {
    title: 'GitHub',
    link: 'https://github.com/flavius-dinu',
    Svg: require('@site/static/img/GitHub.svg').default,
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
