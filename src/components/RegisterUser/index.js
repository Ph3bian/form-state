import React, { useReducer, useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import { UserReducer, DefaultUser } from './user-reducer'
import styles from './register-user.module.scss'

const RegisterUser = () => {
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  const [errors, setErrors] = useState({})

  const handleUser = ({ target }) => {
    setUser({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { [target.name]: target.value },
    })
  }
  const handleNextOfKin = () => {}
  return (
    <div className={styles.Register}>
      <form className={styles.RegisterForm}>
        <div className={styles.RegisterFormHeader}>
          <h3>Register User</h3>
        </div>
        <div className={styles.RegisterFormBody}>
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
        </div>
        <div>
          <Button type="submit"> Submit</Button>
        </div>
      </form>
    </div>
  )
}
export default RegisterUser
