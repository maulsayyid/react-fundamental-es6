import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ShelfBook from './ShelfBook';
import shelves from '../Shelves';

const CaseBook = ({books, updateBookShelf}) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            shelves
              .filter(shelf => shelf.value !== 'none')
              .map(shelf => {
                const filteredBooks = books.filter(
                  book => book.shelf === shelf.value,
                );
                return (
                  <ShelfBook
                    key={shelf.id}
                    title={shelf.title}
                    books={filteredBooks}
                    updateBookShelf={updateBookShelf}
                  />
                );
              })
          }
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search-link"
          >
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

CaseBook.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default CaseBook;
