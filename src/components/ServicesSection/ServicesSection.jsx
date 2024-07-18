import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ServiceCard from '../ServiceCard/ServiceCard'
import './ServicesSection.css'

const ServicesSection = () => {
    const services = [
        {
            title: 'Dépannage Informatique sur Mesure',
            description:
                'Confronté à un écran bleu ou à un PC qui refuse de démarrer ? Metz-Sud Informatique est à votre service pour diagnostiquer et résoudre vos soucis informatiques avec rapidité et efficacité. Nous proposons un service de dépannage personnalisé adapté à chaque situation, que vous soyez un professionnel ou un particulier à Metz et ses alentours. Confiez-nous vos équipements pour une tranquillité d’esprit garantie.',
            image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Conseil et Vente de Pièces Informatiques',
            description:
                'Optimisez ou réparez votre système avec les meilleures pièces détachées du marché. Nous vous aidons à choisir les composants idéaux pour améliorer les performances de votre ordinateur. Profitez de notre expertise pour des conseils avisés et des recommandations personnalisées, et obtenez les pièces dont vous avez besoin à des prix compétitifs.',
            image: 'https://images.pexels.com/photos/19012044/pexels-photo-19012044/free-photo-of-technologie-ordinateur-pc-predateur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: "Montage d'Ordinateurs Personnalisés",
            description:
                "Créez l'ordinateur de vos rêves avec notre service de montage personnalisé. Que vous ayez besoin d'une machine puissante pour le gaming, la création multimédia ou des tâches professionnelles exigeantes, nous vous conseillons sur le choix des composants et assemblons votre PC sur mesure. Faites confiance à Metz-Sud Informatique pour un système parfaitement adapté à vos besoins.",
            image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Optimisation et Installation de Windows',
            description:
                "Tirez le meilleur parti de votre ordinateur avec notre service d'installation et de configuration de Windows. Metz-Sud Informatique vous guide à travers l’optimisation de votre système pour booster ses performances et sécuriser vos données. Profitez d’un démarrage plus rapide, d’une meilleure sécurité et d’une expérience utilisateur améliorée grâce à nos experts en technologie.",
            image: 'https://images.pexels.com/photos/4567339/pexels-photo-4567339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Maintenance Préventive',
            description:
                'Anticipez les problèmes informatiques avant qu’ils ne surviennent avec notre service de maintenance préventive. Nous effectuons des contrôles réguliers de vos systèmes pour assurer leur bon fonctionnement et prévenir les pannes. Gardez votre tranquillité d’esprit et prolongez la durée de vie de vos équipements avec Metz-Sud Informatique.',
            image: 'https://images.pexels.com/photos/22679830/pexels-photo-22679830/free-photo-of-noir-et-blanc-ordinateur-fan-ventilateur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Sécurisation des Données',
            description:
                'Protégez vos données sensibles avec notre service de sécurisation des données. Nous mettons en place des solutions de sécurité avancées pour prévenir les cyberattaques et assurer la confidentialité de vos informations. Avec Metz-Sud Informatique, vos données sont entre de bonnes mains.',
            image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Formation Informatique',
            description:
                'Améliorez vos compétences informatiques grâce à nos sessions de formation personnalisées. Que vous soyez un particulier souhaitant se familiariser avec les outils numériques ou une entreprise cherchant à former ses employés, Metz-Sud Informatique propose des programmes adaptés à tous les niveaux.',
            image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            title: 'Installation de Réseaux',
            description:
                'Bénéficiez d’une installation réseau professionnelle pour votre domicile ou votre entreprise. Nos experts assurent la mise en place et la configuration de réseaux fiables et sécurisés, adaptés à vos besoins spécifiques. Faites confiance à Metz-Sud Informatique pour une connectivité optimale.',
            image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <section className="servicesSection">
            <h2>Services Informatiques Experts à Metz</h2>
            <p>
                Chaque défi technologique a sa solution. Découvrez comment nous pouvons vous aider :
            </p>
            <Carousel
                showDots={true}
                responsive={responsive}
                showArrows={true}
                autoPlay={false}
                keyBoardControl={true}
                infiniteLoop={true}
                showThumbs={true}
                showStatus={false}
            >
                {services.map((service) => (
                    <div key={service.title} className="carouselItem">
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            image={service.image}
                        />
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default ServicesSection
