import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// Moment поставить
import {formatRating} from '../../utils.js';

const Review = ({review}) => {
  const {
    comment,
    date,
    id,
    rating,
    user,
  } = review;

  const {avatarUrl, id: userId, name} = user; // isPro ?

  return (
    <li className="reviews__item">
      <div className="reviews__user user" id={userId}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54" height="54"
            alt={`${name} avatar`}
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info" id={id}>
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${formatRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{moment(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
