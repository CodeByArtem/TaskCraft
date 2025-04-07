'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [background, setBackground] = useState('/overlay_back.webp');
  const hasInteracted = useRef(false);

  const handleActivity = () => {
    if (hasInteracted.current) return;

    hasInteracted.current = true;
    setBackground('/back_task_craft.webp');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleActivity);
    document.body.addEventListener('click', handleActivity);

    return () => {
      window.removeEventListener('keydown', handleActivity);
      document.body.removeEventListener('click', handleActivity);
    };
  }, []);

  return (
    <div className={styles.authLayout} onClick={handleActivity}>
      <div className={styles.background}>
        <Image src={background} alt="Background" fill />
      </div>
      <div className={styles.logo}>
        <Image src="/logo.svg" width={250} height={40} alt="Logo" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default AuthLayout;
