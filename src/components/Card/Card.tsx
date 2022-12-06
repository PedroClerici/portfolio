import React, { ReactNode } from 'react';

import Icon from '@components/Icons';

import * as styles from './Card.module.scss';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Card;
