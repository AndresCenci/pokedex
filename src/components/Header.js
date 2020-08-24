import React from 'react';
import './Header.css';
import logo from '../images/pokemon-logo.png';
import Switch from './Switch';

const Header = () => {
    return (
        <section className='header'>
            <div className='header-logo'>
                <img src={logo} className='logo' alt='Pokémon logo'/>
            </div>
            <span className='header-switch'>
                <Switch />
            </span>
        </section>
    )
}

export default Header;