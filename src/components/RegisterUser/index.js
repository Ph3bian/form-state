import React, { useReducer, useState } from 'react'
import { UserReducer, DefaultUser } from './user-reducer'
import styles from './register-user.module.scss'
import FormSteps from './form-steps'

const RegisterUser = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let steps = FormSteps(step, setStep, user, setUser)

  return (
    <div className={styles.Register}>
      <h1>Register User: {steps[`${step}`].title} </h1>
      <h4>
        Step {step + 1}/{steps.length}
      </h4>
      <div className={styles.RegisterBody}>{steps[`${step}`].content}</div>
    </div>
  )
}
export default RegisterUser
