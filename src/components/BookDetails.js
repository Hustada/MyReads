import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BookDetails = ({updateBook}) => {
  const location = useLocation();
  const book = (location.state.data);
  const title = book.title;
  const author = book.authors
  const category = book.categories;
  const description = book.description;
  const pageCount = book.pageCount;
  const publisher = book.publisher;
  const publishedDate = book.publishedDate;
  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : ""
  const shelf = book.shelf;

  const handleChange = (e) => {
    updateBook(book, e.target.value)
  }

  return (
  <div className='book-details-wrapper'>
    <div className='book'>
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
            defaultValue={book.shelf}
            onChange={handleChange}
          >
            <option value="none">
              Move to...
            </option>
            <option value="currentlyReading">
              Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
      <div>
        <h2>
          <strong>Title:</strong> {title}
        </h2>
        <p>
          <strong>Authors:</strong> {author}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Published Date:</strong> {publishedDate}
        </p>
        <p>
          <strong>Publisher:</strong> {publisher}
        </p>
        <p>
          <strong>Page Count:</strong> {pageCount}
        </p>
        <p>
          <strong>Shelf:</strong> {shelf}
        </p>
        <i className='book-description'>{description}</i>
      </div>
      <Link className='details-back-link' to={'/'}>Back</Link>
      
  </div>
  )
}

export default BookDetails