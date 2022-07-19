import React, { useEffect } from "react";
import "../styles/search.css";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import * as BooksAPI from '../utils/BooksAPI'

const Search = ({handleSetBooks,books, shelves, searchedBooks, onChangeQuery, onUpdateShelf }) => {
  const heandleChange = (e) => {
    onChangeQuery(e.target.value.toUpperCase());
  };

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      handleSetBooks(data);
    });
  }, [books]);

  const shelfClass = "change_shlef";

  return (
    <div className="search_container">
      <Link to="/" className="back">
        <GrFormPreviousLink />
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="search_input"
          placeholder="Search by Title/Author"
          type="text"
          onChange={(e) => heandleChange(e)}
        />
      </form>
      <div className="center">
        <div className="books_container">
          {searchedBooks.map((searchdBook) => (
            <div key={searchdBook.id} className="book_in_search">
              <Book
                shelfClass={shelfClass}
                onUpdateShelf={onUpdateShelf}
                shelves={shelves}
                book={searchdBook}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
