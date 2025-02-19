window.addEventListener('DOMContentLoaded', () => {
  const myLibrary = [];
  const bookContainer = document.querySelector('.book-container');

  function Book(author, year, pageCount, age, title) {
    this.author = author;
    this.year = year;
    this.pageCount = pageCount;
    this.age = age;
    this.title = title;
  }

  const bookForm = document.querySelector('#book-form');
  const bookAuthor = document.querySelector('#book-author');
  const bookYear = document.querySelector('#book-year');
  const bookTitle = document.querySelector('#book-title');
  const bookPages = document.querySelector('#book-pages');
  const bookAge = document.querySelector('#book-age');
  const bookBtn = document.querySelector('#add-book-btn');
  bookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addBookToLibrary(bookAuthor.value, bookYear.value, bookPages.value, bookAge.checked ? 'Used' : 'New', bookTitle.value);
    bookAuthor.value = '';
    bookYear.value = '';
    bookTitle.value = '';
    bookPages.value = '';
    bookAge.checked = false;
  });

  function addBookToLibrary(author, year, pageCount, age, title) {
    const book = new Book(author, year, pageCount, age, title);

    myLibrary.push(book);
    displayBooks(book);
  }

  function displayBooks(book) {
    let bookCard = document.createElement('div');
    let bookText = document.createElement('div');
    bookCard.classList.add('book', 'card');
    bookText.classList.add('card-text');
    bookText.innerHTML = `
    <h3>${book.title}</h3>
    `;
    bookCard.appendChild(bookText);
    bookContainer.appendChild(bookCard);
    bookCard.classList.add('data-author', 'data-year', 'data-pageCount', 'data-age');
    bookCard.setAttribute('data-author', book.author);
    bookCard.setAttribute('data-year', book.year);
    bookCard.setAttribute('data-pageCount', book.pageCount);
    bookCard.setAttribute('data-age', book.age);
  }

  var bookmark = document.querySelector('.library-card');
  bookmark.addEventListener('click', function () {
    bookmark.classList.contains('show') ? bookmark.classList.remove('show') : bookmark.classList.add('show');
  });
});
