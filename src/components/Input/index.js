import React from 'react'
import styles from './input.module.scss'

export default ({ label, error, ...rest }) => {
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
