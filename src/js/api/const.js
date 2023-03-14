export class CoctailList{
#BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

constructor(){
this.page = 1;
this.query = null;
this.letter = null;
}

fetchCoctail() {
    return fetch(
      `${this.#BASE_URL}?s=${this.query}`
    )
      .then(res => res.json())
      
  }

  firstLetter(){
    return fetch(
      `${this.#BASE_URL}?f=${this.letter}`
    )
      .then(res => res.json())
  
  }
}