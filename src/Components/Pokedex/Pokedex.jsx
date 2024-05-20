import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

function PokeDex(){


    return(
     <div className="main-container flex flex-col justify-center items-center w-[100%] text-white pb-[50px]">
        <Search />
        <PokemonList />
      </div>
    )
}

export default PokeDex