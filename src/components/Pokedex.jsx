import { useState, useEffect, useContext } from "react";
import { getPokemonsData } from "../config/configApi";
import Pokemon from "../components/Pokemon";
import CountFavorites from "../components/CountFavorites";
import Pagination from "../components/Pagination";
import LogoProject from '../assets/logo.svg';
import InputSearch from "../components/InputSearch";
import { FavoritesContext } from "../contexts/favoritesContext";

import '../css/App.css';

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [valueSearch, setValueSearch] = useState('');
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itensPerPage = 25;

    const { favorites } = useContext(FavoritesContext);

    async function getAllPokemons() {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${itensPerPage * page}`);
        const dataPokemon = await response.json();

        const dataPokeResults = dataPokemon.results

        const promises = dataPokeResults.map(async (pokemon) => {
            return await getPokemonsData(pokemon.url)
        })

        //LIST PROMISSES
        Promise.all(promises).then(response => {
            setPokemons(response)
            setLoading(false);
        });

        setTotalPages(Math.ceil(dataPokemon.count / itensPerPage));
    }

    useEffect(() => {
        getAllPokemons();
    }, [page]);


    console.log(favorites);

    return (
        <div className="container-pokemons">
            <CountFavorites />
            <div className="content-logo">
                <img src={LogoProject} alt="logo project" />
            </div>
            <div className="content-search-pokemons">
                <div className="content-filters">
                    <InputSearch valueSearch={setValueSearch} />
                </div>
                <Pagination
                    totalPages={totalPages}
                    pageNow={page}
                    setPageNow={setPage}
                />
            </div>
            <div className="content-pokemons">
                <Pokemon
                    dataPokemon={pokemons}
                    Loading={loading}
                    namePokemon={valueSearch}
                />
            </div>
        </div>
    )
}
