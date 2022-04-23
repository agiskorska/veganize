import React from 'react'
import styles from './Header.module.scss'
import logoMono from '../../../assets/images/mono_logo.png'

const Header = () => {
  return (
    <div className={styles.root} id={'home'}>
      <img src={logoMono} alt='logo' className={styles.image}></img>
    </div>
  )
}

export default Header