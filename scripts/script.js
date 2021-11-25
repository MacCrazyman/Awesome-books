class Book { // eslint-disable-line
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

const table = document.querySelector('#table');

class Library {
  constructor() {
    if (localStorage.getItem('books') === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  addBook = (book) => {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  createTable = (book) => {
    const table = document.getElementById('table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>
      <p>"${book.title}" by ${book.author}</p>
    </td>
    <td><button type="button" id="${book.id}" class="delete">Remove</button></td>`;
    table.appendChild(tr);
  };

  displayBooks = () => {
    this.books.forEach((book) => {
      this.createTable(book);
    });
  };

  deleteBook = (element) => {
    element.parentElement.parentElement.remove();
  };

  removeBook = (id) => {
    this.books = this.books.filter((value) => value.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  showDate() {
    const { DateTime } = luxon; // eslint-disable-line
    const myDate = document.querySelector('#date');
    const showMyDate = document.createElement('div');
    showMyDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    myDate.appendChild(showMyDate);
  }
}

// create new book objects
const Storage = new Library();

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const id = `${title}${author}`;
  const book = new Book(id, title, author);
  Storage.createTable(book);
  Storage.addBook(book);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  Storage.displayBooks();
});
Storage.showDate();

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  Storage.deleteBook(e.target);
  Storage.removeBook(e.target.id);
});

const tableSection = document.querySelector('#table-section');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact-section');
const listLink = document.querySelector('#list-link');
const newbookLink = document.querySelector('#newbook-link');
const contactLink = document.querySelector('#contact-link');

listLink.addEventListener('click', () => {
  tableSection.classList.remove('hidden')
  formSection.classList.add('hidden')
  contactSection.classList.add('hidden')
});

newbookLink.addEventListener('click',  () => {
  tableSection.classList.add('hidden')
  formSection.classList.remove('hidden')
  contactSection.classList.add('hidden')
});

contactLink.addEventListener('click',  () => {
  tableSection.classList.add('hidden')
  formSection.classList.add('hidden')
  contactSection.classList.remove('hidden')
});
