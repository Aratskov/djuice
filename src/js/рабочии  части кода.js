// Код для отображения текущей страницы!

function updatePaginationButtons(currentPage, totalPages) {
  const buttons = paginationEl.querySelectorAll('.btn-pagination');
  buttons.forEach((button, index) => {
    const pageNumber = index + 1;
    if (pageNumber === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
    if (pageNumber <= totalPages) {
      button.textContent = pageNumber;
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  });
}

// function updatePaginationButtons(currentPage, totalPages) {
//   const buttons = paginationEl.querySelectorAll('.btn-pagination');
//   buttons.forEach((button, index) => {
//     const pageNumber = index + 1;
//     const start = Math.max(currentPage - 2, 1);
//     const end = Math.min(currentPage + 2, totalPages);

//     if (pageNumber >= start && pageNumber <= end) {
//       button.classList.remove('hidden');
//       button.textContent = pageNumber;
//       if (pageNumber === currentPage) {
//         button.classList.add('active');
//       } else {
//         button.classList.remove('active');
//       }
//     } else {
//       button.classList.add('hidden');
//     }
//   });
// }

// Мой ренедер


// function renderPagination(event) {
//   const totalPage = Math.ceil(event.length / itemsPerPage);
//   const totalBTN = 3;

//   if (totalPage <= totalBTN) {
//     for (let i = 1; i <= totalPage; i++) {
//       const button = document.createElement('button');
//       button.classList.add('btn-pagination');
//       button.textContent = i;

//       button.addEventListener('click', () => {
//         updatePaginationButtons(i, totalPage);
//         showPage(event, i);
//       });

//       paginationEl.appendChild(button);
//     }
//   }

//   if (totalPage > totalBTN) {
//     let currentPage = 1;
//     let pages = pagination(currentPage,totalPage, 6);
//     console.log(pages)

//     pages.forEach((page) => {
//       const button = document.createElement('button');
//       button.classList.add('btn-pagination');
//       button.textContent = page;

//       button.addEventListener('click', () => {
//         currentPage = page;
//         // let pages = pagination(page,totalPage, 6);
//         // pages.forEach((pagin) => {
//         //     const button = document.createElement('button');
//         //     button.classList.add('btn-pagination');
//         //     button.textContent = page;
//         // paginationEl.appendChild(button);
                
//         // })
//         // console.log(page)
//         console.log(pages)

//         // updatePaginationButtons(page, totalPage);
//         showPage(event, page);
//       });

//       paginationEl.appendChild(button);
//     });
    
//     pagination
//   }

//   // Показывать первую страницу по умолчанию
//   showPage(event);
// }


// Хорошо работает,когда без точечек надо

function updatePaginationButtons(currentPage, totalPages, totalBTN) {
    const buttons = paginationEl.querySelectorAll('.btn-pagination');
    const halfTotalBtn = Math.floor(totalBTN / 2);
    let start = currentPage - halfTotalBtn;
    let end = currentPage + halfTotalBtn;
  
    if (start < 1) {
      start = 1;
      end = totalBTN;
    }
  
    if (end > totalPages) {
      end = totalPages;
      start = end - totalBTN + 1;
    }
  
    buttons.forEach((button, index) => {
      const pageNumber = start + index;
      if (pageNumber <= totalPages) {
        button.textContent = pageNumber;
        button.classList.remove('hidden');
        if (pageNumber === currentPage) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      } else {
        button.classList.add('hidden');
      }
    });
  }

  // НА 3 ЧАСТИ ДЕЛИТ

  export function pagination(currentPage, totalPage, totalBtn) {
    const halfPagesShown = Math.floor(totalBtn / 2);
    const rangeStart = Math.max(currentPage - halfPagesShown, 1);
    const rangeEnd = Math.min(currentPage + halfPagesShown, totalPage);
    let pages = [];
  
    if (totalPage <= totalBtn) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= halfPagesShown + 1) {
        for (let i = 1; i <= totalBtn - 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPage);
      } else if (currentPage > totalPage - halfPagesShown) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPage - (totalBtn - 2); i <= totalPage; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = rangeStart; i <= rangeEnd; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPage);
      }
    }
  
    return pages;
  }