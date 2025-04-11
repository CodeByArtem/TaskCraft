import { getCurrentUser } from '@/api/users/currentUser/getCurrentUser';
import { User } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
// import { toast } from 'react-toastify';

export const useGetCurrentUser = () => {
  return useQuery<User, Error>({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    // onSuccess: (data) => {
    //   console.log('Current user loaded:', data);
    // },
    // onError: (error) => {
    //   toast.error('Ошибка при получении пользователя');
    //   console.error('User fetch error:', error);
    // },
    retry: false, // do not repeat the request if there is an error (e.g. 401)
  });
};
