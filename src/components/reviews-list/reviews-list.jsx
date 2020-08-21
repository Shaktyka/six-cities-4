import React from 'react';
import PropTypes from 'prop-types';

import Review from '../review/review.jsx';

// Нужна сортировка списка отзывов по дате

const ReviewsList = ({reviews = [], loadError}) => {

  return (
    !loadError
      ?
        <ul className="reviews__list">
          {
            reviews.map((review, i) => {
              return (
                <Review review={review} key={i} />
              );
            })
          }
        </ul>
      : <div>{loadError}</div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
