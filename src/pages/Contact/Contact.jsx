import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
    const form = useRef()
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
    })
    const [messageSent, setMessageSent] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_1ejg2vd', 'template_n31vxdo', form.current, 'ZNlia65__OlXd1K0W')
            .then(
                (result) => {
                    setMessageSent(true)
                },
                (error) => {
                    alert('Il y a eu un problème avec votre envoi. Veuillez réessayer.')
                }
            )
    }

    return (
        <>
            <Helmet>
                <title>Contact | Metz-Sud Informatique</title>
                <meta
                    name="description"
                    content="Contactez Metz-Sud Informatique pour des questions ou un devis personnalisé. Remplissez le formulaire ou utilisez nos coordonnées pour nous contacter directement."
                />
                <meta property="og:title" content="Contact | Metz-Sud Informatique" />
                <meta
                    property="og:description"
                    content="Contactez Metz-Sud Informatique pour des questions ou un devis personnalisé. Remplissez le formulaire ou utilisez nos coordonnées pour nous contacter directement."
                />
                <meta property="og:url" content="https://www.metz-sud-informatique.com/contact" />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.metz-sud-informatique.com/contact" />
            </Helmet>
            <div className="contactContainer">
                <h1>Contactez-nous</h1>
                <p>
                    Vous avez des questions ou souhaitez obtenir un devis personnalisé ? Remplissez
                    le formulaire ci-dessous ou utilisez nos coordonnées pour nous contacter
                    directement.
                </p>
                <p>Nous nous engageons à vous répondre dans les plus brefs délais.</p>
                <div className="contactForm">
                    {messageSent ? (
                        <p>
                            <strong>
                                Merci pour votre message ! Nous vous recontacterons dans les plus
                                brefs délais.
                            </strong>
                        </p>
                    ) : (
                        <form ref={form} onSubmit={handleSubmit}>
                            <label htmlFor="user_name">Nom :</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="user_email">Email :</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="subject">Sujet :</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
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
                    )}
                </div>

                <div className="directContact">
                    <h2>Autres moyens de nous contacter :</h2>
                    <p>
                        <strong>Email :</strong> votreadresse@example.com
                    </p>
                    <p>
                        <strong>Téléphone :</strong> +33 1 23 45 67 89
                    </p>
                    <p>
                        <strong>Facebook :</strong>{' '}
                        <a
                            href="https://www.facebook.com/votrepage"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visitez notre page Facebook
                        </a>
                    </p>
                    <p>
                        <strong>WhatsApp :</strong>{' '}
                        <a
                            href="https://wa.me/33123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Envoyez-nous un message sur WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contact
