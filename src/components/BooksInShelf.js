import Book from "./Book";

const BooksPerShelf = ({fetchBook, shelves, book, shelf, onUpdateShelf }) => {
  return (
    <div style={{ position:"relative", right:"-100px",}}>
      {book.shelf === shelf.id ? (
          <Book fetchBook={fetchBook} shelves={shelves} onUpdateShelf={onUpdateShelf} key={book.title} book={book} />
      ) : (
        ""
      )}
    </div>
  );
};

export default BooksPerShelf;
