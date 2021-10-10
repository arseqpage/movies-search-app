import React from 'react';

const Header = () => {
    return (
        <nav className="deep-purple darken-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movies App</a>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Rep</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;