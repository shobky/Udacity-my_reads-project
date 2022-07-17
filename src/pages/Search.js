import React, { useState } from "react";
import "../styles/search.css";
import Book from "../components/Book";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

const Search = ({ books, onUpdateShelf }) => {
  const [query, setQuery] = useState("");

  const heandleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query.trim());
  };

  const renderBooks =
    query === ""
      ? books
      : books.filter((searched) =>
          searched.title.toLowerCase().includes(query.toLowerCase())
        );
  // ) &&
  // books.filter((searched) =>
  //   searched.authors.toLowerCase().includes(query.toLowerCase())
  // );

  const shelfClass = "change_shlef";

  return (
    <div className="search_container">
      <Link to="/" className="back">
        <GrFormPreviousLink />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="search_input"
          placeholder="Search by Title/Author"
          type="text"
          onChange={heandleChange}
        />
      </form>
      <div className="center">
        <div className="books_container">
          {renderBooks.map((book) => (
            <div key={book.title} className="book_in_search">
              <Book
                shelfClass={shelfClass}
                onUpdateShelf={onUpdateShelf}
                book={book}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
