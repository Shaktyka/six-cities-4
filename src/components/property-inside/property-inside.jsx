import React from 'react';
import PropTypes from 'prop-types';

const PropertyInside = ({properties = []}) => {
  return (
    <ul className="property__inside-list">
      {
        properties.map((propertie, i) => {
          return (
            <li key={i} className="property__inside-item">
              {propertie}
            </li>
          );
        })
      }
    </ul>
  );
};

PropertyInside.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyInside;
