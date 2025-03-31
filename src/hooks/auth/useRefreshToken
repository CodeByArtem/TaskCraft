import { useMutation } from '@tanstack/react-query';
import { RefreshResponse, RefreshData } from '../../api/auth/refreshToken';

export const useRefreshToken = () => {
  return useMutation<RefreshResponse, Error, RefreshData>({
    mutationFn: useRefreshToken,
  });
};
