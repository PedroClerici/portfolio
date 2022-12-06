import React from 'react';

import {
  IconLogo,
  IconMenu,
  IconArrow,
  IconReact,
  IconSass,
  IconTypeScript,
  IconNode,
} from '@components/Icons';

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
    case 'React':
      return <IconReact />;
    case 'Sass':
      return <IconSass />;
    case 'TypeScript':
      return <IconTypeScript />;
    case 'Node':
      return <IconNode />;
    default:
      throw Error('Icon not found!.');
  }
};

export default Icon;
