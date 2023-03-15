function markupCoctail(drinks) {
  return drinks
    .map(({ strDrink, strDrinkThumb, strGlass }) => {
      return `
<li>
<img src = ${strDrinkThumb} alt="${strGlass}">
<p>${strDrink}</p>
</li>
`;
    })
    .join('');
}

export default markupCoctail;