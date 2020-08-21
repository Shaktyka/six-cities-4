import React from 'react';
import PropTypes from 'prop-types';

import ReviewsList from '../reviews-list/reviews-list.jsx';
import ReviewsForm from '../reviews-form/reviews-form.jsx';
import Loader from '../loader/loader.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    const {id, loadReviews} = this.props;
    loadReviews(id);
  };

  componentDidUpdate() {
    //
  };

  render() {
    const {reviews, isLoading, loadError} = this.props;

    return (
      <>
        {
          !isLoading
            ? (<section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                {
                  <ReviewsList reviews={reviews.slice(0, 10)} loadError={loadError} />
                }
                {
                  <ReviewsForm />
                }
              </section>)
            : <Loader />
      }
      </>
    );
  }
}

export default Reviews;
