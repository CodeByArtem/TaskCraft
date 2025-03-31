import {
  registerUser,
  RegisterResponse,
  RegisterData,
} from '@/api/auth/register';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  return useMutation<RegisterResponse, Error, RegisterData>({
    mutationFn: registerUser,
  });
};
