import React from 'react';

import { IconLogo, IconMenu } from '@components/Icons';

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case 'Logo':
      return <IconLogo />;
    case 'Menu':
      return <IconMenu />;
    default:
      throw Error('Icon not found!.');
  }
};

export default Icon;
