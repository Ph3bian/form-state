import React from 'react'
import PropTypes from 'prop-types'
import { Success } from '../../assets/svg'
import styles from './register-user.module.scss'
const Completed = ({ user }) => (
  <div className={styles.Completed}>
    <Success />
    <p>
      Welcome, <b>{`${user.firstName} ${user.lastName}`}</b>{' '}
    </p>
    <p> You have successfully registered</p>
  </div>
)

Completed.propTypes = {
  user: PropTypes.object,
}
export default Completed
