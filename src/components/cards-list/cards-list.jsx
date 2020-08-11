import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';

import Card from '../card/card.jsx';

const CardsList = ({titles}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        titles.map((title) => {
          return (
            <Card
              title={title}
              key={nanoid(6)}
            />
          );
        })
      }
    </div>
  );
};

CardsList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
};

export default CardsList;
