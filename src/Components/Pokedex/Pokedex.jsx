import { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

function PokeDex(){
  const [searchTerm, setSearchterm] = useState('');


    return(
     <div className="main-container flex flex-col justify-center items-center w-[100%] text-white pb-[50px]">
        <Search updateSearchTerm={setSearchterm} />
            { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
      </div>
    )
}

export default PokeDex