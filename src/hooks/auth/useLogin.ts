import { loginUser, LoginResponse, LoginCredentials } from '@/api/auth/login';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginCredentials>({
    mutationFn: loginUser,
  });
};
