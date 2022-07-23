import React from "react";
import "../styles/search.css";
import Book from "../components/Books";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
import * as BooksAPI from "../utils/BooksAPI";
import propTypes from "prop-types";
const Search = ({
  books,
  onChangeState,
  shelves,
  searchedBooks,
  onChangeQuery,
  onUpdateShelf,
}) => {
  const heandleChange = (e) => {
    onChangeQuery(e.target.value.toUpperCase());
  };

  const updataState = () => {
    BooksAPI.getAll().then((data) => {
      onChangeState(data);
    });
  };
  return (
    <div className="search_container">
      <Link onClick={updataState} to="/" className="back">
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
          {searchedBooks.map((searchdBook) => {
            const mutualBook = books.find(
              (homeBook) => homeBook.id === searchdBook.id
            );
            if (mutualBook) {
              searchdBook.shelf = mutualBook.shelf;
            } else {
              searchdBook.shelf = "none";
            }
            return (
              <div key={searchdBook.id} className="book_in_search">
                <Book
                  onUpdateShelf={onUpdateShelf}
                  shelves={shelves}
                  book={searchdBook}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onUpdateShelf: propTypes.func,
  shleves: propTypes.array,
  books: propTypes.array,
  onChangeQuery: propTypes.func,
  searchedBooks: propTypes.array,
  onChangeState: propTypes.func,
};

export default Search;
