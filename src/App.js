import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './ScrollToTop.js'
// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import MentionsLegales from './pages/MentionsLegales/MentionsLegales'
import NotFound from './components/NotFound/NotFound'
// Global CSS
import './normalize.css'
import './App.css'
import { Helmet } from 'react-helmet-async'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Helmet>
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />
                    <meta name="theme-color" content="#000000" />
                </Helmet>
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/mentions-legales" element={<MentionsLegales />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
