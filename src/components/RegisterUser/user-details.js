import React, { useState } from 'react'
import styles from './register-user.module.scss'
import Input from '../Input'
import Button from '../Button'
const UserDetails = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})

  // handle onchange
  const handleUser = ({ target }) => {
    setUser({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [target.name]: target.value },
    })
  }
  const handleContinue = (e) => {
    e.preventDefault()
    console.log(e)
    setStep(step + 1)
  }
  return (
    <form onSubmit={handleContinue} className={styles.RegisterForm}>
      <Input
        type="text"
        name="firstName"
        value={user.firstName}
        label="First name"
        onChange={(e) => handleUser(e)}
        error={errors.firstName}
        required
      />
      <Input
        type="text"
        name="lastName"
        value={user.lastName}
        label="Last name"
        onChange={(e) => handleUser(e)}
        error={errors.lastName}
        required
      />
      <Input
        type="tel"
        label="Phone number"
        name="phoneNumber"
        value={user.phoneNumber}
        onChange={(e) => handleUser(e)}
        error={errors.phoneNumber}
        required
      />
      <Input
        type="email"
        label="Email address"
        name="email"
        value={user.email}
        onChange={(e) => handleUser(e)}
        error={errors.email}
        required
      />
      <Button type="submit"> Continue</Button>
    </form>
  )
}
export default UserDetails
