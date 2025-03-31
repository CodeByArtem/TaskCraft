import { logoutUser, LogoutData } from '@/api/auth/logout';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
  return useMutation<void, Error, LogoutData>({
    mutationFn: logoutUser,
  });
};
