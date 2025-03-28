import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { useRefreshToken } from '../auth/auth';
import { AxiosError } from 'axios';

export const useAuth = (userId: string, refreshToken: string) => {
  const refreshMutation = useRefreshToken();

  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      try {
        const response = await api.get('auth/me');

        console.log(response.data);

        return response.data;
      } catch (error) {
        if ((error as AxiosError).response?.status === 401) {
          // Если access-токен истек, пробуем обновить его
          const newToken = await refreshMutation.mutateAsync({
            userId,
            refresh_token: refreshToken,
          });
          api.defaults.headers.Authorization = `Bearer ${newToken.access_token}`;
          // Повторяем запрос с новым токеном
          const response = await api.get('/auth/me');
          return response.data;
        }
        throw error;
      }
    },
    retry: false,
  });
};
