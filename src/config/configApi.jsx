export async function getPokemonsData(url) {
    const response = await fetch(url);
    return await response.json()
}


export async function getPokemon(name_pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name_pokemon}`)
    return await response.json();
}