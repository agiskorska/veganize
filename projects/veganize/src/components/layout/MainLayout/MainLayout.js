import React from 'react'
import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'
import Order from '../Order/Order'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import styles from './MainLayout.module.scss'

const MainLayout = () => {
  return (
    <div className={styles.root}>
        <Navigation />
        <Header />
        <About />
        <Order />
        <Gallery />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default MainLayout