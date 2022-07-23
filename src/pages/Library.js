import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import "../styles/library.css";
import propTypes from 'prop-types';
const Library = ({ onUpdateShelf, shelves, books }) => {
  return (
    <div className="library_containier">
      <h2 className="header">{`My Reads`}</h2>
      <p className="sub_header">Your library for books</p>
      <div className="body">
        {shelves.map((shelf) => (
          <div className="shelves" key={shelf.name}>
            <h2 className="shlef_name">{shelf.name}</h2>
            <hr className="shelf_line" />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Shelf
                onUpdateShelf={onUpdateShelf}
                books={books}
                shelves={shelves}
                shelf={shelf}
              />
            </div>
          </div>
        ))}
      </div>
      <Link to="/search" className="search_button">
        +
      </Link>
    </div>
  );
};

Library.propTypes = {
  onUpdateShelf: propTypes.func,
  shleves: propTypes.array,
  books: propTypes.array

}

export default Library;
