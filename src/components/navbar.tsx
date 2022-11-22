import * as React from 'react';
import { Icon } from '@components/icons';

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        <Icon name="Logo" />
      </a>
      <button className="navbar__menu-btn">
        <Icon name="Menu" />
      </button>
      <nav className="navbar__nav">
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Resume</a>
      </nav>
    </header>
  );
};

export default Navbar;
