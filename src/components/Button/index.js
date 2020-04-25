import React from 'react'
import styles from './module.scss'

const Button = ({ type, children }) => (
  <button type={type} className={styles.Button}>
    {children}
  </button>
)
export default Button
