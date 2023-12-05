import axios from 'axios';
import React from 'react';
//Hooks
import { useEffect, useState } from 'react';

function Music() {
  const [music, setMusic] = useState('null');
  //   const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: 'bruno mars' },
    headers: {
      'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  const getData = async () => {
    const response = await axios.request(options);
    setMusic(response.data.data);
    console.log(music[0].title);
  };
  const loaded = () => {
    return music.map((song) => {
      return <p>{song.title}</p>;
    });
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>Music</p>
      {music ? loaded() : loading()}
    </div>
  );
}

export default Music;
