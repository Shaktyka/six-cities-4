import React from 'react';
import User from '../user/user.jsx';
import Logo from '../logo/logo.jsx';

import {MOCK_EMAIL} from '../../consts.js';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo
              location={`header`}
              isLinkActive={true}
            />

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <User email={MOCK_EMAIL} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
