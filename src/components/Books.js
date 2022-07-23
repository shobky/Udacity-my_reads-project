import "../styles/book.css";
import ChangeShelf from "./ChangeShelf";
import propTypes from "prop-types";
import myPic from '../black-suit.jpg';

const Book = ({ onUpdateShelf, shelves, book }) => {
  return (
    <div className="book_container">
      <div>
        <img
          alt={book.title}
          style={{
            height: "250px",
            width: "200px",
          }}
          src={
            book.imageLinks
              ? book.imageLinks.smallThumbnail
              : myPic
          }
        />

        <ChangeShelf
          shelves={shelves}
          book={book}
          onUpdateShelf={onUpdateShelf}
        />
      </div>

      <h4 className="book_title">{book.title}</h4>
      <p className="book_author" style={{ textAlign: "center" }}>
        {book.authors}
      </p>
    </div>
  );
};

Book.propTypes = {
  onUpdateShelf: propTypes.func,
  books: propTypes.array,
  shelves: propTypes.array,
};

export default Book;
