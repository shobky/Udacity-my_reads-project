import React from "react";
import BooksInShelf from "./BooksInShelf";

const Shelf = ({ shelves, shelf, books,onUpdateShelf }) => {
  return (
    <div
      style={{ minHeight:"62vh", display: "flex", justifyContent: "center", overflowX:'scroll' }}
      className="books_per_shelf"
    >
      {books.map((book) => (
        <BooksInShelf shelves={shelves} onUpdateShelf={onUpdateShelf} key={book.id} shelf={shelf} book={book} />
      ))}
    </div>
  );
};

export default Shelf;
