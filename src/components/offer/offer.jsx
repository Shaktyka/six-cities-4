import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import PropertyGallery from '../property-gallery/property-gallery.jsx';
import PropertyInside from '../property-inside/property-inside.jsx';
import Host from '../host/host.jsx';
import NearPlaces from '../near-places/near-places.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';

import {formatInitCap, formatRating} from '../../utils.js';
import {userComment} from '../../mocks.js';

const REVIEWS = [userComment];

const premiumMark = (
  <div className="property__mark">
    <span>Premium</span>
  </div>
);

const Offer = (props) => {
  const {offer} = props;
  console.log(offer);

  const {
    bedrooms,
    city,
    description,
    goods,
    host,
    id,
    images,
    isFavorite,
    isPremium,
    location,
    maxAdults,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  const favoriteClass = isFavorite ? `property__bookmark-button--active` : ``;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property" id={id}>
          {
            <PropertyGallery images={images.slice(0, 6)} />
          }
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && premiumMark
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${favoriteClass} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${formatRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {formatInitCap(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {
                  <PropertyInside properties={goods} />
                }
              </div>
              {
                <Host host={host} description={description} />
              }
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{REVIEWS.length}</span>
                </h2>
                {
                  <ReviewsList reviews={REVIEWS} />
                }
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating"
                      value="5" id="5-stars" type="radio" />
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating"
                      value="4" id="4-stars" type="radio" />
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating"
                      value="3" id="3-stars" type="radio" />
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating"
                      value="2" id="2-stars" type="radio" />
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating"
                      value="1" id="1-star" type="radio" />
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set
                      <span className="reviews__star">rating</span>
                      and describe your stay with at least
                      <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          {
            <NearPlaces />
          }
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
};

export default Offer;
