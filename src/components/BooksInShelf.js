import Book from "../components/Books";
import propTypes from "prop-types";

const BooksPerShelf = ({ onUpdateShelf, shelves, book, shelf }) => {
  return (
    <div style={{ position: "relative", right: "-100px" }}>
      {book.shelf === shelf.id ? (
        <Book
          shelves={shelves}
          key={book.title}
          onUpdateShelf={onUpdateShelf}
          book={book}
        />
      ) : (
        ""
      )}
    </div>
  );
};

BooksPerShelf.propTypes = {
  onUpdateShelf: propTypes.func,
  shleves: propTypes.array,
  books: propTypes.array,
  shelf: propTypes.object,
};
export default BooksPerShelf;
