export const DefaultUser = {
  firstName: '',
  lastName: '',
  bvn: '',
  dob: '',
  email: '',
  gender: '',
  nextOfKin: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
  },
}

export const UserReducer = (user, { type, payload }) => {
  switch (type) {
    case 'UPDATE_PERSONAL_INFO':
      return {
        ...user,
        ...payload,
      }
    case 'UPDATE_NEXTOFKIN_INFO':
      return {
        ...user,
        nextOfKin: {
          ...user.nextOfKin,
          ...payload,
        },
      }

    default:
      return user
  }
}
