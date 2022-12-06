import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@components/Card';
import Icon from '@components/Icons/icon';

import * as styles from './Skills.module.scss';

const Skills = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <Icon name="React" />,
      title: 'React',
      description:
        'A component based JavaScript library for building highly interactive user interfaces.',
    },
    {
      icon: <Icon name="Sass" />,
      title: 'Sass',
      description:
        'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    },
    {
      icon: <Icon name="TypeScript" />,
      title: 'TypeScript',
      description:
        'A strongly typed programming language that builds on JavaScript, giving you better tooling.',
    },
    {
      icon: <Icon name="Node" />,
      title: 'Node.JS',
      description:
        'An open-source, cross-plataform JavaScript runtime enviroment. Its a popular tool for almost any kind of project.',
    },
  ];

  return (
    <section className={styles.skills}>
      <h2>Technologies that I've experience with</h2>
      <div className={styles.deck}>
        {cards.map((card) => (
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
