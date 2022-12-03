import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '@components/Button';

import * as styles from './Hero.module.scss';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.introduction}>
        <h1>
          {t('Pedro Clerici.')} <br /> {t('I build stuff for the web.')}
        </h1>
        <p>
          {t(
            "I'm a self thought front-end developer specializing in building (and occasionally designing) interactive digital experiences. Currently, I'm looking for my first oportunity on the industry."
          )}
        </p>
        <Button type="outlined" href="*">
          {t('Contact')}
        </Button>
      </div>
      <div className={styles.illustration}>
        <StaticImage
          className="img"
          src="../../../images/illustration.png"
          height={700}
          quality={95}
          alt="Skeleton UI"
        />
      </div>
    </section>
  );
};

export default Hero;
