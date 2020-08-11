import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({rentAmount, rentTitles}) => {

  return (
    <Main
      rents={rentAmount}
      titles={rentTitles}
    />
  );
};

App.propTypes = {
  rentAmount: PropTypes.number.isRequired,
  rentTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
