import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/validationSchema';
import { useLogin } from '@/hooks/auth/useLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './LoginForm.module.scss';
import { ToastCloseButton } from '../toast/ToastCloseButton';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, error } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormValues) => {
    mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success('Log in is successful!');
          reset();
        },
      },
    );
  };

  useEffect(() => {
    if (error) {
      toast.error('Error: wrong password or email! Please try again');
    }
  }, [error]);

  return (
    <div className={styles.loginForm}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        toastClassName={(context) =>
          context?.type === 'success'
            ? styles.toastSuccess
            : context?.type === 'error'
            ? styles.toastError
            : styles.toastDefault
        }
        className={styles.toastBody}
        closeButton={<ToastCloseButton />}
      />

      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            {...register('email')}
            placeholder="username@gmail.com"
            autoComplete="off"
            onBlur={() => trigger('email')}
          />
          <div className={styles.error}>
            {touchedFields.email && errors.email?.message}
            <p>{errors.email?.message}</p>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <div className={styles.relative}>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Password"
              autoComplete="off"
              onBlur={() => trigger('password')}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Image
                src={showPassword ? '/eye-show.svg' : '/eye-hide.svg'}
                width={35}
                height={35}
                alt="Toggle Password"
              />
            </button>
          </div>
          <div className={styles.error}>
            {touchedFields.password && errors.password?.message}
            <p>{errors.password?.message}</p>
          </div>
        </div>
        <div>
          <Link className={styles.link} href="/auth/request-password-reset">
            Forgot Password?
          </Link>
        </div>

        <div className={styles.actionButtons}>
          <button type="submit">Log In</button>
          <button type="button" className={styles.googleButton}>
            <Image src="/google.svg" width={40} height={40} alt="Google Icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
