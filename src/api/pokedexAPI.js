import config from '../config/index';

const getPage = async (offset = 0) => {
    let url = config.urlPokeAPI.concat(`pokemon?limit=${config.limit}&offset=${offset}`);
    const request = await fetch(url);
    const data = await request.json();

    const pokemons = async () => {
        return Promise.all(data.results.map(result => getPokemonData(result.url)));
    }
    const pokemonData = await pokemons();

    data.results = pokemonData;

    const species = async () => {
        return Promise.all(data.results.map(result => getPokemonData(result.species.url)));
    }
    const speciesData = await species();

    data.results.forEach((element, index) => {
       data.results[index].species = speciesData[index];
    });

    return data || {};
}

const getPokemonData = async (url) => {
    const request = await fetch(url);
    const data = await request.json();
    return data || {};
}

export {
    getPage,
    getPokemonData
}
