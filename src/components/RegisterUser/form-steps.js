import React from 'react'
import UserDetails from './user-details'
import NextOfKin from './next-of-kin'
import Completed from './completed'

const FormSteps = (step, setStep, user, setUser) => [
  {
    title: 'Personal Details',
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
    title: 'Next of Kin Details',
    content: (
      <NextOfKin setStep={setStep} step={step} user={user} setUser={setUser} />
    ),
  },
  {
    title: 'Complete',
    content: <Completed user={user} />,
  },
]
export default FormSteps
