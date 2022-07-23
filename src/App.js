import { useEffect, useState } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Search from "./pages/Search";

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


  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const onChangeState = (event) => {
    setBooks(event);
  };

  useEffect(() => {
    let active = true;
    if (query && active) {
      BooksAPI.search(query).then((data) => {
        data.error ? setSearchedBooks([]) : setSearchedBooks(data);
      });
    }
    return () => {
      active = false;
      setSearchedBooks([]);
    };
  }, [query]);

  const onChangeQuery = (inputWord) => {
    setQuery(inputWord);
  };

  const onUpdateShelf = (whichBook, whichShelf) => {
    BooksAPI.get(whichBook.id).then((thisBook) => {
      thisBook.shlef = whichShelf;
      BooksAPI.update(thisBook, whichShelf);
    });
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

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Library
              shelves={shelves}
              books={books}
              onUpdateShelf={onUpdateShelf}
            />
          }
        />
        <Route
          path="search"
          element={
            <Search
              onUpdateShelf={onUpdateShelf}
              shelves={shelves}
              onChangeQuery={onChangeQuery}
              searchedBooks={searchedBooks}
              query={query}
              onChangeState={onChangeState}
              books={books}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
