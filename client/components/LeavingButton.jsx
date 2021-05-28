/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './styles/LoginManager.css';
import { Link, Redirect } from 'react-router-dom';

const LeavingButton = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect === true) return <Redirect to="/leaving" />;
  return (
    <div id="leaving-button">
      <button className="button" onClick={handleClick}>
        Leaving Shows
      </button>
    </div>
  );
};

export default LeavingButton;
