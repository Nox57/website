import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesSection.css'

const ServicesSection = () => {
    const services = [
        {
            title: 'Dépannage Informatique sur Mesure',
            description:
                'Confronté à un écran bleu ou à un PC qui refuse de démarrer ? Metz-Sud Informatique est à votre service pour diagnostiquer et résoudre vos soucis informatiques avec rapidité et efficacité. Nous proposons un service de dépannage personnalisé adapté à chaque situation, que vous soyez un professionnel ou un particulier à Metz et ses alentours. Confiez-nous vos équipements pour une tranquillité d’esprit garantie.',
        },
        {
            title: 'Optimisation et Installation de Windows',
            description:
                "Tirez le meilleur parti de votre ordinateur avec notre service d'installation et de configuration de Windows. Metz-Sud Informatique vous guide à travers l’optimisation de votre système pour booster ses performances et sécuriser vos données. Profitez d’un démarrage plus rapide, d’une meilleure sécurité et d’une expérience utilisateur améliorée grâce à nos experts en technologie.",
        },
        {
            title: 'Maintenance Préventive',
            description:
                'Anticipez les problèmes informatiques avant qu’ils ne surviennent avec notre service de maintenance préventive. Nous effectuons des contrôles réguliers de vos systèmes pour assurer leur bon fonctionnement et prévenir les pannes. Gardez votre tranquillité d’esprit et prolongez la durée de vie de vos équipements avec Metz-Sud Informatique.',
        },
        {
            title: 'Sécurisation des Données',
            description:
                'Protégez vos données sensibles avec notre service de sécurisation des données. Nous mettons en place des solutions de sécurité avancées pour prévenir les cyberattaques et assurer la confidentialité de vos informations. Avec Metz-Sud Informatique, vos données sont entre de bonnes mains.',
        },
        {
            title: 'Formation Informatique',
            description:
                'Améliorez vos compétences informatiques grâce à nos sessions de formation personnalisées. Que vous soyez un particulier souhaitant se familiariser avec les outils numériques ou une entreprise cherchant à former ses employés, Metz-Sud Informatique propose des programmes adaptés à tous les niveaux.',
        },
        {
            title: 'Installation de Réseaux',
            description:
                'Bénéficiez d’une installation réseau professionnelle pour votre domicile ou votre entreprise. Nos experts assurent la mise en place et la configuration de réseaux fiables et sécurisés, adaptés à vos besoins spécifiques. Faites confiance à Metz-Sud Informatique pour une connectivité optimale.',
        },
        // Ajoutez d'autres services ici si nécessaire
    ]

    return (
        <section className="servicesSection">
            <h2>Services Informatiques Experts à Metz</h2>
            <p>
                Chaque défi technologique a sa solution. Découvrez comment nous pouvons vous aider :
            </p>
            <div className="servicesGrid">
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
