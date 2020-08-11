import React from 'react';
import Main from '../main/main.jsx';

const App = ({rentAmount, rentTitles}) => {

  return (
    <Main
      rents={rentAmount}
      titles={rentTitles}
    />
  );
};

export default App;
