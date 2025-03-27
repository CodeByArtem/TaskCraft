import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Must be 3 characters or more')
    .required('Required'),
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
})
