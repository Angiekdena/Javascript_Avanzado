//1. Hacer una petición a la PokeAPI para obtener cualquier Pokémon. Muestra sus tipos en consola mediante un for. 
// https://pokeapi.co/api/v2/pokemon/pikachu

document.getElementById("btn1").addEventListener("click", peticion);

async function peticion(){
   let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
   let dato = await pokemon.json();

   dato.types.forEach(
    (pokemones) => console.log(pokemones.type.name));
};


//2. Escribe una función que al ejecutarse realice una petición a la API de Open Library. Buscar un libro y traer el o los autores del primer libro
//Ejemplo: peticionLibro("i robot");
//http://openlibrary.org/search.json?q=i+robot

document.getElementById("btn2").addEventListener("click", llamado);

async function llamado(){
    console.log("cargando... Ejercicio 2")
    let libro = await fetch("https://openlibrary.org/search.json?q=title%3A+%22i+robot%22");
    let search = await libro.json();

    console.log(search.docs[0].author_name.join(" - "));
 };

 //3. Hacer una petición por autor y devolver la lista de sus libros.
//http://openlibrary.org/search.json?author=asimov

document.getElementById("btn3").addEventListener("click", autores);

async function autores(){
    console.log("cargando... Ejercicio 3")
    let libro = await fetch("http://openlibrary.org/search.json?author=asimov");
    let search = await libro.json();

    console.log(search.docs.forEach((titulos) =>  console.log(titulos.title)))
 };

 //4. Hacer una petición y devolver el género de la banda deseada.
//https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay

document.getElementById("btn4").addEventListener("click", artista);

async function artista(){
    console.log("cargando... Ejercicio 4")
    let banda = await fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay");
    let genero = await banda.json();
    console.log(genero.artists[0].strGenre);
};

//5. Hacer una petición a la swapi para obtener un personaje y también obtener las películas donde aparece.
//https://swapi.co/

document.getElementById("btn5").addEventListener("click", peliculas);

async function peliculas(){
    console.log("cargando... Ejercicio 5")
    let data = await fetch("https://swapi.dev/api/people/?search=C-3PO");
    let film = await data.json();

    // let busqueda = film.results[0].films.forEach(async films => {
    //     console.log(films)
    //     console.log(await fetch("https://swapi.dev/api/films/1/")) 
    // })
        
    // console.log(busqueda)

    console.log(film.results[0].films);
};

//6. Traer los primeros 151 pokemon de la primera generacion y devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño y peso.
//https://pokeapi.co/](https://pokeapi.co/

document.getElementById("btn6").addEventListener("click", pokemons);

let dataPokemon =[];

async function pokemons(){
    console.log("cargando... Ejercicio 6")
    let data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    let poke = await data.json();

    let busqueda = poke.results.forEach(async resultado => {
        let nexArray = await fetch(resultado.url)
        let info = await nexArray.json();

        //console.log(info)

        let pokemonFinal = {           
            nombre: info.name,
            movimientos: info.moves.map(item => item.move.name),
            tipo: info.types.map(item => item.type.name),
            tamaño: info.height,
            peso: info.weight
        }

        dataPokemon.push(pokemonFinal);
            
    })

    console.log(dataPokemon)
};

//7. (EXTRA) Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta el día de ayer.
//https://api.nasa.gov/
