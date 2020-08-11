import React from 'react';

import Logo from '../logo/logo.jsx';

const Footer = () => {
  return (
    <footer className="footer container">
      <Logo
        location={`footer`}
        isLinkActive={false}
      />
    </footer>
  );
};

export default Footer;
