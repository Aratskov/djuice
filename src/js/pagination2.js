export function pagination(currentPage, totalPage, totalButton) {
  const halfPagesShown = Math.floor(totalButton / 2);

  const breakingEnd = totalPage - halfPagesShown;
  const breakingStart = 1 + halfPagesShown;

  let pages = [];
  let endArr = [];
  let startArr = [];
  let deltaArr = [];

  for (let i = breakingEnd; i <= totalPage; i++) {
    endArr.push(i);
  }

  for (let i = 1; i <= breakingStart; i++) {
    startArr.push(i);
  }

  for (let i = totalPage - totalButton + 1; i < endArr[0]; i++) {
    deltaArr.push(i);
  }

  if (currentPage < breakingStart) {
    pages = [...startArr, '...', totalPage];
  } else if (currentPage >= breakingStart) {
    for (let i = currentPage; i <= currentPage + halfPagesShown; i++) {
      pages.push(i - 1);
    }
    pages.push('...');
    pages.push(totalPage);
  }

  if (currentPage >= breakingEnd) {
    pages = [1, '...', ...endArr];
  }

  if (currentPage === breakingEnd - 1 || currentPage === breakingEnd) {
    pages = [...deltaArr, ...endArr];
  }

  return pages;
}

// pagination(1,9,5) console.log([1,2,3,"...",9])
// pagination(2,9,5) console.log([1,2,3,"...",9])
// pagination(3,9,5) console.log([2,3,4,"...",9])
// pagination(4,9,5) console.log([3,4,5,"...",9])
// pagination(5,9,5) console.log([4,5,6,"...",9])
// pagination(6,9,5) console.log([5,6,7,8,9])
// pagination(7,9,5) console.log([1,"...",7,8,9])
// pagination(8,9,5) console.log([1,"...",7,8,9])
// pagination(9,9,5) console.log([1,"...",7,8,9])
