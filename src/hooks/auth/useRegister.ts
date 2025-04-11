import { registerUser, RegisterData } from '@/api/auth/register';
import { User } from '@/types/user';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation<User, Error, RegisterData>({
    mutationFn: registerUser,
  });
};
