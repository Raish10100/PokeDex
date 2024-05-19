import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const pokedex_Url = 'https://pokeapi.co/api/v2/pokemon/';

    async function downloadPokemons(){
        
        const response = await axios.get(pokedex_Url);
        const result = response.data.results;
        // console.log(result)

        const pokemonResultPromise = result.map(pokemon => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        // console.log(pokemonData)

        const pokeListResult =   pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;

            return{
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                types: pokemon.types
            }
        });
        // console.log(pokeListResult);
        setPokemonList(pokeListResult);
        setIsLoading(false)

        
    }

useEffect(() => {
            downloadPokemons();
}, []);

    return (
        <>
            {
                (isLoading) ? 'Loading...' : 
                pokemonList.map((p) => <Pokemon name={p.name} img={p.image} key={p.id}  />)
            }
        </>
    )
}

export default PokemonList;