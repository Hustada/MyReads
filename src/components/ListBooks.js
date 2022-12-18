import React from 'react'
import { Link } from 'react-router-dom'; // import the Link component from react-router-dom
import { BookShelf } from './BookShelf'; // import the BookShelf component

// ListBooks is a functional component that displays a list of bookshelves
// It receives the following props:
//  - books: an array of book objects to display on the bookshelves
//  - updateBook: a function to update the shelf of a book
const ListBooks = ({ books, updateBook }) => {

  // render the bookshelves with titles and lists of books, and a link to the search page
  return (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {/* render the BookShelf component for the currently reading books */}
      <BookShelf 
        books={books}
        title="Currently Reading"
        shelfTitle ="currentlyReading"
        updateBook={updateBook}
      />
      {/* render the BookShelf component for the read books */}
      <BookShelf
        books={books} 
        title="Read"
        shelfTitle="read"
        updateBook={updateBook}
      />
      {/* render the BookShelf component for the want to read books */}
      <BookShelf 
        books={books} 
        title="Want to Read"
        shelfTitle="wantToRead"
        updateBook={updateBook}
      />
    </div>
    {/* create a link to the search page using the Link component */}
    <Link to="/search" className='open-search'>
      Link
    </Link>
  </div>
  )
}

export default ListBooks
