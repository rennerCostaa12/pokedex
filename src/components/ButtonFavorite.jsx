import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function ButtonFavorites({
    UpdateListPokemonsFavorites,
    ListPokemonsFavorites,
    namePokemon
}) {

    const IconHeartFull = <FontAwesomeIcon icon={faHeart} />
    const IconHeartEmpty = <FontAwesomeIcon icon={faHeartBroken} />

    function handleIsFavorited() {
        const updateFavorites = [...ListPokemonsFavorites];
        const indexPokemon = updateFavorites.indexOf(namePokemon);

        console.log(indexPokemon)

        if (indexPokemon >= 0) {
            updateFavorites.slice(indexPokemon, 1);
            UpdateListPokemonsFavorites(
                state => [...state.slice(0, indexPokemon),
                ...state.slice(indexPokemon + 1, state.length)]
            )
        } else {
            updateFavorites.push(namePokemon);
            UpdateListPokemonsFavorites(updateFavorites)
        }
    }

    return (
        <button
            onClick={handleIsFavorited}
            title={ListPokemonsFavorites.includes(namePokemon) ? "Desfavoritar Pokemon" : "Favoritar Pokemon"}
        >
            {ListPokemonsFavorites.includes(namePokemon) ? IconHeartFull : IconHeartEmpty}
        </button>
    )
}