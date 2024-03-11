// Header.jsx
import React from 'react'
import { Link } from 'react-router-dom' // Importez Link de react-router-dom
import Logo from './logo.svg'
import './Header.css'

const Header = () => {
    return (
        <header className="header-container">
            <h1 className="title">MetzTech Assistance</h1>
            <img src={Logo} className="logo" alt="Logo Tech Solutions" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
