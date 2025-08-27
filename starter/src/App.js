import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import CaseBook from './views/CaseBook';
import Search from './views/Search';
import * as BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const books = await BooksAPI.getAll();
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateBookShelf = async (book, shelf) => {
    try {
      book.shelf = shelf;
      setBooks(prevBooks => {
        const existingBook = prevBooks.find(b => b.id === book.id);
        if (existingBook) {
          return prevBooks.map(b => (b.id === book.id ? {...b, shelf} : b));
        } else {
          return [...prevBooks, book];
        }
      });
      await BooksAPI.update(book, shelf);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CaseBook
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            books={books}
            updateBookShelf={updateBookShelf}
          />
        }
      />
    </Routes>
  );
}

export default App;
