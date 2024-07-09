import React from 'react'
import { MapContainer, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './MapSection.css'

const MapSection = () => {
    const center = [49.03, 6.17]
    const radius = 10000

    return (
        <section className="mapSection">
            <h2>Notre secteur d'intervention</h2>
            <MapContainer
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Circle center={center} radius={radius} />
            </MapContainer>
        </section>
    )
}

export default MapSection
