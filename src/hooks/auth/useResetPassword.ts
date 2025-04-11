import { resetPassword, ResetPasswordData } from '@/api/auth/resetPassword';
import { useMutation } from '@tanstack/react-query';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordData) => resetPassword(data),
  });
};
