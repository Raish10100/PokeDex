import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pokedex_Url, setPokedex_Url] = useState('https://pokeapi.co/api/v2/pokemon/') ;

    const [nextUrl, setNexturl] = useState('')
    const [prevUrl, setPrevurl] = useState('')


    async function downloadPokemons(){
        
        const response = await axios.get(pokedex_Url);
        const result = response.data.results;
        console.log(response)

        setNexturl(response.data.next);
        setPrevurl(response.data.previous);

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
}, [pokedex_Url]);

    return (
        <div className='w-[100%] mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-[35px] mb-[20px] tracking-[5px] text-center'>Pokemon List</h2>
        <div className="btns ">
            <button className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9] disabled:bg-gray-400' onClick={() => setPokedex_Url(prevUrl)} disabled={prevUrl == null}>Prev</button>
            <button className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9]  disabled:bg-gray-400' onClick={() => setPokedex_Url(nextUrl)} disabled={nextUrl == null}>Next</button>
        </div>
           <div className='Pokemon-list-wrapper flex flex-wrap justify-center items-center gap-[20px] px-[10px] mt-[35px]'>
           {
                (isLoading) ? 'Loading...' : 
                pokemonList.map((p) => <Pokemon  name={p.name} img={p.image} key={p.id}  />)
            }
           </div>
           <div className="btns mt-[35px] ">
                <button className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9] disabled:bg-gray-400 ' onClick={() => setPokedex_Url(prevUrl)} disabled={prevUrl == null}>Prev</button>
                <button className='text-black bg-white px-[35px] py-[8px] ml-[15px] rounded-xl hover:bg-[#ffffffb9] disabled:bg-gray-400 ' onClick={() => setPokedex_Url(nextUrl)} disabled={nextUrl == null}>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;