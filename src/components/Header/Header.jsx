import React from 'react';
import logo_img from '../../assets/images/logo192.png';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="#"><img src={logo_img} /></a>
            </div>
            <div className={styles.login}>
                {props.isAuth ? props.authData.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
