'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book.js')

const seedDatabase = async () => {
  await Book.create({
    title: 'Slaughterhouse-Five',
    description: 'Slaughterhouse-Five, or, The Children\'s Crusade: A Duty-Dance with Death is a semi-autobiographic science fiction-infused anti-war novel by Kurt Vonnegut.',
    status: 200,
    email: process.env.SEED_EMAIL
  })
  await Book.create({
    title: 'Holes',
    description: 'Holes is a 1998 young adult novel written by Louis Sachar and first published by Farrar, Straus and Giroux. The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft.',
    status: 200,
    email: process.env.SEED_EMAIL
  })
  await Book.create({
    title: 'Republic',
    description: 'The Republic is a Socratic dialogue, authored by Plato around 375 BC, concerning justice, the order and character of the just city-state, and the just man.',
    status: 200,
    email: process.env.SEED_EMAIL
  })
}
seedDatabase();
