// import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);
  const[cdate, setCdate] = useState(date);


  const UpdateTime = () => {
    time = new Date ().toLocaleTimeString();
    setCtime(time);
  };
 
  setInterval(UpdateTime,1000)

  const updateDate = () => {
    date = new Date ().toLocaleDateString();
    setCdate(date);
  };
  setInterval(updateDate, )

  return (
    <>
     <h1>{ctime}</h1>
     <h2>{cdate}</h2>
    </>
  );
}

// export default App;
// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};



// export default App;



// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default App
