import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const services = [
    {
        title: 'Dépannage Informatique',
        description:
            'Résolution rapide de tous vos problèmes informatiques, y compris les pannes matérielles et logicielles.',
        image: '/path-to-your-image/depannage.jpg', // Optionnel: Chemin vers une image représentative
    },
    {
        title: 'Installation de Windows',
        description:
            'Installation, mise à jour, et configuration de votre système d’exploitation Windows pour une performance optimale.',
        image: '/path-to-your-image/windows-install.jpg',
    },
    {
        title: 'Maintenance et Entretien',
        description:
            'Maintenance préventive pour assurer le bon fonctionnement de vos équipements et la sécurité de vos données.',
        image: '/path-to-your-image/maintenance.jpg',
    },
    {
        title: 'Sauvegarde et Récupération de Données',
        description:
            'Solutions de sauvegarde pour protéger vos données et services de récupération en cas de perte.',
        image: '/path-to-your-image/data-backup.jpg',
    },
    // Ajoutez d'autres services selon vos offres
]

const Services = () => {
    return (
        <div className="servicesContainer">
            <h1>Nos Services</h1>
            <div className="servicesList">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={service.image} // Passer l'image si votre ServiceCard le supporte
                    />
                ))}
            </div>
        </div>
    )
}

export default Services
