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
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState('');
  const [showBook, setShowBook] = useState(false);
  return (
    <div className='App'>
      <Header />
      <SearchContext.Provider value={{ search, setSearch, index, setIndex }}>
        <APIContext.Provider value={{ books, setBooks, showBook, setShowBook }}>
          <Content />
        </APIContext.Provider>
      </SearchContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
