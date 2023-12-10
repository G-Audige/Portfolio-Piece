import './App.css';
// Hooks
import { useState } from 'react';
// Components
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// Contexts
import { APIContext } from './Contexts/APIContext';
import { SearchContext } from './Contexts/SearchContext';

function App() {
  const [search, setSearch] = useState({
    searchterm: '',
    index: 0,
  });
  const [book, setBook] = useState('');
  return (
    <div className='App'>
      <Header />
      <SearchContext.Provider value={{ search, setSearch }}>
        <APIContext.Provider value={{ book, setBook }}>
          <Content />
        </APIContext.Provider>
      </SearchContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
