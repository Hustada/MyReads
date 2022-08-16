import React from 'react'
import { Link } from 'react-router-dom';
import { BookShelf } from './BookShelf';

const ListBooks = ({ books, updateBook }) => {

  return (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <BookShelf 
        books={books}
        title="Currently Reading"
        shelfTitle ="currentlyReading"
        updateBook={updateBook}
      />
      <BookShelf
        books={books} 
        title="Read"
        shelfTitle="read"
        updateBook={updateBook}
      />
      <BookShelf 
        books={books} 
        title="Want to Read"
        shelfTitle="wantToRead"
        updateBook={updateBook}
      />
    </div>
    <Link to="/search" className='open-search'>
      Link
    </Link>
  </div>
  )
}

export default ListBooks