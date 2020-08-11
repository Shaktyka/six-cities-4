import React from 'react';
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

export default CardsList;
