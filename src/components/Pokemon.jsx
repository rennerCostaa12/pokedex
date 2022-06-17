import ButtonFavorites from "./ButtonFavorite";

export default function Pokemon({
    dataPokemon,
    Loading,
    namePokemon,
    UpdateListPokemonsFavorites,
    ListPokemonsFavorites
}) {

    return (
        <>
            {Loading ?
                <h1 style={{ color: "#f1f1f1f1", height: "100vh" }}>
                    Aguarde um instante!
                </h1>
                : dataPokemon.filter((pokemons) => {
                    if (pokemons.name.toLocaleLowerCase().includes(namePokemon.toLocaleLowerCase())) {
                        return pokemons;
                    }
                }).map((value, key) => {
                    let colorCard;
                    if (value.types[0].type.name === "fire") {
                        colorCard = "#F64C5A";
                    } else if (value.types[0].type.name === "water") {
                        colorCard = "#86A8FC";
                    } else if (value.types[0].type.name === "grass") {
                        colorCard = "#29C84F";
                    } else if (value.types[0].type.name === "bug") {
                        colorCard = "#399950";
                    } else if (value.types[0].type.name === "ground") {
                        colorCard = "#6E491F";
                    } else if (value.types[0].type.name === "fairy") {
                        colorCard = "#EA1369";
                    } else if (value.types[0].type.name === "poison") {
                        colorCard = "#9B69D9"
                    } else if (value.types[0].type.name === "electric") {
                        colorCard = "#FAFA71"
                    } else {
                        colorCard = "#f1f1f1"
                    }
                    return (
                        <div style={{ border: `2px solid ${colorCard}` }} className="cards-pokemon" key={key}>
                            <div className="content-btn-and-id">
                                <span>#{value.id}</span>
                                <ButtonFavorites
                                    UpdateListPokemonsFavorites={UpdateListPokemonsFavorites}
                                    ListPokemonsFavorites={ListPokemonsFavorites}
                                    idPokemon={value.id}
                                    namePokemon={value.name}
                                />
                            </div>

                            <div className="content-data-pokemons">
                                <img className="image-pokemon" src={value.sprites.front_default} alt="Image Pokemon" />
                                <span style={{ color: colorCard }} className="name-pokemon">{value.name}</span>
                                <small className="type-pokemon">{value.types[0].type.name}</small>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}