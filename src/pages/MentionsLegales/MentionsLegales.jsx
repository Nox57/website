import React from 'react'
import { Helmet } from 'react-helmet-async'
import './MentionsLegales.css'

const MentionsLegales = () => {
    return (
        <div className="mentions-legales-container">
            <Helmet>
                <title>Mentions Légales | Metz-Sud Informatique</title>
                <meta
                    name="description"
                    content="Mentions Légales de Metz-Sud Informatique. Découvrez les informations légales concernant l'éditeur du site, l'hébergeur, la propriété intellectuelle, la gestion des données personnelles, et plus encore."
                />
                <meta property="og:title" content="Mentions Légales | Metz-Sud Informatique" />
                <meta
                    property="og:description"
                    content="Mentions Légales de Metz-Sud Informatique. Découvrez les informations légales concernant l'éditeur du site, l'hébergeur, la propriété intellectuelle, la gestion des données personnelles, et plus encore."
                />
                <meta
                    property="og:url"
                    content="https://www.metz-sud-informatique.com/mentions-legales"
                />
                <meta property="og:type" content="website" />
                {/* <meta
                    property="og:image"
                    content="https://www.votre-site.com/path-to-your-image.jpg"
                /> */}
                <link
                    rel="canonical"
                    href="https://www.metz-sud-informatique.com/mentions-legales"
                />
            </Helmet>

            <h1>Mentions Légales</h1>

            <section>
                <h2>Éditeur du site</h2>
                <p>
                    <strong>Nom de l'entreprise :</strong> Metz-Sud Informatique
                </p>
                <p>
                    <strong>Adresse :</strong> 123 Rue de l'Informatique, 57000 Metz, France
                </p>
                <p>
                    <strong>Téléphone :</strong> +33 1 23 45 67 89
                </p>
                <p>
                    <strong>Email :</strong> contact@metz-sud-informatique.fr
                </p>
                <p>
                    <strong>Numéro SIRET :</strong> 123 456 789 00012
                </p>
                <p>
                    <strong>Directeur de la publication :</strong> Jean Dupont
                </p>
            </section>

            <section>
                <h2>Hébergeur du site</h2>
                <p>
                    <strong>Nom de l'hébergeur :</strong> OVH SAS
                </p>
                <p>
                    <strong>Adresse de l'hébergeur :</strong> 2 Rue Kellermann, 59100 Roubaix,
                    France
                </p>
                <p>
                    <strong>Téléphone de l'hébergeur :</strong> +33 9 72 10 10 07
                </p>
            </section>

            <section>
                <h2>Propriété intellectuelle</h2>
                <p>
                    Le contenu du site (textes, images, graphismes, logo, icônes, etc.) est la
                    propriété exclusive de Metz-Sud Informatique, sauf mention contraire. Toute
                    reproduction, distribution, modification, adaptation, retransmission ou
                    publication, même partielle, de ces différents éléments est strictement
                    interdite sans l'accord exprès par écrit de Metz-Sud Informatique. Cette
                    représentation ou reproduction, par quelque procédé que ce soit, constitue une
                    contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la
                    propriété intellectuelle.
                </p>
            </section>

            <section>
                <h2>Responsabilité</h2>
                <p>
                    Metz-Sud Informatique s'efforce de fournir sur le site des informations aussi
                    précises que possible. Toutefois, il ne pourra être tenu responsable des
                    omissions, des inexactitudes et des carences dans la mise à jour, qu'elles
                    soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
                    informations.
                </p>
                <p>
                    Metz-Sud Informatique ne pourra être tenu responsable des dommages directs et
                    indirects causés au matériel de l'utilisateur, lors de l'accès au site{' '}
                    <strong>metz-sud-informatique.fr</strong>, et résultant soit de l'utilisation
                    d'un matériel ne répondant pas aux spécifications indiquées, soit de
                    l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p>
                    Metz-Sud Informatique ne pourra également être tenu responsable des dommages
                    indirects (tels par exemple qu'une perte de marché ou perte d'une chance)
                    consécutifs à l'utilisation du site <strong>metz-sud-informatique.fr</strong>.
                </p>
            </section>

            <section>
                <h2>Gestion des données personnelles</h2>
                <p>
                    En France, les données personnelles sont notamment protégées par la loi n° 78-87
                    du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du
                    Code pénal et le Règlement Général sur la Protection des Données (RGPD).
                </p>
                <p>
                    À l'occasion de l'utilisation du site <strong>metz-sud-informatique.fr</strong>,
                    peuvent être recueillies : l'URL des liens par l'intermédiaire desquels
                    l'utilisateur a accédé au site <strong>metz-sud-informatique.fr</strong>, le
                    fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de
                    l'utilisateur.
                </p>
                <p>
                    En tout état de cause Metz-Sud Informatique ne collecte des informations
                    personnelles relatives à l'utilisateur que pour le besoin de certains services
                    proposés par le site <strong>metz-sud-informatique.fr</strong>. L'utilisateur
                    fournit ces informations en toute connaissance de cause, notamment lorsqu'il
                    procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site{' '}
                    <strong>metz-sud-informatique.fr</strong> l'obligation ou non de fournir ces
                    informations.
                </p>
                <p>
                    Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6
                    janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout
                    utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux
                    données personnelles le concernant, en effectuant sa demande écrite et signée,
                    accompagnée d'une copie du titre d'identité avec signature du titulaire de la
                    pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
                </p>
                <p>
                    Aucune information personnelle de l'utilisateur du site{' '}
                    <strong>metz-sud-informatique.fr</strong> n'est publiée à l'insu de
                    l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à
                    des tiers. Seule l'hypothèse du rachat de Metz-Sud Informatique et de ses droits
                    permettrait la transmission des dites informations à l'éventuel acquéreur qui
                    serait à son tour tenu de la même obligation de conservation et de modification
                    des données vis-à-vis de l'utilisateur du site{' '}
                    <strong>metz-sud-informatique.fr</strong>.
                </p>
                <p>
                    Le site n'est pas déclaré à la CNIL car il ne recueille pas d'informations
                    personnelles. Les bases de données sont protégées par les dispositions de la loi
                    du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la
                    protection juridique des bases de données.
                </p>
            </section>

            <section>
                <h2>Liens hypertextes et cookies</h2>
                <p>
                    Le site <strong>metz-sud-informatique.fr</strong> contient un certain nombre de
                    liens hypertextes vers d'autres sites, mis en place avec l'autorisation de
                    Metz-Sud Informatique. Cependant, Metz-Sud Informatique n'a pas la possibilité
                    de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence
                    aucune responsabilité de ce fait.
                </p>
                <p>
                    La navigation sur le site <strong>metz-sud-informatique.fr</strong> est
                    susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de
                    l'utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas
                    l'identification de l'utilisateur, mais qui enregistre des informations
                    relatives à la navigation d'un ordinateur sur un site. Les données ainsi
                    obtenues visent à faciliter la navigation ultérieure sur le site, et ont
                    également vocation à permettre diverses mesures de fréquentation.
                </p>
                <p>
                    Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à
                    certains services. L'utilisateur peut toutefois configurer son ordinateur pour
                    refuser l'installation des cookies.
                </p>
            </section>

            <section>
                <h2>Droit applicable et attribution de juridiction</h2>
                <p>
                    Tout litige en relation avec l'utilisation du site{' '}
                    <strong>metz-sud-informatique.fr</strong> est soumis au droit français. Il est
                    fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
            </section>

            <section>
                <h2>Les principales lois concernées</h2>
                <p>
                    Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6
                    août 2004 relative à l'informatique, aux fichiers et aux libertés.
                </p>
                <p>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
            </section>

            <section>
                <h2>Lexique</h2>
                <p>
                    <strong>Utilisateur :</strong> Internaute se connectant, utilisant le site
                    susnommé.
                </p>
                <p>
                    <strong>Informations personnelles :</strong> « les informations qui permettent,
                    sous quelque forme que ce soit, directement ou non, l'identification des
                    personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n°
                    78-17 du 6 janvier 1978).
                </p>
            </section>
        </div>
    )
}

export default MentionsLegales
