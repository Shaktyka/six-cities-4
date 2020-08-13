import React from 'react';

import {Link} from 'react-router-dom';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import {AppRoute} from '../../consts.js';

const NotFound = () => {
  return (
    <div className="page page--favorites-empty">
      <Header />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">404 Not Found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 Error</b>
              <p className="favorites__status-description">
                Let&apos;s find something else on the
                <Link to={AppRoute.ROOT} style={{color: `#4481c3`}}> main page</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
