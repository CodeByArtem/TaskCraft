import {
  requestPasswordReset,
  requestPasswordResetData,
} from '@/api/auth/requestPasswordReset';
import { useMutation } from '@tanstack/react-query';

export const useRequestPasswordReset = () => {
  return useMutation({
    mutationFn: (data: requestPasswordResetData) => requestPasswordReset(data),
  });
};
