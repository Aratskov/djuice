import markupCoctail from './markup';
import { pagination } from './separation-pagination';

const paginationEl = document.querySelector('#pagination');
const galleryEl = document.querySelector('.gallery');

let itemsPerPage = 9;
const totalBTN = 7;
let helper = [];
let activePage = 1;
let screenWidth = window.innerWidth;

loadScreenSizeFromLocalStorage();

function renderPagination(items) {
  showPage(items);
  helper = [...items];
}

function showPage(items, currentPage = 1) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageItems = items.slice(startIndex, endIndex);

  activePage = currentPage;
  console.log(activePage);

  galleryEl.replaceChildren();
  galleryEl.insertAdjacentHTML('beforeend', markupCoctail(pageItems));

  const totalPage = Math.ceil(items.length / itemsPerPage);

  if (totalPage > 1) {
    paginationEl.replaceChildren();
    createPrevBtn(currentPage);
    createPagination(currentPage, totalPage, totalBTN);
    createNextBtn(totalPage, currentPage);
  }
}

function createPrevBtn(currentPage) {
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('prev');
  prevBtn.textContent = '<';
  paginationEl.appendChild(prevBtn);
  if (currentPage < 2) {
    prevBtn.disabled = true;
  }
}

function createPagination(currentPage, totalPage, totalBTN) {
  const pages = pagination(currentPage, totalPage, totalBTN);

  const renderNumber = pages.forEach((page, i) => {
    const button = document.createElement('button');
    button.classList.add('btn-pagination');
    button.textContent = page;
    if (pages[i] === currentPage) {
      button.classList.add('active');
      button.disabled = true;
    }
    if (pages[i] === '...') {
      button.disabled = true;
    }
    paginationEl.appendChild(button);
  });

  return renderNumber;
}

function createNextBtn(totalPage, currentPage) {
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next');
  nextBtn.textContent = '>';
  paginationEl.appendChild(nextBtn);
  if (totalPage === currentPage) {
    nextBtn.disabled = true;
  }
}

function clickHandler(event) {
  if (!event.target.classList.contains('btn-pagination')) return;

  const numberPage = +event.target.textContent;
  showPage(helper, numberPage);
}

function screenWidthFull() {
  screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    itemsPerPage = 3;
  } else if (screenWidth < 1024) {
    itemsPerPage = 6;
  } else {
    itemsPerPage = 9;
  }
  localStorage.setItem('itemsPerPage',JSON.stringify(itemsPerPage));
}

function loadScreenSizeFromLocalStorage() {
  const savedItemsPerPage = JSON.parse(localStorage.getItem('itemsPerPage'));
  if (savedItemsPerPage !== null) {
    itemsPerPage = parseInt(savedItemsPerPage);
  }
}

function nextPageActive(event) {
  if (!event.target.classList.contains('next')) return;
  console.log('good');
  activePage++;
  showPage(helper, activePage);
}

function prevPageActive(event) {
  if (!event.target.classList.contains('prev')) return;
  console.log('bad');
  activePage--;
  showPage(helper, activePage);
}

paginationEl.addEventListener('click', nextPageActive);
paginationEl.addEventListener('click', prevPageActive);
paginationEl.addEventListener('click', clickHandler);
window.addEventListener('resize', screenWidthFull);

screenWidthFull()

export { renderPagination };
