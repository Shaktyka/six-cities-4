import React from 'react';

const FavoritesEmpty = () => {
  return (
    <>
      <h1 class="visually-hidden">Favorites (empty)</h1>
      <div class="favorites__status-wrapper">
        <b class="favorites__status">Nothing yet saved.</b>
        <p class="favorites__status-description">
          Save properties to narrow down search or plan yor future trips.
        </p>
      </div>
    </>
  );
};

export default FavoritesEmpty;
