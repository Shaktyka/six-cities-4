import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import {formatInitCap, formatRating} from '../../utils.js';

const Card = ({place}) => {
  const {
    id,
    images,
    isFavorite,
    isPremium,
    price,
    rating,
    title,
    type,
  } = place;

  const isFavoriteClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card" id={id}>
      {
        isPremium
        &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onClick={(evt) => evt.preventDefault()}>
          <img
            className="place-card__image"
            src={images[0]}
            width="260"
            height="200"
            alt={`${title} image`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavoriteClass} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${formatRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{formatInitCap(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  place: PropTypes.object.isRequired,
};

export default Card;
