import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validation/validationSchema';
import styles from './LoginForm.module.scss';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
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
    console.log('Register data:', data);
    reset();
  };

  return (
    <div className={styles.loginForm}>
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
