import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Header.css'

const Header = () => {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const toggleSubMenu = () => setShowSubMenu(!showSubMenu)

    return (
        <header className="header-container">
            <div className="logo-title">
                <img src={logo} alt="Metz-Sud Informatique Logo" className="logo" />
                <h1 className="title">Metz-Sud Informatique</h1>
            </div>
            <nav>
                <ul className="main-menu">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="has-submenu" onClick={toggleSubMenu}>
                        Nos services
                        <ul className={`sub-menu ${showSubMenu ? 'show' : ''}`}>
                            <li>
                                <Link to="/services/service1">Service 1</Link>
                            </li>
                            <li>
                                <Link to="/services/service2">Service 2</Link>
                            </li>
                            <li>
                                <Link to="/services/service3">Service 3</Link>
                            </li>
                        </ul>
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
