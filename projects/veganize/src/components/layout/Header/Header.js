import React from 'react'
import styles from './Header.module.scss'
import logoMono from '../../../assets/images/mono_logo.png'
import background from '../../../assets/images/background.png'
const Header = () => {
  return (
    <div className={styles.root} id={'home'}>
      <img src={background} alt='back' className={styles.background}></img>
      <img src={logoMono} alt='logo' className={styles.image}></img>
    </div>
  )
}

export default Header