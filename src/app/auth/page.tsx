'use client';

import React from 'react';
import Image from 'next/image';
import AuthSwitcher from '../../components/AuthSwitcher';

const AuthPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/logo.png"
        alt="Логотип"
        width={200}
        height={200}
        priority
        style={{ width: 'auto', height: 'auto' }}
      />
      <AuthSwitcher />
    </div>
  );
};

export default AuthPage;
