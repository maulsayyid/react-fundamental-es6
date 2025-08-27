import PropTypes from 'prop-types';

const CoverBook = ({imageLinks}) => {
  const thumbnail = imageLinks?.thumbnail ?? '';

  const coverStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url("${thumbnail}")`,
  };

  return (
    <div
      className="book-cover"
      style={coverStyle}
    ></div>
  );
};

CoverBook.propTypes = {
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
};

export default CoverBook;
