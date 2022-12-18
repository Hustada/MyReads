import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";

// App component is the root component for the application
const App = () => {
  // useNavigate hook is used to navigate to different routes
  let navigate = useNavigate();

  // books state variable stores the list of books
  // setBooks is the function used to update the books state variable
  const [books, setBooks] = useState([]);

  // useEffect hook is used to fetch the list of books from the BooksAPI when the component mounts
  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    })
  }, []);

  // updateBook function is used to update a book's shelf in the BooksAPI and update the books state variable
  const updateBook =  async (book, shelf) => {
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });

    // navigate to the root route after updating the book
    navigate("/");
  };

  // Routes component is used to define the different routes for the application
  // Each route is associated with a specific component that is rendered when the route is active
  return (
  <Routes>
    <Route 
      exact path="/search"
      element={
        // Search component is rendered when the /search route is active
        // books and updateBook props are passed to the Search component
        <Search books={books} updateBook={updateBook} setBooks={setBooks} />
      }
    />
    <Route 
      exact path="/"
      element={
        // ListBooks component is rendered when the / route is active
        // books and updateBook props are passed to the ListBooks component
        <ListBooks books={books} updateBook={updateBook} />
      }
    />
    <Route 
      exact path="/details/:id/:title"
      element={
        // BookDetails component is rendered when the /details/:id/:title route is active
        // updateBook prop is passed to the BookDetails component
        <BookDetails updateBook={updateBook} />
      }
    />
  </Routes>
  );
}

export default App;
