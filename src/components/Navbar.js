import React from 'react'
import NAV_STYLE from '../styles/NavStyle';

const LOGO=require('../assets/ipl-logo.png');

function Navbar() {
    const NavStyle=NAV_STYLE();
    return (
    <nav className={NavStyle.navbar}>
        <img className={NavStyle.logoImage}
        src={LOGO.default}
        alt='ipl-logo'
        />
        <h1 
        className={NavStyle.navHeading}
        >
        INDIAN PREMIRE LEAGUE
        </h1>
    </nav>
    )
}

export default Navbar
