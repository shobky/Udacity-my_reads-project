import React from "react";
import BooksInShelf from "./BooksInShelf";
import propTypes from "prop-types";
import "../styles/library.css";

const Shelf = ({ onUpdateShelf, shelves, shelf, books }) => {
  return (
    <div
      style={{ width: "80vw", overflowX: "scroll" }}
      className="books_per_shelf"
    >
      {books.map((book) => (
        <BooksInShelf
          onUpdateShelf={onUpdateShelf}
          shelves={shelves}
          key={book.id}
          shelf={shelf}
          book={book}
        />
      ))}
    </div>
  );
};

Shelf.propTypes = {
  onUpdateShelf: propTypes.func,
  shleves: propTypes.array,
  books: propTypes.array,
  shelf: propTypes.object,
};
export default Shelf;
