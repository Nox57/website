// HeroSection.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="heroSection">
            <h1 className="heroTitle">Bienvenue chez Metz-Sud Informatique</h1>
            <p className="heroText">
                À la recherche d'une solution rapide et fiable pour tous vos soucis informatiques ?
                Ne cherchez plus ! <strong>Metz-Sud Informatique</strong> est là pour transformer
                vos défis technologiques en succès. Que vous soyez une entreprise en quête
                d'efficacité ou un particulier à la recherche de sérénité, notre expertise couvre un
                large éventail de services : du dépannage urgent à l'installation soignée de
                systèmes, en passant par une maintenance informatique sur mesure.
            </p>
            <p className="heroText">
                Rejoignez dès maintenant notre communauté de clients satisfaits et faites
                l'expérience d'un service informatique sans faille, adapté à vos besoins
                spécifiques. <strong>Metz-Sud Informatique</strong> est votre allié de confiance à
                Metz et dans toute la région, garantissant tranquillité d'esprit et performances
                optimisées.
            </p>
            <Link to="/contact" className="heroLink">
                Prenez rendez-vous aujourd'hui !
            </Link>
        </section>
    )
}

export default HeroSection
