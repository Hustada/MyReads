import React from 'react'
import PropTypes from 'prop-types';

// Book component that displays a book and allows the user to move it to a different shelf
const Book = ({ book, updateBook, shelfTitle }) => {
  // If the book has imageLinks defined and a thumbnail, set the thumbnail variable. Otherwise, set it to an empty string.
  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : "";

  // Function to be called when the user selects a new shelf for the book
  const handleChange = (e) => {
    // Call the updateBook function, passing in the book and the selected shelf value
    updateBook(book, e.target.value)
  }

  // Array of shelf objects, containing the shelf name and display name
  const shelves = [
    {id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading"},
    {id: "2", shelfName: "wantToRead", shelfDisplayName: "Want to Read"},
    {id: "3", shelfName: "read", shelfDisplayName: "Read"},
    {id: "4", shelfName: "none", shelfDisplayName: "none"}
  ]

  // Render the book component
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          {/* Render a select element with options for each shelf, and bind the handleChange function to the onChange event */}
          <select
            onChange={handleChange}
            defaultValue={book.shelf}
          >
            <option value="move" disabled>Move to...</option>
            {/* Map over the shelves array, rendering an option element for each shelf */}
            {shelves.map((shelf, index) => {
              return(
              <option key={index} value={shelf.shelfName}>
                {shelf.shelfDisplayName}
              </option>)
            })}
          </select>
        </div>
      </div>
      {/* Render the book title */}
      <div className="book-title">{book.title}</div>
      {/* Render the book authors */}
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

// Define the prop types for the Book component
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func
};

// Export the Book component
export default Book
