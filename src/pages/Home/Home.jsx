// ./pages/Home/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import MapSection from '../../components/MapSection/MapSection'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Accueil | Metz-Sud Informatique</title>
                <meta
                    name="description"
                    content="Accueil - Metz-Sud Informatique. Découvrez nos services informatiques professionnels à Metz. Dépannage, installation Windows, maintenance pour entreprises et particuliers."
                />
                <meta
                    name="keywords"
                    content="informatique, dépannage, installation Windows, maintenance, Metz, services informatiques"
                />
                <meta property="og:title" content="Accueil | Metz-Sud Informatique" />
                <meta
                    property="og:description"
                    content="Accueil - Metz-Sud Informatique. Découvrez nos services informatiques professionnels à Metz. Dépannage, installation Windows, maintenance pour entreprises et particuliers."
                />
                <meta property="og:url" content="https://www.metz-sud-informatique.com/" />
                <meta property="og:type" content="website" />
                {/* <meta
                    property="og:image"
                    content="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                /> */}
                <link rel="canonical" href="https://www.metz-sud-informatique.com/" />
            </Helmet>
            <HeroSection />
            <ServicesSection />
            <MapSection />
        </>
    )
}

export default Home
