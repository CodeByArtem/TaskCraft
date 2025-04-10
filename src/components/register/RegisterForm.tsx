import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validation/validationSchema';
import { useRegister } from '@/hooks/auth/useRegister';
import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './RegisterForm.module.scss';
import { ToastCloseButton } from '../toast/ToastCloseButton';

interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  privacyPolicy?: boolean;
}
const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { mutate, error } = useRegister();
  const {
    mutate: googleSignIn,
    isPending: googlePending,
    error: googleError,
  } = useGoogleAuth();

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate(
      {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
      {
        onSuccess: () => {
          toast.success('Registration completed!');
          reset();
        },
      },
    );
  };

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!');
    }
  }, [error]);

  useEffect(() => {
    if (googleError) {
      toast.error('Google login failed!');
    }
  }, [googleError]);

  return (
    <div className={styles.registerForm}>
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
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input
            type="text"
            {...register('username')}
            autoComplete="off"
            onBlur={() => trigger('username')}
          />
          <div className={styles.error}>
            {touchedFields.username && errors.username?.message}
            <p>{errors.username?.message}</p>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
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

        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <div className={styles.relative}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              autoComplete="off"
              onBlur={() => trigger('confirmPassword')}
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Image
                src={showConfirmPassword ? '/eye-show.svg' : '/eye-hide.svg'}
                width={35}
                height={35}
                alt="Toggle Confirm Password"
              />
            </button>
          </div>
          <div className={styles.error}>
            {touchedFields.confirmPassword && errors.confirmPassword?.message}
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register('privacyPolicy')} />
            <span>
              I agree to the{' '}
              <Link href="/terms-service" rel="noopener noreferrer">
                [Terms of Service]
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" rel="noopener noreferrer">
                [Privacy Policy]
              </Link>
            </span>
          </label>
          <div className={styles.error}>
            {touchedFields.privacyPolicy && errors.privacyPolicy?.message}
          </div>
        </div>

        <div className={styles.actionButtons}>
          <button type="submit">Create Account</button>
          <button
            type="button"
            className={styles.googleButton}
            onClick={() => googleSignIn()}
            disabled={googlePending}
          >
            <Image src="/google.svg" width={40} height={40} alt="Google Icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
