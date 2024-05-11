import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="https://techblog.flaviusdinu.com">Medium Blog Articles</a>,
    Svg: require('@site/static/img/medium-icon-svgrepo-com.svg').default,
    // description: (
    //   <>
    //     Check out my Medium blog
    //   </>
    // ),
  },
  {
    title: <a href='https://www.linkedin.com/in/flaviuscristiandinu/'>LinkedIn Profile</a>,
    Svg: require('@site/static/img/LinkedIn_icon.svg').default,
    // description: (
    //   <>
    //     LinkedIn profile
    //   </>
    // ),
  },
  {
    title: <a href='https://spacelift.io/blog/author/flaviusd'>Spacelift Blog Articles</a>,
    Svg: require('@site/static/img/Spacelift.svg').default,
    // description: (
    //   <>
    //     Extend or customize your website layout by reusing React. Docusaurus can
    //     be extended while reusing the same header and footer.
    //   </>
    // ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
