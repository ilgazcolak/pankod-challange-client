import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className={styles.f}>
        <ul className={styles.link}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/"> Terms and Conditions</Link>
            </li>
            <li>
                <Link to="/">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/">Collection Statement</Link>
            </li>
            <li>
                <Link to="/">Help</Link>
            </li>
            <li>
                <Link to="/">Manage Account</Link>
            </li>
        </ul>
        <div className={styles.copyright}>
            Copyright @ 2016 DEMO Streaming All Rights Reserved
        </div>
        <ul className={styles.logo}>
            <div className={styles.logo_left}>
                <li>
                    <Link to="/">
                        <img alt="facebook" src="/social/facebook-white.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img alt="twitter" src="/social/twitter-white.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img
                            alt="instagram"
                            src="/social/instagram-white.svg"
                        />
                    </Link>
                </li>
            </div>

            {/* ------- */}

            <div className={styles.logo_right}>
                <li>
                    <Link to="/">
                        <img alt="app-store" src="/store-icons/app-store.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img alt="play-store" src="/store-icons/play-store.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img
                            alt="windows-store"
                            src="/store-icons/windows-store.svg"
                        />
                    </Link>
                </li>
            </div>
        </ul>
    </div>
);

export default Footer;
