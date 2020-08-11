import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card.jsx';

const CardsList = (props) => {
  const {places} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        places.map((place, i) => {
          return (
            <Card
              title={place.title}
              id={place.id}
              key={i}
            />
          );
        })
      }
    </div>
  );
};

CardsList.propTypes = {
  places: PropTypes.array.isRequired,
};

export default CardsList;
