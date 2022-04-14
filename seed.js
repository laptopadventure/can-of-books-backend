'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./models/book.js')

const seedDatabase = async () => {
  await Book.create({
    title: 'Slaughterhouse-Five',
    description: 'Slaughterhouse-Five, or, The Children\'s Crusade: A Duty-Dance with Death is a semi-autobiographic science fiction-infused anti-war novel by Kurt Vonnegut.',
    image:'https://books.google.com/books/publisher/content?id=XlD9DwAAQBAJ&pg=PT5&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2rrqi66C1W2LqQOxwZdWVq0QJfgA&w=1280',
    status: 200
  })
  await Book.create({
    title: 'Holes',
    description: 'Holes is a 1998 young adult novel written by Louis Sachar and first published by Farrar, Straus and Giroux. The book centers on Stanley Yelnats, who is sent to Camp Green Lake, a correctional boot camp in a desert in Texas, after being falsely accused of theft.',
    image: 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780440414803/primary/renditions/700',
    status: 200
  })
  await Book.create({
    title: 'Republic',
    description: 'The Republic is a Socratic dialogue, authored by Plato around 375 BC, concerning justice, the order and character of the just city-state, and the just man.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91MRDNc-mIL.jpg',
    status: 200
  })
}
seedDatabase();
