import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { emailSchema } from '../../validation/validationSchema';
import styles from './EmailForm.module.scss';

interface EmailFormValues {
  email: string;
}

const EmailForm: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, touchedFields },
  } = useForm<EmailFormValues>({
    resolver: yupResolver(emailSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: EmailFormValues) => {
    console.log('Register data:', data);
    setShowMessage(true);
    reset();
  };

  if (showMessage) {
    return (
      <p className={styles.text}>We will send you a password reset link</p>
    );
  }

  return (
    <div className={styles.emailForm}>
      <h2>Send Reset Link</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <div>
          <Link className={styles.link} href="/">
            Back to the home page
          </Link>
        </div>

        <div className={styles.actionButton}>
          <button type="submit">Send Reset Link</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
