import React from 'react'
import styles from './Footer.module.scss'
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.root}>
       <FontAwesomeIcon icon={faYoutube} size="3x" className={styles.icon}/>
       <FontAwesomeIcon icon={faFacebook} size="3x" className={styles.icon} />
       <FontAwesomeIcon icon={faInstagram} size="3x" className={styles.icon} />
    </div>
  )
}

export default Footer