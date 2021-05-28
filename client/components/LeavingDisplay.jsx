/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles/Leaving.css';

const LeavingDisplay = (props) => {
    console.log('props is here: ', props);

return (
  <div id={props.index}>
    <img src={props.img} />
  </div>
 )
};

export default LeavingDisplay;
