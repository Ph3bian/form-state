import React from 'react'
import styles from './input.module.scss'

const Input = ({ label, error, ...rest }) => {
  return (
    <div className={styles.Input}>
      <label>{label}</label>
      <input {...rest} />
      {error && (
        <div>
          <span className={styles.InputError}> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input
