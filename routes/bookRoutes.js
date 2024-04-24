import express from 'express';
const router = express.Router();
import bookService from '../services/bookService.js';

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({ status: true, data: books });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a specific book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (book) {
      res.json({ status: true, data: book });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new book
router.post('/', async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

// module.exports = router;