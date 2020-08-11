import React from 'react';
import PropTypes from 'prop-types';

const isAuthorized = true;

const User = ({email}) => {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {
        isAuthorized
          ?
          <span className="header__user-name user__name">{email}</span>
          :
          <span className="header__login">Sign in</span>
      }
    </a>
  );
};

User.propTypes = {
  email: PropTypes.string.isRequired,
};

export default User;
