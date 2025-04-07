import { useState } from 'react';
import RegisterForm from './register/RegisterForm';
import LoginForm from './login/LoginForm';
import styles from './AuthSwitcher.module.scss';
// import ResetPasswordForm from './resetPassword/ResetPasswordForm';

const AuthSwitcher: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <div className={styles.authSwitcher}>
        <button
          className={`
            ${styles.tabButton}
            ${isRegister ? styles.active : styles.inactive}
          `}
          onClick={() => setIsRegister(true)}
        >
          Create Account
        </button>
        <button
          className={`
            ${styles.tabButton}
            ${!isRegister ? styles.active : styles.inactive}
          `}
          onClick={() => setIsRegister(false)}
        >
          Log In
        </button>
      </div>
      {/* <ResetPasswordForm /> */}
      {isRegister ? <RegisterForm /> : <LoginForm />}
    </>
  );
};

export default AuthSwitcher;
