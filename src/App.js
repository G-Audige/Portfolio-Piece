import './App.css';
// Hooks
import { useEffect, useState } from 'react';
// Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  // const apiKey = '';

  const url =
    'https://chess-puzzles.p.rapidapi.com/?themes=%5B%22middlegame%22%2C%22advantage%22%5D&rating=1500&themesType=ALL&playerMoves=4&count=25';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f40703f20dmsh86ac0d16e9c5d33p17af6bjsn62dcd48ef5a9',
      'X-RapidAPI-Host': 'chess-puzzles.p.rapidapi.com',
    },
  };

  const getData = async () => {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
