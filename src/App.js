import { useEffect, useState } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";
import Book from "./components/Book";

const App = () => {
  const shelves = [
    { name: "Currently Reading", id: "currentlyReading" },
    {
      name: "Want to Read",
      id: "wantToRead",
    },
    {
      name: "Read",
      id: "read",
    },
  ];
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [book, setBook] = useState("");

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const onChangeQuery = (inputWord) => {
    setQuery(inputWord);
  };

  const handleSetBooks = (newData) => {
    setBooks(newData);
  };

  useEffect(() => {
    let active = true;
    if (query && active) {
      BooksAPI.search(query).then((data) => {
        console.log(data);
        data.error ? setSearchedBooks([]) : setSearchedBooks(data);
      });
    }
    return () => {
      active = false;
      setSearchedBooks([]);
    };
  }, [query]);

  const onUpdateShelf = (whichBook, whichShelf) => {
    const updatedBooks = books.map((book) => {
      if (book.id === whichBook.id) {
        book.shelf = whichShelf;
        return whichBook;
      }
      return book;
    });
    setBooks(updatedBooks);
    BooksAPI.update(whichBook, whichShelf);
  };

  const fetchBook = (book) => {
    setBook(book);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Library
              shelves={shelves}
              onUpdateShelf={onUpdateShelf}
              books={books}
              fetchBook={fetchBook}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              handleSetBooks={handleSetBooks}
              onUpdateShelf={onUpdateShelf}
              shelves={shelves}
              onChangeQuery={onChangeQuery}
              searchedBooks={searchedBooks}
              query={query}
              books={books}
            />
          }
        />
        {/* <Route
          path="book_details"
          element={
            <BookDetails
              book={book}
              onUpdateShelf={onUpdateShelf}
              shelves={shelves}
              books={books}
            />
          }
        /> */}
      </Routes>
    </div>
  );
};
export default App;
