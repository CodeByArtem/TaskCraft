'use client';

import ResetPasswordForm from '../../../components/resetPassword/ResetPasswordForm';
import AuthLayout from '../layouts/AuthLayout';

const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
