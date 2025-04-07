'use client';

import React from 'react';
import EmailForm from '../../../components/email/EmailForm';
import AuthLayout from '../layouts/AuthLayout';

const EnterEmailPage: React.FC = () => {
  return (
    <AuthLayout>
      <EmailForm />
    </AuthLayout>
  );
};

export default EnterEmailPage;
