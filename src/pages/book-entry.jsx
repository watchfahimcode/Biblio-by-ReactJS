import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookEntry() {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [totalPages, setTotalPages] = useState('');
  const [status, setStatus] = useState('Reading');
  const [rating, setRating] = useState('');

  const handleBookTitleChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleAuthorNameChange = (event) => {
    setAuthorName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handlePublicationYearChange = (event) => {
    setPublicationYear(event.target.value);
  };

  const handleTotalPagesChange = (event) => {
    setTotalPages(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleBookEntry = () => {
    // Perform book entry functionality using the form data
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-80">
      <div className="book-entry-form shadow p-4">
        <h1>Book Entry</h1>
        <Form>
          <Form.Group>
            <Form.Label>Book Title:</Form.Label>
            <Form.Control
              type="text"
              value={bookTitle}
              onChange={handleBookTitleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author Name:</Form.Label>
            <Form.Control
              type="text"
              value={authorName}
              onChange={handleAuthorNameChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Genre:</Form.Label>
            <Form.Control
              type="text"
              value={genre}
              onChange={handleGenreChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Publication Year:</Form.Label>
            <Form.Control
              type="date"
              value={publicationYear}
              onChange={handlePublicationYearChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Pages:</Form.Label>
            <Form.Control
              type="number"
              value={totalPages}
              onChange={handleTotalPagesChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="Select Reading Status">Select Status</option>
              <option value="Reading">Reading</option>
              <option value="Finished">Finished</option>
              <option value="Want To Read">Want To Read</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              as="select"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="Select Rating">Select Rating</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Bad">Bad</option>
              <option value="Very Bad">Very Bad</option>
              <option value="Unfinished">Unfinished</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleBookEntry}>
            Add Book
          </Button>
        </Form>
      </div>
    </Container>
  );
}
