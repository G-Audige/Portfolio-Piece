// import axios from 'axios';
// import React from 'react';
// //Hooks
// import { useEffect, useState } from 'react';

// function Music() {
//   const [music, setMusic] = useState('null');
//   //   const axios = require('axios');

//   //   const options = {
//   //     method: 'GET',
//   //     url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
//   //     params: { q: 'Unorthodox Jukebox' },
//   //     headers: {
//   //       'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
//   //       'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//   //     },
//   //   };
//   const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=Eminem';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
//       'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//     },
//   };

//   const getData = async () => {
//     // const response = await axios.request(options);
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       setMusic(result.data.data);
//       console.log(result.data);
//       console.log(music);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const loaded = () => {
//     return music;
//     // music.map((song) => {
//     //   return (
//     //     <p>
//     //       {song.title}: {song.artist.name}
//     //     </p>
//     //   );
//     // });
//   };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   useEffect(() => {
//     getData();
//   }, [music]);
//   return (
//     <div className='music'>
//       <p>Music</p>
//       {music ? loaded() : loading()}
//     </div>
//   );
// }

// export default Music;
