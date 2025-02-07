import React from "react";
import './header.css'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <li><a href="/">Home</a></li>
                    <li><a href="/counter">Counter</a></li>
                </nav>
            </header>
        </>
    )
}

export default Header;