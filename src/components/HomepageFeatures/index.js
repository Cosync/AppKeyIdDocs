import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Attested Communication Between Verified Users',
    Svg: require('@site/static/img/attested.svg').default,
    description: (
      <>
        AppKeyId lets verified users send and acknowledge cards, messages, and documents. Each acknowledgement creates a trusted record of who acted, when it happened, and how they authenticated.
      </>
    ),
  },
  {
    title: 'Authenticated QR Codes for Real-World Actions',
    Svg: require('@site/static/img/qractions.svg').default,
    description: (
      <>
        AppKeyId QR codes are tied to verified actions, not anonymous links. A scan can require passkey authentication before a user acknowledges a card, joins a team, or establishes a trusted contact.
      </>
    ),
  },
  {
    title: 'Powered by FIDO2 Passkeys',
    Svg: require('@site/static/img/passkeys.svg').default,
    description: (
      <>
        AppKeyId uses passkeys as its trust foundation. Passkeys authenticate users, attest communications, and verify real-world QR actions. Each action is backed by cryptographic proof from the user’s device, linking identity, intent, and action.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
