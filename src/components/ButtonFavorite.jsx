import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FavoritesContext } from "../contexts/favoritesContext";
import { useContext } from "react";

export default function ButtonFavorites({
    Pokemon
}) {

    const { setFavorites, favorites } = useContext(FavoritesContext)

    const IconHeartFull = <FontAwesomeIcon icon={faHeart} />
    const IconHeartEmpty = <FontAwesomeIcon icon={faHeartBroken} />

    function handleFavorited() {
        setFavorites([...favorites, Pokemon])
    }

    function handleRemoveFavorited() {
        setFavorites(favorites.filter((poke) => poke.name !== Pokemon.name))
    }

    const isFavorite = favorites.some((poke) => poke.name === Pokemon.name);

    return (
        <button
            onClick={() => isFavorite ? handleRemoveFavorited() : handleFavorited()}
            title={favorites.includes(Pokemon.name) ? "Desfavoritar Pokemon" : "Favoritar Pokemon"}
        >
            {isFavorite ? IconHeartFull : IconHeartEmpty}
        </button>
    )
}