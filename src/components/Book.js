import React from 'react'
import PropTypes from 'prop-types';

const Book = ({ book, updateBook, shelfTitle }) => {
  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : "";

  const handleChange = (e) => {
    updateBook(book, e.target.value)
  }

  const shelves = [
    {id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading"},
    {id: "2", shelfName: "wantToRead", shelfDisplayName: "Want to Read"},
    {id: "3", shelfName: "read", shelfDisplayName: "Read"},
    {id: "4", shelfName: "none", shelfDisplayName: "none"}
  ]

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
          <select
            onChange={handleChange}
            defaultValue={book.shelf}
          >
            <option value="move" disabled>Move to...</option>
            {shelves.map((shelf, index) => {
              return(
              <option key={index} value={shelf.shelfName}>
                {shelf.shelfDisplayName}
              </option>)
            })}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func
};


export default Book