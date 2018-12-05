import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.css';

const Header = () => {
    const logo = () => {
        return (
            <Link to="/">
                <img alt="logo" src="/logo.png" className={styles.logo} />
            </Link>
        );
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>{logo()}</div>
            <ul className={styles.header_right}>
                <li>
                    <Link to="/">Log In</Link>
                    <Link to="/">Start your free trial</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
