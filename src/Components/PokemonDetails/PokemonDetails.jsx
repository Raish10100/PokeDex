import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails(){
    let {id} = useParams();
    let [pokemon, setPokemon] = useState({})

    async function downloadPokemon(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        setPokemon(
            {
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name)
            }
        )
    }

    useEffect(() => { downloadPokemon() }, [])


    return (
        <div className="pokemon-details-wrapper text-white flex flex-col  justify-center items-center">
            <div className="pokemon-details-name"><span className="tracking-[35px] text-[25px]">{pokemon.name}</span></div>
            <img className="pokemon-details-image" src={pokemon.image} />
            <div className="flex justify-center items-center gap-6 text-[25px] mt-8">
                <div className="pokemon-details-name">Height: {pokemon.height}</div>
                <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
            </div>
            <div className="pokemon-details-types flex justify-center items-center gap-3 mt-2">
                <span className="text-[30px]">Types:</span>
                {pokemon.types && pokemon.types.map((t) => <div key={t} className="bg-[#262b39] py-[15px] px-[30px] mt-3 mx-1 rounded-md"> {t} </div>)}
            </div>
         </div>
    )

}

export default PokemonDetails;