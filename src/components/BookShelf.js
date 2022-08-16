import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

export const BookShelf = ({ books, updateBook, shelfTitle, title }) => {
  
  return (
    <div>
      <div className="bookshelf">
        <h1 className="bookshelf-title">{title}</h1>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return book.shelf === shelfTitle &&
              <li key={book.id}>
                <Book book={book} updateBook={updateBook} shelfTitle={shelfTitle} />
                <Link className='details-link' to={`/details/${book.id}/${book.title}`} state={{ data: book }}>Book Details</Link>
              </li>
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
