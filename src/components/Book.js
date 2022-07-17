import "../styles/book.css";
import ChangeShelf from "./ChangeShelf";

const Book = ({ shelfClass, shelves, book, onUpdateShelf }) => {
  return (
    <div className="book_container">
      <div>
        <img
          alt={book.title}
          style={{
            height: "250px",
            width: "200px",
          }}
          src={book.imageLinks.smallThumbnail}
        />
        <ChangeShelf
          shelfClass={shelfClass}
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

export default Book;
