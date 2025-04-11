import { refreshToken, RefreshData } from '@/api/auth/refreshToken';
import { getCurrentUser } from '@/api/users/currentUser/getCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useAuth = (data: RefreshData) => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      try {
        const user = await getCurrentUser();
        return user;
      } catch (error: unknown) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          try {
            // 🔁 We are trying to update the token
            await refreshToken(data);
            // 🔄 Repeat the request after the update
            return await getCurrentUser();
          } catch (refreshError) {
            console.error('Error updating token:', refreshError);
            throw refreshError;
          }
        }

        throw axiosError;
      }
    },
    retry: false,
  });
};
