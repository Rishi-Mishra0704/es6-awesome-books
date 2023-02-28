/* eslint-disable no-undef */

import { navigation } from './modules/nav.js';
import timeCalc from './modules/date.js';
import { displayBook, Library } from './modules/books.js';

const form = document.querySelector('#form');

navigation();

timeCalc();

const library = new Library();
form.addEventListener('submit', () => {
  library.add(title, author);
});

displayBook();
