import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Ici, vous traiteriez les données du formulaire, par exemple en envoyant un email.
        console.log(formData)
        alert('Message envoyé ! Nous vous contacterons bientôt.')
        // Réinitialiser le formulaire ou gérer l'état de soumission ici.
    }

    return (
        <div className="contactPage">
            <Helmet>
                <title>Contact | Metz-Sud Informatique</title>
                <meta
                    name="description"
                    content="Contactez Metz-Sud Informatique pour des questions ou un devis. Remplissez le formulaire ou utilisez nos informations de contact pour nous joindre directement."
                />
                <meta property="og:title" content="Contact | Metz-Sud Informatique" />
                <meta
                    property="og:description"
                    content="Contactez Metz-Sud Informatique pour des questions ou un devis. Remplissez le formulaire ou utilisez nos informations de contact pour nous joindre directement."
                />
                <meta property="og:url" content="https://www.metz-sud-informatique.com/contact" />
                <meta property="og:type" content="website" />
                {/* <meta
                    property="og:image"
                    content="https://www.votre-site.com/path-to-your-image.jpg"
                /> */}
                <link rel="canonical" href="https://www.metz-sud-informatique.com/contact" />
            </Helmet>
            <div className="contactContainer">
                <h1>Contactez-nous</h1>
                <p>
                    Vous avez des questions ou souhaitez obtenir un devis ? Remplissez le formulaire
                    ci-dessous ou utilisez nos informations de contact pour nous joindre
                    directement.
                </p>

                <div className="contactForm">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message :</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button type="submit">Envoyer</button>
                    </form>
                </div>

                <div className="directContact">
                    <h2>Autres moyens de nous contacter :</h2>
                    <p>
                        <strong>Email :</strong> votreadresse@example.com
                    </p>
                    <p>
                        <strong>Téléphone :</strong> +33 1 23 45 67 89
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
