import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Metz-Sud Informatique. Tous droits réservés.</p>
        </footer>
    )
}

export default Footer
