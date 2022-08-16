import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";

const App = () => {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    })
  }, []);

  const updateBook =  async (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });

    navigate("/");
  };

  return (
  <Routes>
    <Route 
      exact path="/search"
      element={
        <Search books={books} updateBook={updateBook} setBooks={setBooks} />
      }
    />
    <Route 
      exact path="/"
      element={
        <ListBooks books={books} updateBook={updateBook} />
      }
    />
    <Route 
      exact path="/details/:id/:title"
      element={
        <BookDetails updateBook={updateBook} />
      }
    />
  </Routes>
  );
}

export default App;
