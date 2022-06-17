export async function getPokemonsData(url) {
    const response = await fetch(url);
    return await response.json()
}