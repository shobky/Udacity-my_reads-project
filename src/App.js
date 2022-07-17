import { useEffect, useState } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/Library";
import Search from "./pages/Search";
const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  }, []);

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



  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Library onUpdateShelf={onUpdateShelf} books={books} />}
        />
        <Route
          path="search"
          element={
            <Search  onUpdateShelf={onUpdateShelf} books={books} />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
