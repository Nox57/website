// ./ServiceCard.jsx
import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className="serviceCard">
            <img src={image} alt={title} className="serviceCardImage" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard
