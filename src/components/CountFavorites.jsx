import { Heart } from "phosphor-react";

export default function CountFavorites({ countFavorites }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            padding: "1rem"
        }}>
            <Heart color="#AE2983" weight="fill" size={32} />
            <h3>{countFavorites.length}</h3>
        </div>
    )
}