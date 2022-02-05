import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={classes.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={classes.item}>
                <a href='#'>News</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Music</a>
            </div>
            <div className={classes.item}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Sidebar;

