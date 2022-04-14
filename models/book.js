'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose

const bookSchema = new Schema({
  title: String,
  description: String,
  image: String,
  status: Number,
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
