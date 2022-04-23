import React from 'react'
import styles from './Gallery.module.scss'
import logo from '../../../assets/images/logo.png'

const Gallery = () => {
  return (
    <div className={styles.root} id='gallery'>
      <div className={styles.section}>
        <div className={styles.picture}><img src={logo} alt='img1' width='200' height='200'></img></div> 
        <div className={styles.text}>Lorem asdfasdf asdfasd fasdfasd fasdfasdfa asdfasdfasdf asdf asdf</div>
      </div>
      <div className={styles.section}> 
        <div className={styles.text}>Lorem asdfasdf asdfasd fasdfasd fasdfasdfa asdfasdfasdf asdf asdf</div>
        <div className={styles.picture}><img src={logo} alt='img2' width='200' height='200'></img></div> 
      </div>
      <div className={styles.section}> 
        <div className={styles.picture}><img src={logo} alt='img3' width='200' height='200'></img></div> 
        <div className={styles.text}>Lorem asdfasdf asdfasd fasdfasd fasdfasdfa asdfasdfasdf asdf asdf</div>
      </div>
    </div>
  )
}

export default Gallery