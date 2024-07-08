import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-sticky-el'
import logo from './logo.png'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Sticky>
            <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
                <div className="logo-title">
                    <img src={logo} alt="Metz-Sud Informatique Logo" className="logo" />
                    <h1 className="title">Metz-Sud Informatique</h1>
                </div>
                <nav>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    <ul
                        className={`main-menu ${menuOpen ? 'open' : ''} ${isScrolled ? 'scrolled-menu' : ''}`}
                    >
                        <li>
                            <Link to="/" onClick={toggleMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={toggleMenu}>
                                Nos services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/a-propos" onClick={toggleMenu}>
                                À Propos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Sticky>
    )
}

export default Header
