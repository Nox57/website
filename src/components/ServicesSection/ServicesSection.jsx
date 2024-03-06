import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

const ServicesSection = () => {
    const services = [
        {
            title: 'Dépannage',
            description: 'Résolution rapide de tous vos problèmes informatiques.',
        },
        {
            title: 'Installation de Windows',
            description: "Installation et configuration de votre système d'exploitation.",
        },
        // Ajoutez d'autres services ici
    ]

    return (
        <section>
            <h2>Nos Services</h2>
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
