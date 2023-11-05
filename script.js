// JavaScript for your OLMS (Online Library Management System) web app

// Sample book data
const books = [
    { title: 'Book One', author: 'Abbas', isbn: '1234567890' },
    { title: 'Book Two', author: 'Zaheer', isbn: '9876543210' },
];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
        bookList.appendChild(li);
    });
}

// Function to add a new book
function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    if (title && author && isbn) {
        books.push({ title, author, isbn });
        displayBooks();
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }
}

// Function to search for books
function searchBooks() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const filteredBooks = books.filter((book) => {
        const bookData = `${book.title} ${book.author}`.toLowerCase();
        return bookData.includes(query);
    });

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`;
        bookList.appendChild(li);
    });
}

// Event listener to display books when the page loads
document.addEventListener('DOMContentLoaded', displayBooks);

// Event listener for adding a book
const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
});

// Function to add a new book
function addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    console.log(`Adding book: Title: ${title}, Author: ${author}, ISBN: ${isbn}`);

    if (title && author && isbn) {
        books.push({ title, author, isbn });
        console.log('Book added successfully');
        displayBooks();
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }
}

// Event listener for searching books
const searchButton = document.querySelector('.search-books button');
searchButton.addEventListener('click', searchBooks);
