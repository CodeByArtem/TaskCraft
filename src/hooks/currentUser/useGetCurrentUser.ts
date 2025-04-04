import { refreshToken, RefreshData } from '@/api/auth/refreshToken';
import { getCurrentUser } from '@/api/currentUser/getCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetCurrentUser = (data: RefreshData) => {
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
            // 🔁 Пытаемся обновить токен
            await refreshToken(data);
            // 🔄 Повторяем запрос после обновления
            return await getCurrentUser();
          } catch (refreshError) {
            console.error('Ошибка при обновлении токена:', refreshError);
            throw refreshError;
          }
        }

        throw axiosError;
      }
    },
    retry: false,
  });
};
