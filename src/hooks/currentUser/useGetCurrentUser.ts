import { getCurrentUser } from '@/api/currentUser/getCurrentUser';
import { useQuery } from '@tanstack/react-query';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    retry: false, // do not repeat the request if there is an error (e.g. 401)
  });
};
