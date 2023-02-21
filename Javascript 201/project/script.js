const name = document.getElementById("name");
const planet = document.getElementById("planet");
const movies = document.getElementById("movies");

const getData = () => {
    name.innerHTML = '<em>Loading...</em>';
   planet.innerHTML = '<em>Loading...</em>';
    movies.innerHTML = '<em>Loading...</em>';

    const randomNumber = Math.ceil(Math.random() * 83);
    console.log(randomNumber);

    fetch(`https://swapi.dev/api/people/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
        name.innerText = data.name;
        planet.innerText = data.homeworld;
        movies.innerText = data.films;
})};


const button = document.querySelector("#random");

button.addEventListener('click', (e) => {
   
    getData()
})
