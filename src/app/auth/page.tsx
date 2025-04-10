'use client';

import React from 'react';
import AuthLayout from './layouts/AuthLayout';
import AuthSwitcher from '../../components/AuthSwitcher';

const AuthPage: React.FC = () => {
  return (
    <AuthLayout>
      <AuthSwitcher />
    </AuthLayout>
  );
};

export default AuthPage;
