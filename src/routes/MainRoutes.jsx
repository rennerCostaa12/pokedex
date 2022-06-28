import Pokedex from "../components/Pokedex";
import PokemonDetails from "../components/PokemonDetails";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path="/detail/:pokemon_name" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
}