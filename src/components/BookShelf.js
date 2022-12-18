import React from 'react'
import Book from './Book' // import the Book component
import { Link } from 'react-router-dom' // import the Link component from react-router-dom to create a link to the book details page

// BookShelf is a functional component that displays a bookshelf with a title and a list of books
// It receives the following props:
//  - books: an array of book objects to display on the bookshelf
//  - updateBook: a function to update the shelf of a book
//  - shelfTitle: the title of the shelf to display
//  - title: the title of the bookshelf
export const BookShelf = ({ books, updateBook, shelfTitle, title }) => {
  
  // render the bookshelf with a title, a list of books, and a link to the book details page for each book
  return (
    <div>
      <div className="bookshelf">
        <h1 className="bookshelf-title">{title}</h1>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {// iterate over the books array and render a Book component for each book
            books.map((book) => {
              // only render the book if it belongs to the shelf specified by shelfTitle
              return book.shelf === shelfTitle &&
              <li key={book.id}>
                {/* render the Book component with the book object, the updateBook function, and the shelfTitle */}
                <Book book={book} updateBook={updateBook} shelfTitle={shelfTitle} />
                {/* create a link to the book details page using the Link component */}
                <Link className='details-link' to={`/details/${book.id}/${book.title}`} state={{ data: book }}>Book Details</Link>
              </li>
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
