const form = document.querySelector('#form');
const addBtn = document.querySelector('#addBtn');
const bookContainer = document.getElementById('displayBook');
const allBook = JSON.parse(localStorage.getItem('allBook')) || [];
const contact = document.querySelector('.contact-info');
const contactBtn = document.getElementById('contact-btn');
const { title, author } = form.elements;
const listBtn = document.getElementById('list-btn');
const addNewBtn = document.getElementById('add-new-btn');
const addBookSection = document.getElementById('addBookSection');

export const navigation = () => {
    contactBtn.addEventListener('click', () => {
      contact.style.display = 'block';
      bookContainer.style.display = 'none';
      addBookSection.style.display = 'none';
    });
    listBtn.addEventListener('click', () => {
      bookContainer.style.display = 'block';
      addBookSection.style.display = 'none';
      contact.style.display = 'none';
    });
    addNewBtn.addEventListener('click', () => {
      addBookSection.style.display = 'flex';
      bookContainer.style.display = 'none';
      contact.style.display = 'none';
    });
  }
