class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

}

const addBook = (book) => {
  const books = getBook();
  book.push(book);
  localStorage.setItem('books',JSON.stringify(books));
}

const getBook = () => {
  let books;

  if (localStorage.getItem('books')===null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books
}

const displayBooks = () => {

}

const deleteBook = () => {

}

const removeBook = () => {

}

const createTable = () => {

}

const form = document.querySelector('#add_books');

form.addEventListener('submit',(e) => {
  e.preventDefault();
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const id = `${title}${author}`;
  
});
