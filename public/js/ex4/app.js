let testData = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather: Part II",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "Schindler's List",
  "12 Angry Men",
  "Inception",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Forrest Gump",
  "The Good, the Bad and the Ugly",
  "The Lord of the Rings: The Two Towers",
  "The Matrix",
  "Goodfellas",
  "Star Wars: Episode V - The Empire Strikes Back",
  "One Flew Over the Cuckoo's Nest",
  "Harakiri",
  "Parasite",
  "Interstellar",
  "City of God",
  "Spirited Away",
  "Saving Private Ryan",
  "The Green Mile",
  "Life Is Beautiful",
  "Se7en",
  "The Silence of the Lambs",
  "Star Wars: Episode IV - A New Hope",
  "Seven Samurai",
  "It's a Wonderful Life",
  "Joker",
  "Avengers: Infinity War",
  "Whiplash",
  "The Intouchables",
  "The Prestige",
  "The Departed",
  "The Pianist",
  "Gladiator",
  "American History X",
  "The Usual Suspects",
  "Léon: The Professional",
  "The Lion King",
  "Terminator 2: Judgment Day",
  "Cinema Paradiso",
  "Grave of the Fireflies",
  "Back to the Future",
  "Once Upon a Time in the West",
  "High and Low",
  "Psycho",
];
console.log(testData[0]);

const searchBox = document.querySelector('#search');
const results = document.querySelector('#results');

searchBox.addEventListener('keyup', function(event) {
  let query = event.target.value;
  let searchResults = [];

  console.log(query);
  clearResults(results);

  if (query && query.length > 0) {
    for (let result of testData) {
      if (result.startsWith(query)) {
        searchResults.push(result);
      }
    }
  }

  if (searchResults.length === 0) {
    clearResults(results);
  } else {
    for (let result of searchResults) {
      appendResult(result, results);
    }
  }
});

function clearResults(container) {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild);
  }
}

function appendResult(result, container) {
  console.log('append');
  let li = document.createElement('li');
  let text = document.createTextNode(result);
  li.appendChild(text);
  container.appendChild(li);
}
