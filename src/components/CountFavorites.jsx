import { Heart } from "phosphor-react";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/favoritesContext";

export default function CountFavorites() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            padding: "1rem"
        }}>
            <Heart color="#AE2983" weight="fill" size={32} />
            <h3>{favorites.length}</h3>
        </div>
    )
}