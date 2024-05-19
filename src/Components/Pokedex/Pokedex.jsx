import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

function PokeDex(){


    return(
     <div className="main-container flex flex-col justify-center items-center w-[100%] text-white">
        <h1 className='title text-center shadow text-[40px] font-serif py-[20px]  tracking-[8px]'>PokeDex</h1>
        <Search />
        <PokemonList />
      </div>
    )
}

export default PokeDex