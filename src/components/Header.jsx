import React from 'react';
import logo from '../logo192.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <img src={logo} />
            </div>
        </header>
    );
}

export default Header;
