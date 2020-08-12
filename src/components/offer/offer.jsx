import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import PropertyGallery from '../property-gallery/property-gallery.jsx';
import PropertyInside from '../property-inside/property-inside.jsx';
import Host from '../host/host.jsx';
import NearPlaces from '../near-places/near-places.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';

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
                {
                  <ReviewsForm />
                }
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
