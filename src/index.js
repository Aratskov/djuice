import { CoctailList } from './js/api/const';
import { renderPagination } from './js/pagination';

const form = document.querySelector('form');
const galleryEl = document.querySelector('.gallery');
const containerEL = document.querySelector('.container');
const paginationEl = document.querySelector('#pagination');
const titleGallery = document.querySelector('.container-gallery');

const coctailList = new CoctailList();

form.addEventListener('submit', searchCoctails);
containerEL.addEventListener('click', clickFirstLetter);

function searchCoctails(event) {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.input.value.trim();
  if (!inputValue) return;

  coctailList.query = inputValue;

  galleryEl.replaceChildren();
  paginationEl.replaceChildren();
  titleGallery.firstChild.remove();

  coctailList.fetchCoctail().then(data => {
    if (!data.drinks) {
      addTitle("Sorry, we didn't find any cocktail for you");
      return;
    }
    addTitle('Cocktails');

    renderPagination(data.drinks);
    form.reset();
  });
}

function clickFirstLetter(event) {
  if (event.target.nodeName !== 'LI') return;
  const firstLetter = event.target.textContent;
  coctailList.letter = firstLetter;
  coctailList.query = null;
  galleryEl.replaceChildren();
  paginationEl.replaceChildren();

  titleGallery.firstChild.remove();

  coctailList.firstLetter().then(data => {
    if (!data.drinks) {
      console.log('bad');
      return;
    }
    addTitle('Searching results');

    renderPagination(data.drinks);
  });
}

function addTitle(text) {
  const title = document.createElement('h2');
  title.classList.add('gallery__title');
  title.textContent = text;
  titleGallery.insertBefore(title, titleGallery.firstChild);
}
