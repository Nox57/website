import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import MapSection from '../../components/MapSection/MapSection'

const Home = () => {
    return (
        <main>
            <HeroSection />
            <MapSection />
            <ServicesSection />
        </main>
    )
}

export default Home
