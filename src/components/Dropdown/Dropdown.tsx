import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '@components/Icons';
import Button from '@components/Button';
import LangSelector from '@components/LangSelector';

import * as styles from './Dropdown.module.scss';

const Dropdown = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <button className={styles.dropdownBtn} onClick={() => setActive(!active)}>
        <Icon name="Menu" />
      </button>
      {active && (
        <div className={styles.dropdown}>
          <a href="#">{t('Skills')}</a>
          <a href="#">{t('Projects')}</a>
          <a href="#">{t('About')}</a>
          <LangSelector />
          <Button href="#" type="outlined">
            {t('Resume')}
          </Button>
        </div>
      )}
    </>
  );
};

export default Dropdown;
