import React from "react";
import "../styles/shelfChanger.css";

const ChangeShelf = ({shelfClass, book, onUpdateShelf }) => {
  //   const [input, setInput] = useState("");

  //   const camelize = (str) => {
  //     return str
  //       .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
  //         return index === 0 ? word.toLowerCase() : word.toUpperCase();
  //       })
  //       .replace(/\s+/g, "");
  //   };
  //   const handleChange = (e) => {
  //     setInput({ name: e.value, id: camelize(e.value) });
  //   };
  //   const addShelf = (e) => {
  //     e.preventDefault();
  //     shelves.push(input);
  //   };

  return (
    <div className={`shelf_changer ${shelfClass}`}>
      {/* <form onSubmit={addShelf}>
        <input
          onChange={(e) => handleChange(e.target)}
          type="text"
          placeholder="add a shelf"
        />
      </form> */}
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
        <option disabled value="none">
          none
        </option>
        <option></option>
      </select>
    </div>
  );
};

export default ChangeShelf;
