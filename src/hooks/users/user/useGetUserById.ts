import { getUser } from '@/api/users/user/getUserById';
import { useQuery } from '@tanstack/react-query';

export const useUser = (userId: string) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
    retry: false, // do not repeat the request if there is an error (e.g. 401)
  });
};
