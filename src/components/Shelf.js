import React from "react";
import BooksInShelf from "./BooksInShelf";
import '../styles/library.css'

const Shelf = ({ fetchBook, shelves, shelf, books,onUpdateShelf }) => {
  return (
    <div
      style={{ width:"80vw", overflowX:'scroll' }}
      className="books_per_shelf"
    >
      {books.map((book) => (
        <BooksInShelf fetchBook={fetchBook} shelves={shelves} onUpdateShelf={onUpdateShelf} key={book.id} shelf={shelf} book={book} />
      ))}
    </div>
  );
};

export default Shelf;
