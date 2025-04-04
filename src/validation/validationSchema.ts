import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be 3 characters or more')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Must be a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(10, 'Password must be at least 10 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Must be a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(10, 'Password must be at least 10 characters')
    .required('Required'),
});
