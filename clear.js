'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book.js')

const clearDatabase = async () => {
  await Book.deleteMany({})
}
clearDatabase();
