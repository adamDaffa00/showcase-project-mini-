// class buku& merepresentasikan buku nya
 class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
 }

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    // ambil data dari localStorage
   const storedBook = Store.getBooks();
   // masing masing data dimasukan kedalam fungsi addBookToList untuk ditampilkan
   storedBook.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
  
  static showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const formBook = document.querySelector("#book-form");
    container.insertBefore(div,formBook);
    
    setTimeout(function(){
      div.remove();
    },1000);
  }
  
  static clearFields(){
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#isbn").value = '';

  }
  
  static deleteBook(el){
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  
}


class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if(book.isbn === isbn) {
      books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector("#book-form").addEventListener("submit", (e) => {
  
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
      

  if (title === '' && author === '' && isbn === ''){
    UI.showAlert("please fill in the text field!",'danger');
    
  }else{
  const book = new Book(title,author,isbn);
    // masukan kedalam list
    UI.addBookToList(book);
    // masukan objek book kedalsm local storage
    Store.addBook(book);
   
    UI.showAlert("book added!",'success');
    UI.clearFields();
  }
});

document.querySelector("#book-list").addEventListener("click",(e) => {
    UI.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert("book deleted",'success');
});