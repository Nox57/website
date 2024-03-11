// ServiceCard.jsx
import React from 'react'
import './ServiceCard.jsx'

const ServiceCard = ({ title, description }) => {
    return (
        <div className="serviceCard">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard
