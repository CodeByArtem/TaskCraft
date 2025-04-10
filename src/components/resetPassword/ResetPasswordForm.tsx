import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../../validation/validationSchema';
import styles from './ResetPasswordForm.module.scss';
import Image from 'next/image';

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<ResetPasswordFormValues>({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: ResetPasswordFormValues) => {
    console.log('Register data:', data);
    reset();
  };

  return (
    <div className={styles.resetPasswordForm}>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div>
          <Link className={styles.link} href="/auth">
            Already have an account?
          </Link>
        </div>
        <div className={styles.actionButton}>
          <button type="submit">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
