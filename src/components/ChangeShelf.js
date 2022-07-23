import React from "react";
import "../styles/shelfChanger.css";
import propTyeps from 'prop-types';

const ChangeShelf = ({ book, onUpdateShelf }) => {
 
  return (
    <div className="shelf_changer">
      <select
        defaultValue={book.shelf ? book.shelf : "none"}
        onChange={(event) => onUpdateShelf(book, event.target.value)}
      >
        <option disabled value="move">
          move...
        </option>
        <option value="currentlyReading">currently reading</option>
        <option value="wantToRead">want to read</option>
        <option value="read">read</option>
        <option value="none">none</option>
      </select>
    </div>
  );
};

ChangeShelf.prototype = {
book:propTyeps.array,
onUpdateShelf:propTyeps.function

}

export default ChangeShelf;
