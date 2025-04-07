import {
  googleCallback,
  GoogleCallbackResponse,
} from '@/api/auth/googleCallback';
import { useMutation } from '@tanstack/react-query';

export const useGoogleCallback = () => {
  return useMutation<GoogleCallbackResponse, Error, string>({
    mutationFn: googleCallback,
  });
};
