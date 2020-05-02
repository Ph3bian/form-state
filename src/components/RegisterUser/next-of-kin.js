import React, { useState } from 'react'
import styles from './register-user.module.scss'
import Input from '../Input'
import Button from '../Button'
const UserDetails = ({ step, setStep, user, setUser }) => {
  const [errors, setErrors] = useState({})

  // handle onchange
  const handleNextOfKin = ({ target }) => {
    setUser({
      type: 'UPDATE_NEXTOFKIN_INFO',
      payload: { [target.name]: target.value },
    })
  }
  return (

      <form className={styles.RegisterForm}>
        <Input
          type="text"
          label="First name"
          name="firstName"
          value={user.nextOfKin.firstName}
          onChange={(e) => handleNextOfKin(e)}
          required
        />
        <Input
          type="text"
          label="Last name"
          name="lastName"
          value={user.nextOfKin.lastName}
          onChange={(e) => handleNextOfKin(e)}
          required
        />
        <Input
          type="tel"
          label="Phone number"
          name="phoneNumber"
          value={user.nextOfKin.phoneNumber}
          onChange={(e) => handleNextOfKin(e)}
          required
        />
        <Button type="submit"> Submit</Button>
      </form>

  )
}
export default UserDetails
