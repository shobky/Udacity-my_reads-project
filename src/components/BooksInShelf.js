import Book from "./Book";

const BooksPerShelf = ({ shelves, book, shelf, onUpdateShelf }) => {
  return (
    <div>
      {book.shelf === shelf.id ? (
          <Book shelves={shelves} onUpdateShelf={onUpdateShelf} key={book.title} book={book} />
      ) : (
        ""
      )}
    </div>
  );
};

export default BooksPerShelf;
