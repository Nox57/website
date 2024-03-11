// ServicesSection.jsx
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesSection.css' // Ajoutez ceci

const ServicesSection = () => {
    const services = [
        {
            title: 'Dépannage Informatique sur Mesure',
            description:
                'Confronté à un écran bleu ou à un PC qui refuse de démarrer ? MetzTech Assistance est à votre service pour diagnostiquer et résoudre vos soucis informatiques avec rapidité et efficacité. Nous proposons un service de dépannage personnalisé adapté à chaque situation, que vous soyez un professionnel ou un particulier à Metz et ses alentours. Confiez-nous vos équipements pour une tranquillité d’esprit garantie.',
        },
        {
            title: 'Optimisation et Installation de Windows',
            description:
                "Tirez le meilleur parti de votre ordinateur avec notre service d'installation et de configuration de Windows. MetzTech Assistance vous guide à travers l’optimisation de votre système pour booster ses performances et sécuriser vos données. Profitez d’un démarrage plus rapide, d’une meilleure sécurité et d’une expérience utilisateur améliorée grâce à nos experts en technologie.",
        },
        // Ajoutez d'autres services ici
    ]

    return (
        <section className="servicesSection">
            <h2>Services Informatiques Experts à Metz</h2>
            <p>
                Chaque défi technologique a sa solution. Découvrez comment nous pouvons vous aider :
            </p>
            <div>
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection
