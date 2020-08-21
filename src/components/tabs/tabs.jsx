import React from 'react';
import PropTypes from 'prop-types';

import TabItem from '../tab-item/tab-item.jsx';
import Loader from '../loader/loader.jsx';
import {ACTIVE_TAB} from '../../consts.js';

const Tabs = (props) => {
  const {cities} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        {
          cities.length !== 0 ?
          <ul className="locations__list tabs__list">
            {
              cities.map((city, i) => {
                const isActive = city === ACTIVE_TAB ? true : false;
                return (<TabItem
                  key={i}
                  location={city}
                  isActive={isActive}
                />);
              })
            }
          </ul>
          :
          <Loader />
        }
      </section>
    </div>
  );
};

Tabs.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default Tabs;
