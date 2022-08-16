import React from 'react'
import { useState } from 'react';
import * as BooksAPI from "../BooksAPI";
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Search = ({ books, updateBook, setBooks }) => {
  const [query, setQuery] = useState("");
  const [booksArr, getBooks] = useState([]);

  const updateSearch = async (query) => {
    setQuery(query);
    if(query !== '') {
      const res = await BooksAPI.search(query, 5)
      .then((res) => {
        if (Array.isArray(res)) {
          res.forEach((book) => {
            books.forEach((bk) => {
              if (book.id === bk.id) {
                  book.shelf = bk.shelf;
              } if (!book.shelf) {
                book.shelf = "none";
              }
            });
          });
          getBooks(
            res.filter(
              (book) => book.authors !== undefined && book.imageLinks !== undefined
            )
          );
        } else {
          getBooks([])
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
      <Link to="/" className="close-search"></Link>
        <div className="search-books-input-wrapper">
          <input className="search-input"
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { booksArr.length ? (booksArr.map((book) => {
            return (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook}/>
            </li>
            )
          })
          ) : (
            <h1 className='no-results'>No Results</h1>
          )}
        </ol>
      </div>
    </div>
  )
}

Search.propTypes = {
  updateSearch: PropTypes.func
}

export default Search