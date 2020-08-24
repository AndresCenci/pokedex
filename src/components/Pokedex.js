import React, { useState, useEffect } from 'react';
import { getPage } from '../api/pokedexAPI';
import './Pokedex.css';
import arrow from '../images/arrow.png';
import config from '../config/index';
import Card from './Card';
import LoadingSpinner from './LoadingSpinner';

const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await getPage(offset);
            setPokemonList(data.results);
            setLoading(false);
        }
        fetchData();
    }, [offset]);

    return loading 
        ? <LoadingSpinner />
        :
        <section className="main">
            <div className='pages'>
                <img src={arrow} className='arrow-back' alt='back' onClick={() => offset - config.limit >= 0 ? setOffset(offset - config.limit) : setOffset(offset)} />
                <img src={arrow} className='arrow-next' alt='next' onClick={() => setOffset(offset + config.limit)} />
            </div>
            <div className="cards">
                {pokemonList.map(pokemon => {
                    return <Card key={pokemon.id} pokemon={pokemon}/>
                })}
            </div>
        </section>
}

export default Pokedex;
