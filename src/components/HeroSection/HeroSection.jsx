import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="heroSection">
            <h1 className="heroTitle">Bienvenue chez Metz-Sud Informatique</h1>
            <p className="heroText">
                Vous recherchez une solution rapide et fiable pour vos besoins informatiques ? Ne
                cherchez plus ! <strong>Metz-Sud Informatique</strong> est votre partenaire de
                confiance pour transformer vos défis technologiques en succès. Que vous soyez un
                particulier cherchant la tranquillité d'esprit ou une entreprise en quête
                d'efficacité, notre expertise couvre un large éventail de services : dépannage
                urgent, installation de systèmes, et maintenance sur mesure.
            </p>
            <p className="heroText">
                Rejoignez notre communauté de clients satisfaits et découvrez un service
                informatique irréprochable, parfaitement adapté à vos besoins spécifiques.{' '}
                <strong>Metz-Sud Informatique</strong> est votre allié de confiance à Metz et dans
                les environs, garantissant sérénité et performances optimisées.
            </p>
            <Link to="/contact" className="heroLink">
                Prenez rendez-vous dès aujourd'hui !
            </Link>
        </section>
    )
}

export default HeroSection
