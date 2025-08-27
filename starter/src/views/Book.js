import PropTypes from 'prop-types';
import CoverBook from './CoverBook';
import ShelfBookPicker from './ShelfBookPicker';

const DEFAULT_TITLE = 'No Title Available';
const DEFAULT_AUTHOR = 'Unknown Author';

const Book = ({book, updateBookShelf}) => {
  const title = book.title ?? DEFAULT_TITLE;
  const authors = book.authors
    ? book.authors.length > 1
      ? book.authors.join(', ')
      : book.authors[0]
    : DEFAULT_AUTHOR;

  return (
    <div className="book">
      <div className="book-top">
        <CoverBook imageLinks={book.imageLinks} />
        <ShelfBookPicker
          book={book}
          updateBookShelf={updateBookShelf}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
    shelf: PropTypes.string,
  }).isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;
