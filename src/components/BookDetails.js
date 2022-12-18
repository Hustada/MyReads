import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BookDetails = ({updateBook}) => {
  // Access the current location in the application
  const location = useLocation();
  // Extract the book data from the location state
  const book = (location.state.data);
  // Extract the book details from the book object
  const title = book.title;
  const author = book.authors
  const category = book.categories;
  const description = book.description;
  const pageCount = book.pageCount;
  const publisher = book.publisher;
  const publishedDate = book.publishedDate;
  // Extract the thumbnail image URL from the book object, or set it to an empty string if it is not available
  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : ""
  const shelf = book.shelf;

  // Define a function to handle changes to the shelf dropdown menu
  const handleChange = (e) => {
    // Call the updateBook function with the book object and the selected shelf value as arguments
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
            // Set the background image of the div to the thumbnail URL
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
         <div className="book-shelf-changer">
          {/* Render a dropdown menu to select the shelf of the book */}
          <select
            // Set the default value of the dropdown menu to the current shelf of the book
            defaultValue={book.shelf}
            // Call the handleChange function when the dropdown menu value changes
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
      {/* Render a div element to display the book details */}
      <div>
        {/* Render a heading element to display the title of the book */}
        <h2>
          <strong>Title:</strong> {title}
        </h2>
        {/* Render a paragraph element to display the authors of the book */}
        <p>
          <strong>Authors:</strong> {author}
        </p>
        {/* Render a paragraph element to display the categories of the book */}
        <p>
          <strong>Category:</strong> {category}
        </p>
        {/* Render a paragraph element to display the published date of the book */}
        <p>
          <strong>Published Date:</strong> {publishedDate}
        </p>
        {/* Render a paragraph element to display the publisher of the book */}
        <p>
          <strong>Publisher:</strong> {publisher}
        </p>
        {/* Render a paragraph element to display the page count of the book */}
        <p>
          <strong>Page Count:</strong> {pageCount}
        </p>
        {/* Render a paragraph element to display the shelf of the book */}
        <p>
          <strong>Shelf:</strong> {shelf}
        </p>
        {/* Render an italicized element to display the description of the book */}
        <i className='book-description'>{description}</i>
      </div>
      <Link className='details-back-link' to={'/'}>Back</Link>
      
  </div>
  )
}

export default BookDetails
