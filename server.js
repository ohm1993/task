import express from 'express';
import BookModel from './models/book.js';
import sequelize from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
const app = express();

/* Middleware to parse JSON request bodies */
app.use(express.json());
app.use('/books', bookRoutes);

/* Middleware to handle unhandled routes */
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

/* Error handling middleware */
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

/* Test route */
app.get('/', (req, res) => {
  try {
    res.json({ message: 'Server is running' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/*  Handle unhandled promise rejections */
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

/** Handle uncaught exceptions */
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

export default server;

