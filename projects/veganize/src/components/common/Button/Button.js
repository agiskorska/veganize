import React from 'react'
import styles from './Button.module.scss'

export const Button = ({name}) => {
  return (
    <div className={styles.root}>{name}</div>
  )
}
