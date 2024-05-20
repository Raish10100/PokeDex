import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon/',
        nextUrl: '',
        prevUrl: ''
    });

    async function downloadPokemons() {
        try {
            const response = await axios.get(pokemonListState.pokedexUrl);
            const result = response.data.results;

            const pokemonResultPromise = result.map(pokemon => axios.get(pokemon.url));
            const pokemonData = await axios.all(pokemonResultPromise);

            const pokeListResult = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types
                };
            });

            setPokemonListState((state) => ({
                ...state,
                pokemonList: pokeListResult,
                isLoading: false,
                nextUrl: response.data.next,
                prevUrl: response.data.previous
            }));
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
            setPokemonListState((state) => ({ ...state, isLoading: false }));
        }
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);

    return (
        <div className='w-[100%] mx-auto flex flex-col justify-center items-center'>
            <h2 className='text-[35px] mb-[20px] tracking-[5px] text-center'>Pokemon List</h2>
            <div className="btns">
                <button
                    className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9] disabled:bg-gray-400'
                    onClick={() => setPokemonListState((state) => ({ ...state, pokedexUrl: pokemonListState.prevUrl }))}
                    disabled={!pokemonListState.prevUrl}
                >
                    Prev
                </button>
                <button
                    className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9] disabled:bg-gray-400'
                    onClick={() => setPokemonListState((state) => ({ ...state, pokedexUrl: pokemonListState.nextUrl }))}
                    disabled={!pokemonListState.nextUrl}
                >
                    Next
                </button>
            </div>
            <div className='Pokemon-list-wrapper flex flex-wrap justify-center items-center gap-[20px] px-[10px] mt-[35px]'>
                {pokemonListState.isLoading ? 'Loading...' :
                    pokemonListState.pokemonList.map((p) => (
                        <Pokemon name={p.name} img={p.image} key={p.id} id={p.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default PokemonList;
