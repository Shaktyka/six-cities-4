import React from 'react';
import PropTypes from 'prop-types';

const Host = ({host, description}) => {
  const {avatarUrl, id, isPro, name} = host;

  const proClass = isPro ? `property__avatar-wrapper--pro` : ``;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user" id={id}>
        <div className={`property__avatar-wrapper ${proClass} user__avatar-wrapper`}>
          <img
            className="property__avatar user__avatar"
            src={avatarUrl}
            width="74"
            height="74"
            alt={`Host ${name} avatar`}
          />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default Host;
