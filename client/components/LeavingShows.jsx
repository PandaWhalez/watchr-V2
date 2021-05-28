/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import './styles/Leaving.css';
import LeavingDisplay from './LeavingDisplay.jsx';

const axios = require('axios');

//transition from class to function
const LeavingShows = () => {
  console.log('Made it to login manager!');

  const [service, useService] = useState('');
  const [type, useType] = useState('');
  const [leavingDisplayArray, setLeavingDisplayArray] = useState([]);

 

    // useEffect(() => {
      const handleChange = (e) => {
        e.preventDefault();
        const serviceArray = ['hulu', 'prime', 'netflix'];
        const typeArray = ['movie', 'series'];
        
    
        if (serviceArray.includes(e.target.value.toLowerCase())) {
          useService(`${e.target.value.toLowerCase()}`);
        }
        if (typeArray.includes(e.target.value.toLowerCase())) {
          useType(`${e.target.value.toLowerCase()}`);
        }
    
        
        const options = {
          method: 'GET',
          url: 'https://streaming-availability.p.rapidapi.com/leaving',
          params: { service, country: 'us', type },
          headers: {
            'x-rapidapi-key': 'e0d178da4amsh91f0fb94afc02adp192ddbjsn3dcf07dc4de5',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          },
        };

      axios
          .request(options)
          .then((response) => {
            console.log(response.data.results);
            setLeavingDisplayArray(response.data.results);
            return response.data.results;
          //   response.data.results.forEach((element, index) => {
          //     boxes.push(
          //       <LeavingDisplay index={index} img={element.posterURLs['342']} />,
          //     );
          //   });

          })
          .catch((error) => {
            console.error(error);
          });
        }
        console.log('type is: ', type);
    // });
     
        const refresh = (e) => { 
          e.preventDefault();
          handleChange(e);
        };

    // axiosFetch()
    //   .then(data => {
    //     data.forEach((element, index) => {
    //       boxes.push(
    //               <LeavingDisplay index={index} img={element.posterURLs['342']} />,
    //             );
    //     })
    //   })
    // console.log('axiosFetch returned: ', axiosFetch());


    // axios
    //   .request(options)
    //   .then((response) => {
    //     console.log(response.data.results);
    //     boxes = [];
    //     response.data.results.forEach((element, index) => {
    //       boxes.push(
    //         <LeavingDisplay index={index} img={element.posterURLs['342']} />,
    //       );
    //     });
    //     console.log('boxes: ', boxes);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

  //console.log('bleh', boxes);
  return (
    <div id="leaving">
    <h1>Products Leaving For:</h1>
    <select id="leaving-service" onChange={handleChange}>
        <option>Choose Service:</option>
        <option>Netflix</option>
        <option>Prime</option>
        <option>Hulu</option>
      </select>
      <select id="leaving-service" onChange={handleChange}>
        <option>Choose Type:</option>
        <option>Movie</option>
        <option>Series</option>
      </select>
      <button onClick={refresh}>
        Search
        </button>
    <div id="leaving-container">
      {leavingDisplayArray.length > 0 ? (
      leavingDisplayArray.map((movie) => (
        <LeavingDisplay img={movie.posterURLs['342']} />))
  ) : (<div></div>)}
    </div>
    </div>
  );
};

export default LeavingShows;
