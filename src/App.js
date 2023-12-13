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
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(-1);
  const [books, setBooks] = useState('');
  const [ID, setId] = useState('');
  return (
    <div className='App'>
      <Header />
      <SearchContext.Provider value={{ search, setSearch, index, setIndex }}>
        <APIContext.Provider value={{ books, setBooks, ID, setId }}>
          <Content />
        </APIContext.Provider>
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
