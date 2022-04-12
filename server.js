'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// database
const mongoose = require('mongoose');
const Book = require('./models/book.js');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose has connected.'));

app.get('/books', async (request, response) => {
  const books = await Book.find({})
  response.send(books)
})

app.post('/books', async (request, response) => {
  try{
    const newBook = await Book.create(request.body);
    response.status('201').send(newBook);
  }catch(error) {
    response.status('500').send(error.message)
  }
})

app.delete('/books/:id', async (request, response, next) => {
  try{
    await Book.findByIdAndDelete(request.params.id)
    response.status('204').send('Book was deleted');
  }catch(error) {
    next(error.message);
  }
})

app.put('/books/:_id', async (request, response, next) => {
  try{
    const result = await Book.findOneAndUpdate({_id: request.params.id}, request.body);
    response.status('200').send(result);
  }catch(error) {
    next(error.message);
  }
})

app.get('/test', (request, response) => {
  response.send('test request received')
})

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
