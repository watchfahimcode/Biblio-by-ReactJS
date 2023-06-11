import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookList() {
  const [bookList, setBookList] = useState([]);

  // Simulated book data for demonstration purposes
  const initialBooks = [
    {
      id: 1,
      bookTitle: 'Book 1',
      authorName: 'Author 1',
      genre: 'Genre 1',
      publicationYear: '2022-01-01',
      totalPages: 300,
      status: 'Reading',
      rating: 'Good',
    },
    {
      id: 2,
      bookTitle: 'Book 2',
      authorName: 'Author 2',
      genre: 'Genre 2',
      publicationYear: '2021-03-15',
      totalPages: 250,
      status: 'Finished',
      rating: 'Very Good',
    },
  ];

  useEffect(() => {
    // Fetch book data from API or local storage
    // For now, using the initialBooks array as the data source
    setBookList(initialBooks);
  }, []);

  const handleUpdate = (bookId) => {
    // Handle update functionality for the book with the given ID
    console.log('Update book with ID:', bookId);
  };

  const handleDelete = (bookId) => {
    // Handle delete functionality for the book with the given ID
    console.log('Delete book with ID:', bookId);
  };

  return (
    <Container className="mt-5">
      <h1>Book List</h1>
      {bookList.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Author Name</th>
              <th>Genre</th>
              <th>Publication Year</th>
              <th>Total Pages</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.bookTitle}</td>
                <td>{book.authorName}</td>
                <td>{book.genre}</td>
                <td>{book.publicationYear}</td>
                <td>{book.totalPages}</td>
                <td>{book.status}</td>
                <td>{book.rating}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdate(book.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
