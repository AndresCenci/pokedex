import React, { useState } from 'react';
import './Card.css';
import NoImage from '../images/not-available.png';
import arrow from '../images/arrow.png';

const Card = (data) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='card'>
            <div className='card-data' onClick={() => setShowModal(true)}>
                <div className='id'>{'0'.repeat(Math.max(4 - data.pokemon.id.toString().length, 0)) + data.pokemon.id}</div>
                <div className='name'>{data.pokemon.name.charAt(0).toUpperCase().concat(data.pokemon.name.slice(1))}</div>
                <div>
                    <img src={data.pokemon.sprites.other['official-artwork'].front_default !== null
                        ? data.pokemon.sprites.other['official-artwork'].front_default
                        : NoImage } alt={data.pokemon.name} className='image' />
                </div>
            </div>

            { showModal && 
                <div className='modal'>
                    <img src={arrow} className='card-arrow-back' alt='back' onClick={() => setShowModal(false)} />

                    <div className='modal-card-data'>
                        <div className='modal-card-name'>{data.pokemon.name.charAt(0).toUpperCase().concat(data.pokemon.name.slice(1))}</div>
                        <div className='modal-card-types'>
                            {data.pokemon.types.map((type, key) => {
                                return <span className='modal-card-type' key={key}>{type.type.name}</span>
                            })}
                        </div>

                        <div>
                            <img src={data.pokemon.sprites.other['official-artwork'].front_default !== null
                                ? data.pokemon.sprites.other['official-artwork'].front_default
                                : NoImage } alt={data.pokemon.name} className='modal-image' />
                        </div>

                        <table className='modal-table'>
                            <thead>
                                <tr className='modal-table-stats-name'>
                                    <td>Height</td>
                                    <td>Weight</td>
                                    <td>Category</td>
                                    <td>Abilities</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='modal-table-stats-base'>
                                    <th>{data.pokemon.height}"</th>
                                    <th>{data.pokemon.weight}lbs</th>
                                    <th>
                                        {data.pokemon.species.genera.map(genera => {
                                            if (genera.language.name === 'en') {
                                                return genera.genus;
                                            }
                                            return '';
                                        })}
                                    </th>
                                    <th>
                                        {data.pokemon.abilities.map(ability => {
                                            return ability.ability.name.concat('\n')
                                        })}
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                        <p className='modal-description'>
                            {data.pokemon.species.flavor_text_entries.map(flavor => {
                                const idFlavor = flavor.version.url.split('/');
                                if (flavor.language.name === 'en' && idFlavor[idFlavor.length - 2] === data.pokemon.id.toString()) {
                                    return flavor.flavor_text.concat('\n');
                                }
                                return '';
                            })}
                        </p>

                        <table className='modal-table'>
                            <thead>
                                <tr className='modal-table-stats-base'>
                                    {data.pokemon.stats.map((stat, key) => {
                                        return <th key={key}>{stat.base_stat}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='modal-table-stats-name'>
                                    {data.pokemon.stats.map((stat, key) => {
                                        return <td key={key}>{stat.stat.name}</td>
                                    })}
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            }                    
        </div>
    )
}

export default Card;