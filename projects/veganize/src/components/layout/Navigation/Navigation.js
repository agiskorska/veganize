import React from 'react'
import styles from './Navigation.module.scss' 
import logo from '../../../assets/images/logo.png'
import { HashLink as Link } from 'react-router-hash-link'

const Navigation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.navlinks}>
        <Link className={styles.navlink} smooth to='#home' >home</Link>
        <Link className={styles.navlink} smooth to='#about' >about</Link>
        <Link className={styles.navlink} smooth to='#order' >order</Link>
        <Link className={styles.navlink} smooth to='#gallery' >gallery</Link>
        <Link className={styles.navlink} smooth to='#contact' >contact</Link>
      </div>
    </div>
  )
}

export default Navigation