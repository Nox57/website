import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const services = [
    {
        title: 'Dépannage Informatique à Metz',
        description:
            'Chez MetzTech Assistance, nous comprenons l’urgence de vos besoins en dépannage informatique. Notre équipe d’experts diagnostique et résout efficacement tout type de problèmes, qu’il s’agisse de pannes matérielles, de bugs logiciels, ou de menaces de sécurité. Nous intervenons rapidement à Metz et dans ses environs pour remettre vos équipements en état de fonctionnement optimal.',
        image: '/path-to-your-image/depannage.jpg',
    },
    {
        title: 'Installation et Configuration de Windows',
        description:
            'Optimisez la performance de votre PC avec notre service complet d’installation de Windows. MetzTech Assistance prend en charge l’installation, la mise à jour et la configuration minutieuse de votre système d’exploitation Windows. Nous veillons à personnaliser votre environnement informatique selon vos besoins, assurant ainsi une expérience utilisateur fluide et sécurisée.',
        image: '/path-to-your-image/windows-install.jpg',
    },
    {
        title: 'Maintenance et Entretien Informatique',
        description:
            'La maintenance préventive est clé pour la longévité et la sécurité de vos systèmes informatiques. Notre service de maintenance à Metz inclut des diagnostics réguliers, des mises à jour de logiciels, et le nettoyage de vos équipements pour prévenir les pannes et les failles de sécurité. Confiez-nous l’entretien de vos systèmes pour garantir leur fiabilité à long terme.',
        image: '/path-to-your-image/maintenance.jpg',
    },
    {
        title: 'Sauvegarde et Récupération de Données',
        description:
            'Protégez vos données précieuses avec nos solutions de sauvegarde et de récupération. MetzTech Assistance offre des stratégies de sauvegarde personnalisées pour sécuriser vos informations contre les pertes accidentelles ou les attaques malveillantes. En cas de perte de données, nos experts en récupération interviennent avec efficacité pour restaurer vos fichiers et vous assurer une tranquillité d’esprit.',
        image: '/path-to-your-image/data-backup.jpg',
    },
    {
        title: 'Nettoyage de Virus et Sécurisation de Système',
        description:
            'Face à une infection virale, MetzTech Assistance intervient pour nettoyer et sécuriser votre système d’exploitation. Notre expertise en cybersécurité nous permet de détecter et d’éliminer virus, malwares et logiciels espions, tout en renforçant les défenses de votre système contre les futures attaques. Nous effectuons une analyse complète pour assurer la remise en état et la protection de vos données et de votre vie privée, vous permettant ainsi de retrouver un environnement informatique sûr et performant.',
        image: '/path-to-your-image/virus-cleanup.jpg', // Assurez-vous de remplacer ceci par le chemin réel vers votre image
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
