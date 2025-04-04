import { getUser } from '@/api/users/getUser';
import { useQuery } from '@tanstack/react-query';

export const useUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    retry: false, // Если ошибка, не повторять запрос
  });
};
