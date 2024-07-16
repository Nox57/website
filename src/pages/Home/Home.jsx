// ./pages/Home/Home.jsx
import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import MapSection from '../../components/MapSection/MapSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <MapSection />
        </>
    )
}

export default Home
