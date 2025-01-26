const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const books= require('./data.json');

//finding by id
const findBookById = (id) => books.find(book => book.book_id === id);

//new book
app.post('/books', (req, res)=>{
  const {book_id, title, author, genre, year, copies} = req.body;
  if (!book_id || !title || !author || !genre || typeof year !== 'number' || typeof copies !== 'number'){
    return res.status(400).json({error: 'Invalid book data.'});
  }

  if (findBookById(book_id)){
    return res.status(400).json({error : `Book with ID ${book_id} already exists.`});

  }
  books.push({book_id, title, author, genre, year, copies});
  res.status(200).json({book_id, title, author, genre, year, copies});
});

// access to all books 
app.get('/books', (req, res)=>{
  return res.json(books);
})

// get book by id 
app.get ('/books/:id', (req, res)=>{
  const book = findBookById(req.params.id);
  if (!book){
    return res.status(404).json({error: `Book with ID ${req.params.id} not found.`});
  }
  res.json(book);
});

// update book by id
app.get ('/books/:id', (req, res)=>{
  const book = findBookById(req.params.id);
  if (!book){
    return res.status(404).json({error: `Book with ID ${req.params.id} not found.`});
  }
  Object.assign(book, req.body);
  res.json(book);
});

// delete book by id
app.delete('/books/:id', (req, res)=>{
  const index = books.findIndex(book => book.book_id === req.params.id);
  if (index === -1){
    return res.status(404)/json({error: `Book with ID ${req.params.id} not found.`});
  }
  books.splice(index, 1);
  res.json({message: `Book with ID ${req.params.id} deleted`});
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})