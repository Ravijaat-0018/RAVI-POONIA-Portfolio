// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

