export const isInfo = (values) => {
  let errors = {}
  if (!values.firstName) {
    errors.firstName = 'First name is required'
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required'
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number is required'
  }
  if (values.phoneNumber && values.phoneNumber.length < 11) {
    errors.phoneNumber = 'Enter valid phone number'
  }
  if (!values.email) {
    errors.email = 'Email address is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  return errors
}

export const isNextOfKin = (values) => {
  console.log(values.nextOfKin.email, values.email)
  let errors = {}
  if (!values.nextOfKin.firstName) {
    errors.firstName = 'First name is required'
  }
  if (!values.nextOfKin.lastName) {
    errors.lastName = 'Last name is required'
  }
  if (!values.nextOfKin.email) {
    errors.email = 'Email address is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email address is invalid'
  } else if (values.email === values.nextOfKin.email) {
    errors.email = "User's email can't be same as next of kin"
  }

  return errors
}
