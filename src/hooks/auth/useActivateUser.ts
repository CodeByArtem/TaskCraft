import { activateUser, ActivationResponse } from '@/api/auth/activateUser';
import { useMutation } from '@tanstack/react-query';

export const useActivateUser = () => {
  return useMutation<ActivationResponse, Error, string>({
    mutationFn: activateUser,
  });
};
