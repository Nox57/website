import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Metz-Sud Informatique. Tous droits réservés.</p>
            <Link to="/mentions-legales" className="footer-link">
                Mentions Légales
            </Link>
        </footer>
    )
}

export default Footer
