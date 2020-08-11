import React from 'react';
import TabItem from '../tab-item/tab-item.jsx';

const TABS = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const ACTIVE_TAB = TABS[0];

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
