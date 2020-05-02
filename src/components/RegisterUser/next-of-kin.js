import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './register-user.module.scss'
import Input from '../Input'
import Button from '../Button'
import { isNextOfKin } from './validation'

const NextOfKin = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})
  // handle onchange

  const handleNextOfKin = ({ target }) => {
    setUser({
      type: 'UPDATE_NEXTOFKIN_INFO',
      payload: { [target.name]: target.value },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = isNextOfKin(user)
    setErrors(errors)
    if (Object.keys(errors).length > 0) return

    //handle http request

    setStep(step + 1)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.RegisterForm}>
      <Input
        type="text"
        label="First name"
        name="firstName"
        value={user.nextOfKin.firstName}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.firstName}
      />
      <Input
        type="text"
        label="Last name"
        name="lastName"
        value={user.nextOfKin.lastName}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.lastName}
      />
      <Input
        type="email"
        label="Email address"
        name="email"
        value={user.nextOfKin.email}
        onChange={(e) => handleNextOfKin(e)}
        error={errors.email}
      />
      <div className={styles.submit}>
        <Button onClick={() => setStep(step - 1)} type="button">
          Back
        </Button>
        <Button type="submit"> Submit</Button>
      </div>
    </form>
  )
}
NextOfKin.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
}
export default NextOfKin
