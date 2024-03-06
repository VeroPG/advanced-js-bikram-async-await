// POKEMON API

//- Declara una función getRandomPokemon que retorne un pokemon aleatorio.

async function getRandomPokemon() {
  try {
    let random = Math.round(Math.random() * 1025);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + random);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
getRandomPokemon().then((data) => console.log(data));

// Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName(pokemon) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return { name, img };
}

//Ejercicio 3.- Declara una funcion printImageAndName que retorne el string necesario para pintar
//la imagen y el nombre del pokemon en el DOM de la siguiente forma:

/* <section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section> */

async function printImageAndName() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
  let data = await response.json();
  let name = data.name;
  let img = data.sprites.front_default;
  return `<section>
                <img src="${img}" alt="${name}">
                <h1>${name}</h1>
            </section>`;
}

// Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage() {
  let response = await fetch("https://dog.ceo/api/breeds/image/random");
  let data = await response.json();
  return data.message;
}

// Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.

async function getRandomPokemonImage() {
  let random = Math.round(Math.random() * 1025);
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
  let data = await response.json();
  let img = data.sprites.front_default;
  return img;
}

// Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu() {
  let perro = await getRandomDogImage();
  let poke = await getRandomPokemonImage();
  let pelea = `<section>
    <img=${perro} alt="perro">
    <h1>VS.</h1>
    <img=${poke} alt="pokemon">
            </section>`;
  document.body.innerHTML += pelea;
  return pelea;
}

// Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.

async function getRandomCharacter() {
  try {
    let random = Math.round(Math.random() * 86);
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/` + random
    );
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}
getRandomCharacter().then((data) => console.log(data));

/* Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode}) */

async function getRandomCharacterInfo() {
  let random = Math.round(Math.random() * 86);
  let responseCharacter = await fetch(
    `https://rickandmortyapi.com/api/character/` + random
  );
  let dataCharacter = await responseCharacter.json();
  let img = dataCharacter.image;
  let name = dataCharacter.name;
  let episodes = dataCharacter.episode;

  let responseEpisode = await fetch(episodes[0]);

  let dataEpisode = await responseEpisode.json();
  let firstEpisode = dataEpisode.name;
    let dateEpisode = dataEpisode.air_date;
    let personaje =
    `<section>
        <img src= "${img}" alt="${img}">
        <h1>${name}</h1>
        <h1>${episodes}</h1>
        <h1>${firstEpisode}</h1>
        <h1>${dateEpisode}</h1>
    </section>`

document.body.innerHTML += personaje

  return { img, name, episodes, firstEpisode, dateEpisode };
}

/* Ejercicio 9.- Pinta los anteriores datos en el DOM (no se testea)*/
