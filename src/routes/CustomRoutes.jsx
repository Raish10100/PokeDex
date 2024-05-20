import { Route, Routes } from "react-router-dom";
import PokeDex from "../Components/Pokedex/Pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";

function CustomRoute(){


    return(
        <Routes >
            <Route path="/" element={ <PokeDex /> } />
            <Route path="/pokemon/:id" element={<PokemonDetails />} /> 
        </Routes>
    )
}

export default CustomRoute;