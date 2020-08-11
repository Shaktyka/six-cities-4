import React from 'react';

const TabItem = ({location, isActive}) => {
  const classForActiveTab = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${classForActiveTab}`} href="#">
        <span>{location}</span>
      </a>
    </li>
  );
};

export default TabItem;
