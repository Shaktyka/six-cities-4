import React from 'react';
import PropTypes from 'prop-types';

const PropertyGallery = ({images = []}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          images.map((image, i) => {
            return (
              <div className="property__image-wrapper" key={i}>
                <img className="property__image" src={image} alt={`Photo ${i}`} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default PropertyGallery;
