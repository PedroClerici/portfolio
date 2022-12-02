import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '@components/Icons';
import Button from '@components/Button';
import LangSelector from '@components/LangSelector';

import * as styles from './Header.module.scss';
import Dropdown from '@components/Dropdown';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <Icon name="Logo" />
      </a>
      <Dropdown />
      <nav className={styles.nav}>
        <a href="#">{t('Skills')}</a>
        <a href="#">{t('Projects')}</a>
        <a href="#">{t('About')}</a>
        <LangSelector />
        <Button href="#" type="outlined">
          {t('Resume')}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
