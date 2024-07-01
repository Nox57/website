import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Importez Link de react-router-dom
import './Header.css'

const Header = () => {
    const [showSubMenu, setShowSubMenu] = useState(false)

    const toggleSubMenu = () => setShowSubMenu(!showSubMenu)

    return (
        <header className="header-container">
            <h1 className="title">Metz-Sud Informatique</h1>
            LOGO
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li onClick={toggleSubMenu}>Nos services</li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
                    </li>
                </ul>
                {showSubMenu && (
                    <ul className="subMenu">
                        <li>
                            <Link to="/services/service1">Service 1</Link>
                        </li>
                        <li>
                            <Link to="/services/service2">Service 2</Link>
                        </li>
                        <li>
                            <Link to="/services/service3">Service 3</Link>
                        </li>
                        {/* Ajoutez d'autres liens de sous-menu ici */}
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header
