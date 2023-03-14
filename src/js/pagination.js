import markupCoctail from './markup';
import { pagination } from './separation-pagination';

const paginationEl = document.querySelector('#pagination');
const galleryEl = document.querySelector('.gallery');

const itemsPerPage = 2;
const totalBTN = 7;
let helper = [];

function renderPagination(items) {
  showPage(items);
  helper = [...items];
}

function showPage(items, currentPage = 1) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  console.log(currentPage);

  galleryEl.replaceChildren();
  galleryEl.insertAdjacentHTML('beforeend', markupCoctail(pageItems));

  const totalPage = Math.ceil(items.length / itemsPerPage);

  paginationEl.replaceChildren();

  const pages = pagination(currentPage, totalPage, totalBTN);

  pages.forEach((page, i) => {
    const button = document.createElement('button');
    button.classList.add('btn-pagination');
    button.textContent = page;
    if (pages[i] === currentPage) {
      button.classList.add('active');
    }
    paginationEl.appendChild(button);
  });
}

function clickHandler(event) {
  if (!event.target.classList.contains('btn-pagination')) return;

  const numberPage = +event.target.textContent;
  showPage(helper, numberPage);
}

paginationEl.addEventListener('click', clickHandler);

export { renderPagination };
