import React, { useState } from 'react';
import MovieInput from './MovieInput.jsx';
import DisplayContainer from './DisplayContainer.jsx';
import './styles/HomePage.css';
import LeavingButton from './LeavingButton.jsx';

const HomePage = () => {
  const [posterUrl, setPosterUrl] = useState('../../assets/charlesliarliar.png'); 
  const [amazon, setAmazon] = useState(true);
  const [hulu, setHulu] = useState(true);
  const [netflix, setNetflix] = useState(true);

  const handleResponse = (data) => {
    data.amazon ? setAmazon(true) : setAmazon(false);
    data.hulu ? setHulu(true) : setHulu(false);
    data.netflix ? setNetflix(true) : setNetflix(false);

    setPosterUrl(data.poster);
  };

  return (
    <div id="homepage-container">
      <MovieInput onResponse={handleResponse}/>
      <LeavingButton />
      <DisplayContainer 
        posterUrl={posterUrl} 
        streams={[amazon, hulu, netflix]}
      />
    </div>
  );
};

export default HomePage;
