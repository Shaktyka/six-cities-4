import React from 'react';
// import PropTypes from 'prop-types';
import {ReviewParams, RatingToText} from '../../consts.js';

const ReviewsForm = () => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          [...new Array(5)].map((el, i) => {
            return (
              <React.Fragment key={i}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={i + 1}
                  id={`${i + 1}-stars`}
                  type="radio"
                  onClick={() => {
                    // evt.target.value
                  }}
                />
                <label
                  htmlFor={`${i + 1}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={RatingToText[i + 1]}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          }).reverse()
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={ReviewParams.MIN_LENGTH}
        maxLength={ReviewParams.MAX_LENGTH}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount"> {ReviewParams.MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewsForm;
