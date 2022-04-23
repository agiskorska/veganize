import React from 'react'
import { Button } from '../../common/Button/Button'
import styles from './ContactForm.module.scss'

const ContactForm = () => {
  return (
    <div className={styles.root} id={'contact'}>
      <div className={styles.container}>
        <Button name={'Contact us'} />
        <Button name={'Order'} />
      </div>
    </div>
  )
}

export default ContactForm