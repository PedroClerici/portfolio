import React, { ReactNode } from 'react';

import Icon from '@components/Icons';

import * as styles from './Button.module.scss';

type Props = {
  children: ReactNode;
  icon?: ReactNode | null;
  href: string;
  type: 'outlined' | 'filled';
};

const Button = ({ children, href, type, icon }: Props) => {
  return (
    <a href={href} className={styles[type]}>
      {icon}
      {children}
    </a>
  );
};

export default Button;
