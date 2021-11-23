// class to create book objets
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

//  retreive books from the local storage
const getBook = () => {
  let books;

  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

//  function to add books to the local storage
const addBook = (book) => {
  const books = getBook();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const createTable = (book) => {
  const table = document.getElementById('table');
  const tr = document.createElement('div');
  tr.innerHTML = `<div'>
  <div>${book.title}</div>
  <div>${book.author}</div>
  <button type="button" id="${book.id}" class="delete">Remove</button>
  <hr>
  </div>`;
  table.appendChild(tr);
};

//  function to show books in the browser
const displayBooks = () => {
  const books = getBook();
  books.forEach((book) => {
    createTable(book);
  });
};

// delete books from the browser view
const deleteBook = (element) => {
  element.parentElement.remove();
};

// delete from local storage
const removeBook = (id) => {
  let books = getBook();
  books = books.filter((value) => value.id !== id);
  localStorage.setItem('books', JSON.stringify(books));
};

// create new book objects
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = `${title}${author}`;
  const book = new Book(id, title, author);
  createTable(book);
  addBook(book);
});

window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});

document.getElementById('table').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  deleteBook(e.target);
  removeBook(e.target.id);
});
