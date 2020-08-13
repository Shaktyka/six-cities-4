import React from 'react';
import PropTypes from 'prop-types';
import NearPlaceCard from '../near-place-card/near-place-card.jsx';

const NearPlaces = ({places = []}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          places.map((place) => {
            return (
              <NearPlaceCard
                key={place.id}
                place={place}
              />
            );
          })
        }
      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  places: PropTypes.array,
};

export default NearPlaces;
