import React, { useState } from 'react'
import styles from './register-user.module.scss'
import Input from '../Input'
import Button from '../Button'
import { isNextOfKin } from './validation'

const UserDetails = ({ step, setStep, user, setUser }) => {
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
        type="tel"
        label="Email address"
        name="email"
        value={user.nextOfKin.email}
        onChange={(e) => handleNextOfKin(e)}
      />
      <div className={styles.submit}>
        <Button type="button" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button type="submit"> Submit</Button>
      </div>
    </form>
  )
}
export default UserDetails
