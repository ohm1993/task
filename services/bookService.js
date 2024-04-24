import Book from '../models/book.js';

const getAllBooks = async () => {
  try {
    return await Book.findAll();
  } catch (error) {
    throw error;
  }
};

const getBookById = async (id) => {
  try {
    return await Book.findByPk(id);
  } catch (error) {
    throw error;
  }
};

const createBook = async (bookData) => {
  try {
    return await Book.create(bookData);
  } catch (error) {
    throw error;
  }
};

export default {
  getAllBooks,
  getBookById,
  createBook
};
