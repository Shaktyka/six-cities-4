import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Tabs from '../tabs/tabs.jsx';
import Filter from '../filter/filter.jsx';
import MapBlock from '../map-block/map-block.jsx';
import CardsList from '../cards-list/cards-list.jsx';

const city = `Amsterdam`;

const Main = ({places}) => {

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <Tabs />

        <div className="cities">

          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{places.length} places to stay in {city}</b>
              <Filter />
              <CardsList places={places} />
            </section>

            <MapBlock places={places} />

          </div>

        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  places: PropTypes.array.isRequired,
};

export default Main;
