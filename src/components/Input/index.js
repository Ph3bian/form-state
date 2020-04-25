import React from 'react'
import styles from './input.module.scss'

export default React.forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.Input}>
      <label>{label}</label>
      <input ref={ref} {...rest} />
      {error && (
        <div>
          <span className={styles.InputError}> {error}</span>
        </div>
      )}
    </div>
  )
})
