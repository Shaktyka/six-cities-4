import React from 'react';
// import PropTypes from 'prop-types';

import TabItem from '../tab-item/tab-item.jsx';
import {TABS, ACTIVE_TAB} from '../../consts.js';

const Tabs = () => {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            TABS.map((tab, i) => {
              const isActive = tab === ACTIVE_TAB ? true : false;
              return (<TabItem
                key={i}
                location={tab}
                isActive={isActive}
              />);
            })
          }
        </ul>
      </section>
    </div>
  );
};

export default Tabs;
