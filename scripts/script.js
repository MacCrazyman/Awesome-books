class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

}

const addBook = (book) => {
  const books = getBook();
  books.push(book);
  localStorage.setItem('books',JSON.stringify(books));
}

const getBook = () => {
  let books;

  if (localStorage.getItem('books')===null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

const displayBooks = () => {
  const books = getBook();
  books.forEach(book => {
    createTable(book);
  });
}

const deleteBook = () => {

}

const removeBook = () => {

}

const createTable = (book) => {
  const table = document.getElementById('table');
  const tr = document.createElement('div');
  tr.innerHTML = `<div>
  <div>${book.title}</div>
  <div>${book.author}</div>
  <div hidden>${book.id}</div>
  <button class="delete">Remove</button>
  <hr>
  </div>`;
  table.appendChild(tr);
}

window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});

document.getElementById('form').addEventListener('submit',(e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = `${title}${author}`;
  const book = new Book(id,title,author);
  createTable(book);
  addBook(book);
});
