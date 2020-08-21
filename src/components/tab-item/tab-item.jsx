import React from 'react';
import PropTypes from 'prop-types';

const TabItem = (props) => {
  const {
    location = ``,
    isActive = false,
    onClick,
  } = props;

  const classForActiveTab = isActive ? `tabs__item--active` : ``;

  return (
    <li
      className="locations__item"
      onClick={(evt) => {
        evt.preventDefault();
        onClick(location);
      }}
    >
      <a className={`locations__item-link tabs__item ${classForActiveTab}`} href="#">
        <span>{location}</span>
      </a>
    </li>
  );
};

TabItem.propTypes = {
  location: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabItem;
