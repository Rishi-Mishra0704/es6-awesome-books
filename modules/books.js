const form = document.querySelector("#form");
const addBtn = document.querySelector("#addBtn");
const bookContainer = document.getElementById("displayBook");
const allBook = JSON.parse(localStorage.getItem("allBook")) || [];
const contact = document.querySelector(".contact-info");
const contactBtn = document.getElementById("contact-btn");
const { title, author } = form.elements;
const listBtn = document.getElementById("list-btn");
const addNewBtn = document.getElementById("add-new-btn");
const addBookSection = document.getElementById("addBookSection");

export class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

export class Library {
  constructor() {
    this.books = allBook;
  }

  add(title, author) {
    const idRandom = Math.floor(Math.random() * 100000);
    const bookInfo = new Book(idRandom, title.value, author.value);
    this.books.push(bookInfo);
    localStorage.setItem("allBook", JSON.stringify(this.books));
  }

  remove(id) {
    const removedBooks = this.books.filter((book) => book.id === id);
    if (removedBooks.length === 1) {
      this.books = this.books.filter((book) => book.id !== id);
      localStorage.setItem("allBook", JSON.stringify(this.books));
    }
    window.location.reload();
  }
}

const library = new Library();
export const displayBook = (books) => {
  if (books) {
    books.forEach((book) => {
      const title = book.title[0].toUpperCase() + book.title.slice(1);
      const author = book.author[0].toUpperCase() + book.author.slice(1);
      const div = document.createElement("div");
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("remove");
      removeBtn.addEventListener("click", () => {
        library.remove(book.id);
      });
      removeBtn.innerHTML = 'Remove' 
      div.classList.add("items");
      div.innerHTML = `
          <p> "${title}" by <strong>${author}</strong></p>
          `;
      div.appendChild(removeBtn);
      bookContainer.appendChild(div);
    });
  }
};
addBtn.addEventListener("click", displayBook(allBook));
