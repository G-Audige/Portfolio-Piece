import axios from 'axios';
import React from 'react';
//Hooks
import { useEffect, useState } from 'react';

function Music() {
  const [data, setData] = useState(null);
  //   const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: 'eminem' },
    headers: {
      'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  const getData = async () => {
    const response = await axios.request(options);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>Music</div>;
}

export default Music;
