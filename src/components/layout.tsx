import React from 'react';
import Navbar from '@components/navbar';
import '@styles/main.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
