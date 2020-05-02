import React, { useReducer, useState } from 'react'

import { UserReducer, DefaultUser } from './user-reducer'
import styles from './register-user.module.scss'
import UserDetails from './user-details'
import NextOfKin from './next-of-kin.js'
const RegisterUser = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let active = [
    {
      title: 'Enter correct information below',
      content: (
        <UserDetails
          setStep={setStep}
          step={step}
          user={user}
          setUser={setUser}
        />
      ),
    },
    {
      title: 'Enter Next of Kin details below',
      content: (
        <NextOfKin
          setStep={setStep}
          step={step}
          user={user}
          setUser={setUser}
        />
      ),
    },
  ]
  return (
    <div className={styles.Register}>
      <h1>Register User</h1>
      <h3>{active[`${step}`].title}</h3>
      <div className={styles.RegisterBody}>{active[`${step}`].content}</div>
    </div>
  )
}
export default RegisterUser
