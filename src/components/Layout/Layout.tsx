import React from 'react';

import Header from '@components/Header';

import '@styles/main.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
