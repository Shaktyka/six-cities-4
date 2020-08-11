import React from 'react';
import {nanoid} from 'nanoid';

import Header from '../header/header.jsx';
import Tabs from '../tabs/tabs.jsx';
import MapBlock from '../map-block/map-block.jsx';
import Card from '../card/card.jsx';

const Main = ({rents, titles}) => {

  const cardsList = titles.map((title) => (
    <Card
      title={title}
      key={nanoid(6)}
    />
  ));

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
              <b className="places__found">{rents} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>

              </form>
              <div className="cities__places-list places__list tabs__content">

                {cardsList}

              </div>
            </section>

            <MapBlock />

          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
