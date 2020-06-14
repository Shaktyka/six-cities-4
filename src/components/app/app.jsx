import React from 'react';
import Main from '../main/main.jsx';

const App = ({rentAmount}) => {
  // console.log(rentAmount);

  return (
    <Main rents={rentAmount} />
  );
};

export default App;
