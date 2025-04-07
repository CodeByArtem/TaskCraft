import { googleAuth } from '@/api/auth/googleAuth';
import { useMutation } from '@tanstack/react-query';

export const useGoogleAuth = () => {
  return useMutation<void, Error>({ mutationFn: googleAuth });
};
