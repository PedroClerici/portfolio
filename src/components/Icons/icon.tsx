import React from 'react';

import { IconLogo, IconMenu, IconArrow } from '@components/Icons';

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case 'Logo':
      return <IconLogo />;
    case 'Menu':
      return <IconMenu />;
    case 'Arrow':
      return <IconArrow />;
    default:
      throw Error('Icon not found!.');
  }
};

export default Icon;
