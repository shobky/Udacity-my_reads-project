import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";
import "../styles/library.css";

const Library = ({ books, onUpdateShelf }) => {
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
  return (
    <div className="library_containier">
        <h2 className="header">{`My_Read<3`}</h2>
      <div className="body">
        {shelves.map((shelf) => (
          <div className="shelves" key={shelf.name} >
            <h2 className="shlef_name">{shelf.name}</h2>
            <hr className="shelf_line"/>
            <Shelf onUpdateShelf={onUpdateShelf} books={books} shelves={shelves} shelf={shelf} />
          </div>
        ))}
      </div>
      <Link to="/search" className="search_button">
        +
      </Link>
    </div>
  );
};

export default Library;
