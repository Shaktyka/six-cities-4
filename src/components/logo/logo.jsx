import React from 'react';
import {LogoHeaderSize, LogoFooterSize} from '../../consts.js';

const getWidth = (location) => {
  let width = 0;
  if (location === `header`) {
    width = LogoHeaderSize.WIDTH;
  } else if (location === `footer`) {
    width = LogoFooterSize.WIDTH;
  }
  return width;
};

const getHeight = (location) => {
  let height = 0;
  if (location === `header`) {
    height = LogoHeaderSize.HEIGHT;
  } else if (location === `footer`) {
    height = LogoFooterSize.HEIGHT;
  }
  return height;
};

const Logo = ({location = `header`, isLinkActive = false}) => {

  const activeClass = isLinkActive ? `${location}__logo-link--active` : ``;

  return (
    <a className={`${location}__logo-link ${activeClass}`} href="/">
      <img
        className={`${location}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={getWidth(location)}
        height={getHeight(location)}
      />
    </a>
  );
};

export default Logo;
