import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({rentAmount, places}) => {

  return (
    <Main
      rents={rentAmount}
      places={places}
    />
  );
};

App.propTypes = {
  rentAmount: PropTypes.number.isRequired,
  places: PropTypes.array.isRequired,
};

export default App;
